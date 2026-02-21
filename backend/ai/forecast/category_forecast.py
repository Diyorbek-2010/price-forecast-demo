import pandas as pd
from prophet import Prophet


def forecast_category(
    category: str,
    region: str,
    horizon_days: int,
    data_path: str = "data/prices.csv"
):
    """
    KATEGORIYA bo‘yicha umumiy forecast
    """

    df = pd.read_csv(data_path)

    # 1. Filtrlash
    df = df[
        (df["category"] == category) &
        (df["region"] == region)
    ]

    # 2. Kunlik o‘rtacha narx
    df = (
        df.groupby("date")["price"]
        .mean()
        .reset_index()
    )

    # 3. Prophet format
    df = df.rename(columns={
        "date": "ds",
        "price": "y"
    })

    model = Prophet(
        daily_seasonality=False,
        yearly_seasonality=True
    )
    model.fit(df)

    future = model.make_future_dataframe(periods=horizon_days)
    forecast = model.predict(future)

    result = forecast.tail(horizon_days)[["ds", "yhat"]]
    return result
