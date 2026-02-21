from datetime import date as dtt
from dateutil.relativedelta import relativedelta
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

np.random.seed(42)

from random import uniform

CATEGORIES = {
    "ovqat": [
        "un","shakar","guruch","yog","gosht","tovuq","tuxum","sut",
        "non","makaron","kartoshka","piyoz","sabzi","olma","banan",
        "pomidor","bodring","tuz","choy","qahva"
    ],
    "kiyim": [
        "futbolka","jinsi","kurtka","koylak","sviter","palto","oyoq_kiyim",
        "sport_kiyim","ichki_kiyim","sharf","shapka","paypoq","kostyum","forma",
        "bolalar_kiyimi","ayollar_kiyimi","erkaklar_kiyimi","hudiy","koylak_erkakcha","yubka"
    ],
    "qurilish": [
        "sement","armatura","gisht","qum","shagal","beton","gips",
        "boyoq","kabel","quvur","yogoch","fanera","profil","tom_yopma",
        "plitka","issiqlik_izolyatsiyasi","oyna","eshiklar","derazalar","metall_list"
    ],
    "xom_ashyo": [
        "paxta_tolasi","jun","teri","ipak","alyuminiy","mis","polat",
        "plastik_granula","rezina","komir","temir_rudasi","rux","nikel",
        "xrom","yogoch_xom","ogit","don","moyli_ekin",
        "kimyoviy_asos","toquv_tolasi"
    ],
    "yoqilgi_energiya": [
        "benzin","dizel","gaz","elektr","komir_energiyasi","propan",
        "butan","kerosin","mazut","bioyoqilgi","quyosh_paneli","batareya",
        "generator","dvigatel_moyi","surkov_moyi","vodorod","etanol",
        "metanol","quvvat_bloki","energiya_bloki"
    ]
}


REGIONS = ["Toshkent","Samarqand","Andijon","Namangan","Farg'ona","Buxoro","Xorazm","Qashqadaryo","Surxondaryo","Jizzax","Sirdaryo","Navoiy"]

def generate_fake_data():
    rows = []
    # start_date = datetime(2025, 1, 1)

    today = dtt.today()
    start_date = today - relativedelta(years=1)
    days = 365

    for category, products in CATEGORIES.items():
        for product in products:
            for region in REGIONS:
                price = uniform(10_000, 100_000)

                for d in range(days):
                    date = start_date + timedelta(days=d)
                    
                    trend = uniform(-0.0005, 0.001)
                    noise = uniform(-0.01, 0.01)

                    price *= (1 + trend + noise)
                    price = max(price, 1000)
                    
                    rows.append([
                        date.strftime("%Y-%m-%d"),
                        category,
                        product,
                        region,
                        round(price, 2)
                    ])

    df = pd.DataFrame(
        rows,
        columns=["date","category","product","region","price"]
    )

    df.to_csv("ai/data/prices.csv", index=False)
    print("✅ Fake dataset yaratildi: data/prices.csv")
