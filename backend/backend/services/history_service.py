import pandas as pd


def get_history(
    csv_path: str,
    region: str,
    category: str,
    product: str | None,
    days: int
):
    df = pd.read_csv(csv_path)

    df = df[
        (df["region"] == region) &
        (df["category"] == category)
    ]

    if product:
        df = df[df["product"] == product]

    df = df.sort_values("date").tail(days)

    return [
        {
            "date": str(row["date"]),
            "price": int(row["price"])
        }
        for _, row in df.iterrows()
    ]
