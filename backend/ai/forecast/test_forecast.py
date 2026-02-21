from forecast.product_forecast import forecast_product
from forecast.category_forecast import forecast_category
from tabulate import tabulate


def pretty_print(title, df):
    df = df.copy()
    df["yhat"] = df["yhat"].round(0).astype(int)

    print("\n" + "=" * 50)
    print(title.upper())
    print("=" * 50)
    print(
        tabulate(
            df,
            headers=["Sana", "Bashorat qilingan narx (so'm)"],
            tablefmt="pretty",
            showindex=False
        )
    )


# 🔹 PRODUCT FORECAST
product_df = forecast_product(
    category="food",
    product="flour",
    region="Tashkent",
    horizon_days=7
)

pretty_print(
    "Mahsulot bo‘yicha bashorat (UN, Toshkent)",
    product_df
)

# 🔹 CATEGORY FORECAST
category_df = forecast_category(
    category="raw_materials",
    region="Samarkand",
    horizon_days=7
)

pretty_print(
    "Kategoriya bo‘yicha bashorat (Xom ashyo, Samarqand)",
    category_df
)
