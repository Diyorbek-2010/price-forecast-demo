import csv
import uuid
from pathlib import Path

DATA_DIR = Path("data/csv")
DATA_DIR.mkdir(parents=True, exist_ok=True)

def create_product_csv(data):
    file_name = f"{uuid.uuid4()}.csv"
    path = DATA_DIR / file_name

    with open(path, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["product", "category", "region", "date"])
        writer.writerow([
            data.mahsulot_nomi,
            data.mahsulot_turi,
            data.region,
            data.date
        ])

    return path


def create_category_csv(data):
    file_name = f"{uuid.uuid4()}.csv"
    path = DATA_DIR / file_name

    with open(path, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["category", "region", "date"])
        writer.writerow([
            data.mahsulot_turi,
            data.region,
            data.date
        ])

    return path
