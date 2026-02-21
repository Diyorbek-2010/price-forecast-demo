from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import pandas as pd
from pathlib import Path
import hashlib
import random


app = FastAPI(title="Price Forecast Demo API", version="1.0.0")

# CORS (frontend uchun)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # productionda domen bilan cheklash tavsiya
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================================================
# CSV LOAD (faqat 1 marta yuklanadi)
# =========================================================

BASE_DIR = Path(__file__).resolve().parent.parent  # .../backend
CSV_PATH = BASE_DIR / "ai" / "data" / "prices.csv"

print("CSV PATH:", CSV_PATH)

df = pd.read_csv(CSV_PATH)

# column nomlarini standartlash
df.columns = [c.lower().strip() for c in df.columns]

required_cols = {"category", "product", "region", "date", "price"}
missing = required_cols - set(df.columns)
if missing:
    raise RuntimeError(f"CSV ustunlari yetishmayapti: {sorted(missing)}")

# price numeric bo‘lsin
df["price"] = pd.to_numeric(df["price"], errors="coerce")

# bo‘sh price’larni olib tashlaymiz
df = df.dropna(subset=["price"]).copy()

# date sorting uchun string bo‘lsa ham ishlashi mumkin, lekin imkon bo‘lsa parse qilamiz
# agar format turlicha bo‘lsa ham, errors='coerce' bilan xavfsiz
dt = pd.to_datetime(df["date"], errors="coerce", dayfirst=False)
if dt.notna().any():
    df["_date_dt"] = dt
else:
    df["_date_dt"] = pd.NaT  # fallback

print("CSV yuklandi:", df.shape)


# =========================================================
# REQUEST MODEL (Swagger to‘g‘ri chiqishi uchun)
# =========================================================

class AnalyzeRequest(BaseModel):
    category: str = Field(..., min_length=1)
    product: str = Field(..., min_length=1)
    region: str = Field(..., min_length=1)
    horizon_days: int = Field(30, ge=7, le=365, description="Kelajak prognoz kunlari (7..365)")
    history_days: int = Field(30, ge=7, le=365, description="Orqaga tarix kunlari (7..365)")


# =========================================================
# 📦 CATALOG ENDPOINTS (frontend select uchun)
# =========================================================

@app.get("/catalog/categories")
def get_categories() -> list[str]:
    return sorted(df["category"].dropna().astype(str).unique().tolist())


@app.get("/catalog/products")
def get_products(category: str) -> list[str]:
    category = str(category).strip()
    d = df[df["category"].astype(str) == category]
    return sorted(d["product"].dropna().astype(str).unique().tolist())


@app.get("/catalog/regions")
def get_regions(category: str, product: str) -> list[str]:
    category = str(category).strip()
    product = str(product).strip()
    d = df[(df["category"].astype(str) == category) & (df["product"].astype(str) == product)]
    return sorted(d["region"].dropna().astype(str).unique().tolist())


# =========================================================
# 🧠 ANALYZE (asosiy endpoint)
# =========================================================

def _stable_seed(*parts: str) -> int:
    """
    Bir xil payload -> bir xil seed.
    Bu natijani deterministik qiladi (deployda ham).
    """
    s = "|".join([p.strip().lower() for p in parts])
    h = hashlib.sha256(s.encode("utf-8")).hexdigest()
    return int(h[:8], 16)  # 32-bitga yaqin


@app.post("/analyze")
def analyze(req: AnalyzeRequest):
    """
    Frontend yuboradi:
    category, product, region, horizon_days, history_days
    """

    category = req.category.strip()
    product = req.product.strip()
    region = req.region.strip()
    horizon_days = int(req.horizon_days)
    history_days = int(req.history_days)

    # Filter
    d = df[
        (df["category"].astype(str) == category)
        & (df["product"].astype(str) == product)
        & (df["region"].astype(str) == region)
    ].copy()

    if d.empty:
        # aniqroq xabar
        return {
            "error": True,
            "message": "Data topilmadi (category/product/region bo‘yicha mos qator yo‘q).",
        }

    # sort
    if d["_date_dt"].notna().any():
        d = d.sort_values("_date_dt")
    else:
        d = d.sort_values("date")

    prices = d["price"].astype(float).tolist()
    dates = d["date"].astype(str).tolist()

    if len(prices) < 2:
        return {"error": True, "message": "Juda kam data (kamida 2 ta narx kerak)."}

    # history: oxirgi history_days, lekin data kam bo‘lsa mavjudini oladi
    history_prices = prices[-history_days:]
    history_dates = dates[-history_days:]

    last_price = float(history_prices[-1])

    # =====================================================
    # Deterministic forecast (random bor, lekin seed barqaror)
    # =====================================================
    seed = _stable_seed(category, product, region, str(horizon_days), str(history_days))
    rng = random.Random(seed)

    forecast_prices = []
    p = last_price

    # Eslatma: bu “fake” forecast. Siz keyin haqiqiy model qo‘shasiz.
    for _ in range(horizon_days):
        p += rng.uniform(-300, 300)
        forecast_prices.append(round(p, 2))

    forecast_dates = [f"Day+{i+1}" for i in range(horizon_days)]

    trend = "flat"
    if forecast_prices[-1] > last_price:
        trend = "up"
    elif forecast_prices[-1] < last_price:
        trend = "down"

    change_pct = ((forecast_prices[-1] - last_price) / last_price) * 100 if last_price != 0 else 0.0
    # ================================
# 🧠 REAL AI-STYLE TAHLIL
# ================================

    if change_pct > 2:
        ai_summary = (
            f"Mahsulot narxi prognoz bo‘yicha {change_pct:.2f}% ga oshishi kutilmoqda. "
            "Bozorda qimmatlashish tendensiyasi kuzatilmoqda."
        )
        ai_recommendation = (
            "Agar xarid qilish rejalashtirilgan bo‘lsa, tezroq xarid qilish tavsiya etiladi."
        )
        confidence = 90

    elif change_pct < -2:
        ai_summary = (
            f"Mahsulot narxi prognoz bo‘yicha {abs(change_pct):.2f}% ga pasayishi kutilmoqda. "
            "Bozorda arzonlashish tendensiyasi kuzatilmoqda."
        )
        ai_recommendation = (
            "Narx tushishi sababli xaridni biroz kechiktirish mumkin."
        )
        confidence = 88

    else:
        ai_summary = (
            "Mahsulot narxida sezilarli o‘zgarish kutilmayapti. "
            "Narx barqaror holatda qolishi prognoz qilinmoqda."
        )
        ai_recommendation = (
            "Hozirgi vaqtda bozor barqaror. Xarid qilish yoki kutish farq qilmaydi."
        )
        confidence = 85
    return {
        "history": {
            "labels": history_dates,
            "values": history_prices,
        },
        "forecast": {
            "labels": forecast_dates,
            "values": forecast_prices,
            "trend": trend,
        },
        "summary": {
            "last_price": last_price,
            "end_forecast": forecast_prices[-1],
            "change_pct": change_pct,
        },
        "ai": {
            "summary": ai_summary,
            "recommendation": ai_recommendation,
            "confidence": confidence,
        },
    }