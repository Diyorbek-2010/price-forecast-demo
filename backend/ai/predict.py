import os
import traceback
# from ai.generate_fake_data import generate_fake_data
from ai.forecast.product_forecast import forecast_product
from ai.forecast.category_forecast import forecast_category


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "data", "prices.csv")


def _not_enough_data(message: str) -> dict:
    """
    Standart error response (backend/frontend uchun xavfsiz)
    """
    return {
        "error": "not_enough_data",
        "message": message
    }


def predict(request: dict) -> dict:
    # generate_fake_data() # demo uchun kerak edi
    """
    Universal AI prediction function.
    Backend faqat shu funksiyani chaqiradi.

    Hech qachon exception tashlamaydi.
    Faqat JSON qaytaradi.
    """

    try:
        mode = request.get("mode")
        region = request.get("region")
        horizon_days = int(request.get("horizon_days", 7))

        if not mode or not region:
            return _not_enough_data("mode va region majburiy")

        # ======================
        # PRODUCT MODE
        # ======================
        if mode == "product":
            category = request.get("category")
            product = request.get("product")

            if not category or not product:
                return _not_enough_data(
                    "product mode uchun category va product majburiy"
                )

            df = forecast_product(
                category=category,
                product=product,
                region=region,
                horizon_days=horizon_days,
                data_path=DATA_PATH
            )

            # 🔒 DATA CHECK (ENG MUHIM JOY)
            if df is None or df.empty or len(df.dropna()) < 2:
                return _not_enough_data(
                    "Bu product uchun yetarli tarixiy ma'lumot topilmadi"
                )

            forecast = [
                {
                    "date": str(row["ds"]).split()[0],
                    "predicted_price": int(round(row["yhat"]))
                }
                for _, row in df.iterrows()
            ]
            

            return {
                "mode": "product",
                "category": category,
                "product": product,
                "region": region,
                "horizon_days": horizon_days,
                "forecast": forecast
            }

        # ======================
        # CATEGORY MODE
        # ======================
        elif mode == "category":
            category = request.get("category")

            if not category:
                return _not_enough_data(
                    "category mode uchun category majburiy"
                )

            df = forecast_category(
                category=category,
                region=region,
                horizon_days=horizon_days,
                data_path=DATA_PATH
            )

            # 🔒 DATA CHECK
            if df is None or df.empty or len(df.dropna()) < 2:
                return _not_enough_data(
                    "Bu category uchun yetarli tarixiy ma'lumot topilmadi"
                )

            forecast = [
                {
                    "date": str(row["ds"]).split()[0],
                    "predicted_price": int(round(row["yhat"]))
                }
                for _, row in df.iterrows()
            ]
            

            return {
                "mode": "category",
                "category": category,
                "region": region,
                "horizon_days": horizon_days,
                "forecast": forecast
            }

        # ======================
        # INVALID MODE
        # ======================
        else:
            return _not_enough_data(
                "Noto‘g‘ri mode. 'product' yoki 'category' bo‘lishi kerak"
            )

    except Exception as e:
        # 🔥 OXIRGI HIMoya — backend HECH QACHON yiqilmaydi
        print("AI PREDICT ERROR:")
        traceback.print_exc()

        return {
            "error": "ai_internal_error",
            "message": "AI ichida xato yuz berdi, lekin server ishlashda davom etmoqda"
        }
