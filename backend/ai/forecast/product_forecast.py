import pandas as pd
from prophet import Prophet


def forecast_product(
    category: str,
    product: str,
    region: str,
    horizon_days: int,
    data_path: str = "data/prices.csv"
):
    """
    Aniq MAHSULOT bo‘yicha forecast
    """

    # 1. Data o‘qish
    df = pd.read_csv(data_path)

    # 2. Filtrlash
    df = df[
        (df["category"] == category) &
        (df["product"] == product) &
        (df["region"] == region)
    ]

    # 3. Prophet format
    df = df.rename(columns={
        "date": "ds",
        "price": "y"
    })[["ds", "y"]]

    # 4. Model
    model = Prophet(
        daily_seasonality=False,
        yearly_seasonality=True
    )

    if df is None or df.empty or len(df.dropna()) < 2:
        raise ValueError(
        f"Not enough data to train model. Rows: {len(df) if df is not None else 0}"
    )

    model.fit(df)

    # 5. Kelajak
    future = model.make_future_dataframe(periods=horizon_days)
    forecast = model.predict(future)

    # 6. Output (faqat kelajak)
    result = forecast.tail(horizon_days)[["ds", "yhat"]]

    return result
