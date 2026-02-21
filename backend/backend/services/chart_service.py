from backend.utils.suggestion import generate_suggestion


def forecast_to_chart(
    forecast: list,
    horizon_days: int,
    old_values: list,
    old_labels: list,
    region: str,
    category: str
):
    forecast_values = [f["predicted_price"] for f in forecast]

    trend = (
        "up"
        if forecast_values[-1] >= forecast_values[0]
        else "down"
    )

    suggestion = generate_suggestion(
        old_values=old_values,
        forecast_values=forecast_values,
        region=region,
        category=category
    )

    return {
        "labels": [f["date"] for f in forecast],
        "values": forecast,
        "trend": trend,
        "old_labels": old_labels,
        "old_values": old_values,
        "suggestion": suggestion
    }
