def period_to_days(period: str) -> int:
    mapping = {
        "1 hafta": 7,
        "1 oy": 30,
        "3 oy": 90,
        "6 oy": 180,
        "1 yil": 365,
    }
    return mapping.get(period, 30)
