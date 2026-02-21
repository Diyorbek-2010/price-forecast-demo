def generate_suggestion(
    old_values: list[int],
    forecast_values: list[int],
    region: str,
    category: str
):
    if not old_values or not forecast_values:
        return {
            "action": "hold",
            "confidence": 0.0,
            "reason": "Yetarli ma'lumot yo'q"
        }

    start_price = old_values[-1]
    end_price = forecast_values[-1]

    change_pct = (end_price - start_price) / start_price * 100


    confidence = min(abs(change_pct) / 10, 1.0)
    if change_pct >= 1:
        action = "buy"
    elif change_pct <= -1:
        action = "sell"
    else:
        action = "hold"

    return {
        "action": action,
        "confidence": round(confidence, 2),
        "reason": (
            f"{region} hududida {category} bo'yicha "
            f"narx {change_pct:.1f}% ga o'zgarishi kutilmoqda"
        )
    }
