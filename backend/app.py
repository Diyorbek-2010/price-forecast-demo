from __future__ import annotations

from pathlib import Path
from datetime import timedelta
from typing import Tuple, Dict, Any

import numpy as np
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# =========================
# App
# =========================
app = FastAPI(title="Price Forecast Demo API", version="1.0.0")

# Frontend (Vite) uchun qulay CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# Data loading (CSV)
# =========================
DATA_PATH = Path(__file__).parent / "data" / "prices.csv"

if not DATA_PATH.exists():
    raise FileNotFoundError(f"CSV topilmadi: {DATA_PATH}")

if DATA_PATH.stat().st_size == 0:
    raise RuntimeError(f"CSV bo‘sh (0 bayt): {DATA_PATH}")

# CSV o‘qish: separator/encoding muammolariga chidamli
try:
    df = pd.read_csv(DATA_PATH)
except Exception:
    df = pd.read_csv(DATA_PATH, sep=";", encoding="utf-8", engine="python")

# Majburiy ustunlar
required_cols = {"date", "category", "product", "region", "price"}
missing = required_cols - set(df.columns)
if missing:
    raise RuntimeError(f"CSV ustunlari yetishmayapti: {sorted(missing)}")

# Tiplarni tozalash
df["date"] = pd.to_datetime(df["date"], errors="coerce")
df["price"] = pd.to_numeric(df["price"], errors="coerce")

df = df.dropna(subset=["date", "category", "product", "region", "price"])
df = df[df["price"] > 0]

# Ichkarida stringlarni bir xil ko‘rinishga keltiramiz
for col in ["category", "product", "region"]:
    df[col] = df[col].astype(str).str.strip()

# =========================
# Helpers
# =========================
def simple_forecast_linear(series: pd.Series, days: int) -> list[float] | None:
    """
    Demo uchun oddiy linear trend forecast.
    series: tarixiy narxlar (oxirgi N nuqta)
    days: kelajak kunlar soni
    """
    y = series.values.astype(float)
    if len(y) < 10:
        return None

    x = np.arange(len(y), dtype=float)

    # y = slope*x + intercept
    slope, intercept = np.polyfit(x, y, 1)

    last_x = x[-1]
    future = []
    for i in range(1, days + 1):
        pred = slope * (last_x + i) + intercept
        future.append(float(max(pred, 0.0)))
    return future


def ai_summary_text(trend: str, change_pct: float, horizon_days: int) -> Tuple[str, int, str]:
    """
    Demo uchun fake AI: summary + confidence + recommendation.
    """
    abs_cp = abs(change_pct)

    # O'zgarish kuchli bo'lsa confidence yuqoriroq
    confidence = int(min(92, max(55, 55 + abs_cp * 3)))

    if trend == "up":
        summary = (
            f"Narx oshish trendida. Keyingi {horizon_days} kunda taxminan "
            f"{abs_cp:.1f}% atrofida ko‘tarilishi kutilmoqda."
        )
        recommendation = "Agar zaxira kerak bo‘lsa, erta xarid qilish foydali bo‘lishi mumkin."
    elif trend == "down":
        summary = (
            f"Narx pasayish trendida. Keyingi {horizon_days} kunda taxminan "
            f"{abs_cp:.1f}% atrofida tushishi kutilmoqda."
        )
        recommendation = "Agar shoshilinch bo‘lmasa, biroz kutish tejamkor bo‘lishi mumkin."
    else:
        summary = (
            f"Narx barqaror ko‘rinmoqda. Keyingi {horizon_days} kunda katta o‘zgarish "
            f"kutilmayapti (taxminan {abs_cp:.1f}%)."
        )
        recommendation = "Barqaror holat: odatiy xarid rejasiga amal qilish mumkin."

    return summary, confidence, recommendation


def build_daily_series(filtered: pd.DataFrame) -> pd.DataFrame:
    """
    Bir kunda bir nechta narx bo'lsa, o'rtacha qilib birlashtiramiz.
    """
    daily = (
        filtered.groupby("date", as_index=False)["price"]
        .mean()
        .sort_values("date")
        .reset_index(drop=True)
    )
    return daily


# =========================
# Catalog endpoints
# =========================
@app.get("/catalog/categories")
def get_categories() -> list[str]:
    return sorted(df["category"].dropna().unique().tolist())


@app.get("/catalog/products")
def get_products(category: str) -> list[str]:
    d = df[df["category"] == str(category).strip()]
    return sorted(d["product"].dropna().unique().tolist())


@app.get("/catalog/regions")
def get_regions(category: str, product: str) -> list[str]:
    category = str(category).strip()
    product = str(product).strip()
    d = df[(df["category"] == category) & (df["product"] == product)]
    return sorted(d["region"].dropna().unique().tolist())


# =========================
# Analyze endpoint
# =========================
@app.post("/analyze")
def analyze(payload: Dict[str, Any]) -> Dict[str, Any]:
    """
    Demo analyze:
    - category/product/region bo'yicha filtr
    - history_days: oxirgi N kunni ko'rsatish
    - horizon_days: kelajak N kun prognoz
    """
    category = str(payload.get("category", "")).strip()
    product = str(payload.get("product", "")).strip()
    region = str(payload.get("region", "")).strip()

    horizon_days = int(payload.get("horizon_days", 30))
    history_days = int(payload.get("history_days", 60))

    if not category or not product or not region:
        return {"error": "bad_request", "message": "category, product, region majburiy"}

    if horizon_days < 1 or horizon_days > 365:
        return {"error": "bad_request", "message": "horizon_days 1..365 oralig‘ida bo‘lsin"}

    if history_days < 10 or history_days > 365:
        return {"error": "bad_request", "message": "history_days 10..365 oralig‘ida bo‘lsin"}

    filtered = df[
        (df["category"] == category)
        & (df["product"] == product)
        & (df["region"] == region)
    ]

    if filtered.empty:
        return {"error": "not_found", "message": "Bu tanlov bo‘yicha ma’lumot topilmadi"}

    daily = build_daily_series(filtered)

    if len(daily) < 15:
        return {"error": "not_enough_data", "message": "Prognoz uchun yetarli tarixiy data yo‘q"}

    history = daily.tail(history_days).copy()
    series = history["price"]

    forecast_vals = simple_forecast_linear(series, horizon_days)
    if forecast_vals is None:
        return {"error": "forecast_error", "message": "Forecast hisoblashda muammo (data juda kam bo‘lishi mumkin)"}

    last_date = history["date"].iloc[-1]
    forecast_dates = [
        (last_date + timedelta(days=i)).strftime("%Y-%m-%d")
        for i in range(1, horizon_days + 1)
    ]

    history_labels = history["date"].dt.strftime("%Y-%m-%d").tolist()
    history_values = [{"price": float(x)} for x in history["price"].tolist()]
    forecast_values = [{"predicted_price": float(x)} for x in forecast_vals]

    last_price = float(history_values[-1]["price"])
    end_forecast = float(forecast_values[-1]["predicted_price"])

    change_pct = ((end_forecast - last_price) / last_price) * 100.0

    trend = "flat"
    if end_forecast > last_price:
        trend = "up"
    elif end_forecast < last_price:
        trend = "down"

    ai_summary, confidence, recommendation = ai_summary_text(trend, change_pct, horizon_days)

    return {
        "meta": {
            "category": category,
            "product": product,
            "region": region,
            "horizon_days": horizon_days,
            "history_days": history_days,
        },
        "history": {
            "labels": history_labels,
            "values": history_values,
        },
        "forecast": {
            "labels": forecast_dates,
            "values": forecast_values,
            "trend": trend,
        },
        "summary": {
            "last_price": last_price,
            "end_forecast": end_forecast,
            "change_pct": round(change_pct, 2),
        },
        "ai": {
            "summary": ai_summary,
            "confidence": confidence,
            "recommendation": recommendation,
        },
    }
