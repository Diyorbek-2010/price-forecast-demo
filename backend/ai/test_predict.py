from predict import predict

# 🔹 PRODUCT MODE
product_request = {
    "mode": "product",
    "category": "food",
    "product": "flour",
    "region": "Tashkent",
    "horizon_days": 7
}

print("\nPRODUCT PREDICT RESULT:")
print(predict(product_request))


# 🔹 CATEGORY MODE
category_request = {
    "mode": "category",
    "category": "raw_materials",
    "region": "Samarkand",
    "horizon_days": 7
}

print("\nCATEGORY PREDICT RESULT:")
print(predict(category_request))
