from ai.predict import predict

def run_ai(request_data: dict) -> dict:
    try:
        return predict(request_data)
    except ValueError as e:
        # AI data yetarli emas
        return {
            "error": "not_enough_data",
            "message": str(e),
        }
