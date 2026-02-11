from __future__ import annotations

from pathlib import Path
from datetime import timedelta
from typing import Tuple, Dict, Any, List

import numpy as np
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# =========================
# App
# =========================
app = FastAPI(title="Price Forecast Demo API", version="1.1.0")

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

try:
    df = pd.read_csv(DATA_PATH)
except Exception:
    df = pd.read_csv(DATA_PATH, sep=";", encoding="utf-8", engine="python")

required_cols = {"date", "category", "product", "region", "price"}
missing = required_cols - set(df.columns)
if missing:
    raise RuntimeError(f"CSV ustunlari yetishmayapti: {sorted(missing)}")

df["date"] = pd.to_datetime(df["date"], errors="coerce")
df["price"] = pd.to_numeric(df["price"], errors="coerce")

df = df.dropna(subset=["date", "category", "product", "region", "price"])
df = df[df["price"] > 0]

for col in ["category", "product", "region"]:
    df[col] = df[col].astype(str).str.strip()


# =========================
# Helpers
# =========================
def build_daily_series(filtered: pd.DataFrame) -> pd.DataFrame:
    """Bir kunda bir nechta narx bo'lsa, o'rtacha qilib birlashtiramiz."""
    daily = (
        filtered.groupby("date", as_index=False)["price"]
        .mean()
        .sort_values("date")
        .reset_index(drop=True)
    )
    return daily


def simple_forecast_linear_noisy(series: pd.Series, days: int, noise_level: float = 0.004) -> List[float] | None:
    """
    Demo uchun linear trend + kichik tebranish (noise).
    noise_level: 0.004 => +/-0.4% atrofida tebranish
    """
    y = series.values.astype(float)
    if len(y) < 10:
        return None

    x = np.arange(len(y), dtype=float)

    # y = slope*x + intercept
    slope, intercept = np.polyfit(x, y, 1)

    last_x = x[-1]
    last_price = float(y[-1])

    future = []
    prev = last_price

    for i in range(1, days + 1):
        base_pred = slope * (last_x + i) + intercept
        base_pred = float(max(base_pred, 0.00001))

        # base pred ni previousga yaqinlashtirib "smooth" qilamiz
        # bu realistik ko'rinish beradi (har kuni sakrab ketmaydi)
        blended = 0.55 * base_pred + 0.45 * prev

        # noise: +/- noise_level
        noise = float(np.random.uniform(-noise_level, noise_level))
        pred = blended * (1.0 + noise)

        # narx manfiy bo'lib ketmasin
        pred = float(max(pred, 0.01))

        future.append(round(pred, 2))
        prev = pred

    return future


def ai_summary_text(trend: str, change_pct: float, horizon_days: int, product: str, region: str) -> Tuple[str, int, str]:
    """
    Confirmed "xarid qil / kut / odatdagidek" ko'rinishidagi AI xulosa.
    """
    abs_cp = abs(change_pct)
    confidence = int(min(92, max(55, 55 + abs_cp * 3)))

    product = product.strip()
    region = region.strip()

    if trend == "up":
        summary = (
            f"{product} ({region}) narxi oshish trendida. Keyingi {horizon_days} kunda "
            f"taxminan {abs_cp:.1f}% atrofida ko‘tarilishi kutilmoqda."
        )
        recommendation = "Tavsiya: agar yaqin kunlarda kerak bo‘lsa, hozirdan olish foydali."
    elif trend == "down":
        summary = (
            f"{product} ({region}) narxi pasayish trendida. Keyingi {horizon_days} kunda "
            f"taxminan {abs_cp:.1f}% atrofida tushishi kutilmoqda."
        )
        recommendation = "Tavsiya: shoshilinch bo‘lmasa, biroz kutib xarid qilish ma’qul."
    else:
        summary = (
            f"{product} ({region}) narxi barqaror ko‘rinmoqda. Keyingi {horizon_days} kunda "
            f"katta o‘zgarish kutilmayapti (≈ {abs_cp:.1f}%)."
        )
        recommendation = "Tavsiya: odatdagi reja bo‘yicha xarid qilsangiz bo‘ladi."

    return summary, confidence, recommendation


def trend_color(trend: str) -> str:
    # frontendga qulay: UP=green, DOWN=red, FLAT=gray
    if trend == "up":
        return "green"
    if trend == "down":
        return "red"
    return "gray"


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

    # ✅ noisy + smooth linear forecast
    forecast_vals = simple_forecast_linear_noisy(series, horizon_days, noise_level=0.0004)
    if forecast_vals is None:
        return {"error": "forecast_error", "message": "Forecast hisoblashda muammo (data juda kam bo‘lishi mumkin)"}

    last_date = history["date"].iloc[-1]
    forecast_dates = [
        (last_date + timedelta(days=i)).strftime("%Y-%m-%d")
        for i in range(1, horizon_days + 1)
    ]

    # ✅ CHART FIX: values endi float array (frontend chart uchun)
    history_labels = history["date"].dt.strftime("%Y-%m-%d").tolist()
    history_values = [float(x) for x in history["price"].tolist()]

    forecast_labels = forecast_dates
    forecast_values = [float(x) for x in forecast_vals]

    last_price = float(history_values[-1])
    end_forecast = float(forecast_values[-1])

    change_pct = ((end_forecast - last_price) / last_price) * 100.0

    trend = "flat"
    if end_forecast > last_price * 1.0005:
        trend = "up"
    elif end_forecast < last_price * 0.9995:
        trend = "down"

    ai_summary, confidence, recommendation = ai_summary_text(
        trend=trend,
        change_pct=change_pct,
        horizon_days=horizon_days,
        product=product,
        region=region,
    )

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
            "values": history_values,   # ✅ float[]
        },
        "forecast": {
            "labels": forecast_labels,
            "values": forecast_values,  # ✅ float[]
            "trend": trend,
            "trend_color": trend_color(trend),  # optional
        },
        "summary": {
            "last_price": round(last_price, 2),
            "end_forecast": round(end_forecast, 2),
            "change_pct": round(change_pct, 2),
        },
        "ai": {
            "summary": ai_summary,
            "confidence": confidence,
            "recommendation": recommendation,
        },
    }
