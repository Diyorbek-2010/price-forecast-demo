from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from pathlib import Path

app = FastAPI()

# CORS (frontend uchun)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================================================
# CSV LOAD (PROFESSIONAL — faqat 1 marta yuklanadi)
# =========================================================

BASE_DIR = Path(__file__).resolve().parent.parent
CSV_PATH = BASE_DIR / "ai" / "data" / "prices.csv"

print("CSV PATH:", CSV_PATH)

df = pd.read_csv(CSV_PATH)

# column nomlarini standartlash
df.columns = [c.lower().strip() for c in df.columns]

print("CSV yuklandi:", df.shape)


# =========================================================
# 📦 CATALOG ENDPOINTS (frontend select uchun)
# =========================================================

@app.get("/catalog/categories")
def get_categories():
    cats = sorted(df["category"].dropna().unique().tolist())
    return cats


@app.get("/catalog/products")
def get_products(category: str):
    category = str(category).strip()
    d = df[df["category"] == category]
    prods = sorted(d["product"].dropna().unique().tolist())
    return prods


@app.get("/catalog/regions")
def get_regions(category: str, product: str):
    category = str(category).strip()
    product = str(product).strip()
    d = df[(df["category"] == category) & (df["product"] == product)]
    regs = sorted(d["region"].dropna().unique().tolist())
    return regs


# =========================================================
# 🧠 ANALYZE (asosiy endpoint — hozircha test)
# =========================================================

@app.post("/analyze")
def analyze(data: dict):
    """
    Frontend yuboradi:
    category, product, region, horizon_days, history_days
    """

    category = data.get("category")
    product = data.get("product")
    region = data.get("region")
    horizon_days = int(data.get("horizon_days", 30))
    history_days = int(data.get("history_days", 30))

    # Filter
    d = df[
        (df["category"] == category)
        & (df["product"] == product)
        & (df["region"] == region)
    ].copy()

    if d.empty:
        return {"error": True, "message": "Data topilmadi"}

    d = d.sort_values("date")

    prices = d["price"].tolist()
    dates = d["date"].tolist()

    # history
    history_prices = prices[-history_days:]
    history_dates = dates[-history_days:]

    last_price = history_prices[-1]

    # FAKE forecast (hozircha test)
    forecast_prices = []
    p = last_price

    import random

    for _ in range(horizon_days):
        p += random.uniform(-300, 300)
        forecast_prices.append(round(p, 2))

    forecast_dates = [f"Day+{i+1}" for i in range(horizon_days)]

    trend = "flat"
    if forecast_prices[-1] > last_price:
        trend = "up"
    elif forecast_prices[-1] < last_price:
        trend = "down"

    change_pct = ((forecast_prices[-1] - last_price) / last_price) * 100

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
            "summary": "AI narx o‘zgarishini tahlil qildi.",
            "recommendation": "Narxni kuzatishda davom eting.",
            "confidence": 87,
        },
    }