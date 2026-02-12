import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      brand: { name: "BazaarAI" },
      nav: {
        home: "Home",
        demo: "Demo",
        problem: "Problem",
        solution: "Solution",
        how: "How it works",
        benefits: "Benefits",
        roadmap: "Roadmap",
        faq: "FAQ",
        mvp: "MVP",
        team: "Team",
      },
      common: {
        language: "Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        openDemo: "Open Demo",
        apiDocs: "API Docs",
        runForecast: "Run forecast",
        analyzing: "Analyzing...",
        source: "Source",
        demoDataset: "Demo dataset (CSV)",
      },

      home: {
        badge: "AI Price Forecasting",
        h1: "Predict price movement before it happens",
        p:
          "A premium AI-style dashboard for short-term price forecasting. Built as a demo today — designed to scale into a real ML product tomorrow.",
        ctaPrimary: "Open Demo",
        ctaSecondary: "Explore Problem",

        section1Title: "Why it matters",
        section1Text:
          "Price volatility makes planning difficult for households and small businesses. We turn historical data into clear trend signals, charts, and summaries.",

        section2Title: "What you get",
        s2aTitle: "Trend signal",
        s2aText: "UP / DOWN / FLAT direction at a glance.",
        s2bTitle: "Forecast chart",
        s2bText: "History + predicted trajectory for the chosen horizon.",
        s2cTitle: "AI-style summary",
        s2cText: "Human-friendly insight and a recommendation.",

        section3Title: "How it works",
        step1Title: "Select inputs",
        step1Text: "Choose category, product, region, and horizon.",
        step2Title: "Analyze",
        step2Text: "Backend computes trend and baseline forecast.",
        step3Title: "View results",
        step3Text: "Dashboard renders chart, trend, and summary.",

        footerTitle: "Ready to try it?",
        footerText: "Open the demo and generate your first forecast.",
      },

      problem: {
        title: "Price instability makes planning difficult",
        subtitle:
          "Households and small businesses struggle to decide when to buy, how much to stock, and how prices will change soon.",
        cards: {
          aT: "Unpredictable price spikes",
          aD: "Food and household goods can suddenly increase without warning.",
          bT: "No simple forecasting tools",
          bD: "Most people don’t have access to clear price predictions.",
          cT: "Poor buying decisions",
          cD: "People often buy at peak prices and overspend.",
          dT: "Small business risks",
          dD: "Shop owners struggle with inventory due to uncertainty.",
          eT: "Regional differences",
          eD: "Prices vary across regions and are hard to track.",
          fT: "Low data visibility",
          fD: "Historical data exists but isn’t used effectively.",
        },
        impactTitle: "Real-life impact",
        impactText1:
          "A family buys flour at a high price because they cannot predict a drop next week.",
        impactText2:
          "Small shop owners restock at the wrong time and lose profit due to sudden market changes.",
        ctaTitle: "We aim to solve this",
        ctaText:
          "Our system analyzes historical data and predicts near-term movement for better decisions.",
      },

      solution: {
        title: "A single dashboard: forecast, trend, and explanation",
        subtitle:
          "PriceForecast turns historical data into clear signals: direction, speed, and a recommended action.",
        provideA: "Forecast chart",
        provideAText: "History + predicted trajectory for 7/30/90 days.",
        provideB: "AI-style explanation",
        provideBText: "A human-friendly summary describing the movement.",
        provideC: "Recommendation",
        provideCText: "Buy now, wait, or monitor — backed by signals.",
        fastTitle: "Designed for fast decisions",
        fastText:
          "We don’t overwhelm users with complicated analytics — we provide a clean workflow anyone can understand quickly.",
        demoTitle: "Demo today, real ML tomorrow",
        demoText:
          "The architecture is built to replace baseline logic with real ML models and live data sources later.",
      },

      how: {
        title: "From data to forecast in seconds",
        subtitle:
          "The demo uses curated CSV data and baseline logic. Later we plug in real data + ML without breaking the UI.",
        step1: "Select inputs",
        step1Text: "Choose category, product, region, and forecast horizon.",
        step2: "Analyze",
        step2Text: "Backend loads relevant history, computes trend, generates forecast.",
        step3: "View results",
        step3Text: "Frontend renders chart, trend badge, and AI-style summary.",
        inputTitle: "What users provide",
        outputTitle: "What users receive",
        vsTitle: "Demo vs real product",
      },

      benefits: {
        title: "Better decisions, less waste, lower risk",
        subtitle:
          "Even a baseline forecast can reduce overspending and improve timing for households and small businesses.",
        coreA: "Save money",
        coreAText: "Buy when prices are expected to be lower and avoid peaks.",
        coreB: "Smarter stocking",
        coreBText: "Decide restock timing based on predicted movement.",
        coreC: "Clarity",
        coreCText: "See chart + trend + summary instead of guessing.",
        households: "For households",
        businesses: "For small businesses",
      },

      roadmap: {
        title: "From demo to a real AI product",
        subtitle:
          "We validate UX first, then improve data, then scale ML sophistication.",
        phase1: "Now — Demo",
        phase2: "Next — Real data",
        phase3: "Later — ML/AI",
        whyTitle: "Why this roadmap works",
        whyText:
          "Forecasting is not only modeling — data quality matters. Better data → better forecasts.",
      },

      faq: {
        title: "Frequently asked questions",
        subtitle:
          "Quick answers about the demo and how it evolves into a real AI product.",
      },

      mvp: {
        title: "What the demo includes today",
        subtitle:
          "A minimal end-to-end product: data → API → dashboard. Built to upgrade into real ML later.",
      },

      demo: {
        title: "Forecast dashboard",
        subtitle:
          "Select parameters and generate a forecast: trend, chart, and AI-style summary.",
        inputs: "Inputs",
        category: "Category",
        product: "Product",
        region: "Region",
        horizon: "Horizon (days)",
        tip: "Tip: 30 days is best for a demo.",
        trend: "Trend",
        startPrice: "Start price",
        expectedChange: "Expected change",
        end: "End",
        chartTitle: "Forecast chart",
        summaryTitle: "AI-style summary",
        placeholder: "Run forecast to view chart",
        failed: "Request failed",
      },
    },
  },

  ru: {
    translation: {
      brand: { name: "PriceForecast" },
      nav: {
        home: "Главная",
        demo: "Демо",
        problem: "Проблема",
        solution: "Решение",
        how: "Как работает",
        benefits: "Преимущества",
        roadmap: "Дорожная карта",
        faq: "FAQ",
        mvp: "MVP",
        team: "Команда",
      },
      common: {
        language: "Язык",
        theme: "Тема",
        light: "Светлая",
        dark: "Тёмная",
        openDemo: "Открыть демо",
        apiDocs: "API Docs",
        runForecast: "Запустить прогноз",
        analyzing: "Анализ...",
        source: "Источник",
        demoDataset: "Демо-датасет (CSV)",
      },
      home: {
        badge: "AI Прогноз цен",
        h1: "Предсказывайте движение цен заранее",
        p:
          "Премиальный AI-дашборд для краткосрочного прогнозирования цен. Сегодня — демо, завтра — настоящий ML продукт.",
        ctaPrimary: "Открыть демо",
        ctaSecondary: "Посмотреть проблему",

        section1Title: "Почему это важно",
        section1Text:
          "Волатильность цен усложняет планирование для семей и малого бизнеса. Мы превращаем историю в тренд, график и краткое объяснение.",

        section2Title: "Что вы получаете",
        s2aTitle: "Сигнал тренда",
        s2aText: "UP / DOWN / FLAT — быстро и понятно.",
        s2bTitle: "График прогноза",
        s2bText: "История + прогноз на выбранный период.",
        s2cTitle: "AI-резюме",
        s2cText: "Понятное объяснение и рекомендация.",

        section3Title: "Как это работает",
        step1Title: "Выбор параметров",
        step1Text: "Категория, продукт, регион, горизонт.",
        step2Title: "Анализ",
        step2Text: "Бэкенд считает тренд и базовый прогноз.",
        step3Title: "Результат",
        step3Text: "Дашборд показывает график, тренд и текст.",

        footerTitle: "Готовы попробовать?",
        footerText: "Откройте демо и получите первый прогноз.",
      },

      problem: {
        title: "Нестабильность цен мешает планированию",
        subtitle:
          "Семьи и малый бизнес не знают, когда покупать, сколько запасать и куда пойдут цены.",
        cards: {
          aT: "Непредсказуемые скачки",
          aD: "Цены могут резко вырасти без предупреждения.",
          bT: "Нет простых инструментов",
          bD: "Большинству недоступны понятные прогнозы.",
          cT: "Плохие решения",
          cD: "Покупают на пике и переплачивают.",
          dT: "Риски бизнеса",
          dD: "Сложно управлять запасами при неопределённости.",
          eT: "Разница по регионам",
          eD: "Цены сильно отличаются в разных регионах.",
          fT: "Слабая видимость данных",
          fD: "История есть, но редко используется эффективно.",
        },
        impactTitle: "Влияние в реальной жизни",
        impactText1:
          "Семья покупает муку дорого, хотя цена могла упасть на следующей неделе.",
        impactText2:
          "Магазины закупаются не вовремя и теряют прибыль из-за скачков.",
        ctaTitle: "Мы хотим это решить",
        ctaText:
          "Система анализирует историю и прогнозирует движение цен для лучших решений.",
      },

      solution: {
        title: "Единый дашборд: прогноз, тренд и объяснение",
        subtitle:
          "PriceForecast превращает историю в понятные сигналы: направление и рекомендацию.",
        provideA: "График прогноза",
        provideAText: "История + прогноз на 7/30/90 дней.",
        provideB: "AI-объяснение",
        provideBText: "Понятное резюме и контекст движения.",
        provideC: "Рекомендация",
        provideCText: "Купить сейчас, подождать или наблюдать.",
        fastTitle: "Для быстрых решений",
        fastText:
          "Мы не перегружаем аналитикой — даём чистый и понятный workflow.",
        demoTitle: "Демо сегодня, ML завтра",
        demoText:
          "Архитектура позволяет заменить базовую логику на реальный ML и живые источники данных.",
      },

      how: {
        title: "От данных к прогнозу за секунды",
        subtitle:
          "Демо использует CSV и базовую логику. Позже подключим реальные данные и ML без поломки UI.",
        step1: "Выбор параметров",
        step1Text: "Категория, продукт, регион, горизонт.",
        step2: "Анализ",
        step2Text: "Бэкенд грузит историю, считает тренд и прогноз.",
        step3: "Результат",
        step3Text: "UI показывает график, тренд и резюме.",
        inputTitle: "Что вводит пользователь",
        outputTitle: "Что получает пользователь",
        vsTitle: "Демо vs продукт",
      },

      benefits: {
        title: "Лучшие решения, меньше потерь, ниже риск",
        subtitle:
          "Даже базовый прогноз помогает меньше переплачивать и лучше планировать закупки.",
        coreA: "Экономия",
        coreAText: "Покупайте дешевле и избегайте пиков.",
        coreB: "Запасы",
        coreBText: "Выбирайте время закупки по тренду.",
        coreC: "Понятность",
        coreCText: "График + тренд + резюме вместо догадок.",
        households: "Для семей",
        businesses: "Для малого бизнеса",
      },

      roadmap: {
        title: "От демо к реальному AI-продукту",
        subtitle:
          "Сначала UX, затем данные, затем масштабируем ML.",
        phase1: "Сейчас — демо",
        phase2: "Дальше — данные",
        phase3: "Позже — ML/AI",
        whyTitle: "Почему это работает",
        whyText:
          "Прогноз — это не только модель. Качество данных критично: лучше данные → лучше прогноз.",
      },

      faq: {
        title: "FAQ",
        subtitle:
          "Ответы о демо и развитии до реального AI-продукта.",
      },

      mvp: {
        title: "Что включает MVP сегодня",
        subtitle:
          "Минимальный end-to-end продукт: данные → API → дашборд. Готов к апгрейду в ML.",
      },

      demo: {
        title: "Дашборд прогноза",
        subtitle:
          "Выберите параметры и получите прогноз: тренд, график и AI-резюме.",
        inputs: "Параметры",
        category: "Категория",
        product: "Продукт",
        region: "Регион",
        horizon: "Горизонт (дней)",
        tip: "Подсказка: 30 дней — идеально для демо.",
        trend: "Тренд",
        startPrice: "Стартовая цена",
        expectedChange: "Ожидаемое изменение",
        end: "Конец",
        chartTitle: "График прогноза",
        summaryTitle: "AI-резюме",
        placeholder: "Нажмите Run forecast чтобы увидеть график",
        failed: "Ошибка запроса",
      },
    },
  },

  uz: {
    translation: {
      brand: { name: "PriceForecast" },
      nav: {
        home: "Bosh sahifa",
        demo: "Demo",
        problem: "Muammo",
        solution: "Yechim",
        how: "Qanday ishlaydi",
        benefits: "Foydalar",
        roadmap: "Reja",
        faq: "FAQ",
        mvp: "MVP",
        team: "Jamoa",
      },
      common: {
        language: "Til",
        theme: "Rejim",
        light: "Yorug‘",
        dark: "Tungi",
        openDemo: "Demoni ochish",
        apiDocs: "API Docs",
        runForecast: "Prognoz qilish",
        analyzing: "Tahlil...",
        source: "Manba",
        demoDataset: "Demo ma’lumot (CSV)",
      },
      home: {
        badge: "AI Narx Prognozi",
        h1: "Narx yo‘nalishini oldindan bilib oling",
        p:
          "Qisqa muddatli narx prognozi uchun premium AI uslubidagi dashboard. Bugun demo — ertaga real ML mahsulot.",
        ctaPrimary: "Demoni ochish",
        ctaSecondary: "Muammoni ko‘rish",

        section1Title: "Nega muhim?",
        section1Text:
          "Narxlar o‘zgaruvchanligi rejalashtirishni qiyinlashtiradi. Biz tarixiy ma’lumotni trend, grafik va izohga aylantiramiz.",

        section2Title: "Nimani olasiz?",
        s2aTitle: "Trend signali",
        s2aText: "UP / DOWN / FLAT — bir qarashda.",
        s2bTitle: "Prognoz grafigi",
        s2bText: "Tarix + kelajak yo‘nalish.",
        s2cTitle: "AI uslubidagi izoh",
        s2cText: "Oddiy tilda xulosa va tavsiya.",

        section3Title: "Qanday ishlaydi?",
        step1Title: "Parametr tanlash",
        step1Text: "Kategoriya, mahsulot, hudud, muddat.",
        step2Title: "Tahlil",
        step2Text: "Backend trend va prognozni hisoblaydi.",
        step3Title: "Natija",
        step3Text: "Dashboard grafik, trend va izohni ko‘rsatadi.",

        footerTitle: "Tayyormisiz?",
        footerText: "Demoni ochib birinchi prognozni oling.",
      },

      problem: {
        title: "Narx beqarorligi rejalashtirishni qiyin qiladi",
        subtitle:
          "Oila va kichik biznes qachon olish, qancha zaxira qilish va narx qayerga ketishini bilmaydi.",
        cards: {
          aT: "Kutilmagan qimmatlashish",
          aD: "Narxlar ogohlantirishsiz keskin oshishi mumkin.",
          bT: "Oddiy prognoz vositasi yo‘q",
          bD: "Ko‘pchilikda tushunarli prognoz yo‘q.",
          cT: "Noto‘g‘ri xarid",
          cD: "Ko‘pincha eng qimmat paytda olishadi.",
          dT: "Biznes riski",
          dD: "Zaxira boshqaruvi qiyinlashadi.",
          eT: "Hududlar farqi",
          eD: "Hududlar bo‘yicha narxlar keskin farq qiladi.",
          fT: "Ma’lumot ko‘rinmasligi",
          fD: "Tarixiy data bor, lekin ishlatilmaydi.",
        },
        impactTitle: "Real hayotdagi ta’sir",
        impactText1:
          "Oila unni qimmat paytda oladi, aslida keyingi haftada tushishi mumkin edi.",
        impactText2:
          "Do‘konlar noto‘g‘ri vaqtda zaxira qilib foydani yo‘qotadi.",
        ctaTitle: "Biz buni yechmoqchimiz",
        ctaText:
          "Tizim tarixiy data asosida yaqin muddatli yo‘nalishni taxmin qiladi.",
      },

      solution: {
        title: "Bitta dashboard: prognoz, trend va izoh",
        subtitle:
          "PriceForecast tarixiy ma’lumotni aniq signallarga aylantiradi: yo‘nalish va tavsiya.",
        provideA: "Prognoz grafigi",
        provideAText: "7/30/90 kun uchun tarix + prognoz.",
        provideB: "AI izoh",
        provideBText: "Oddiy tilda xulosa va kontekst.",
        provideC: "Tavsiya",
        provideCText: "Hozir olish, kutish yoki kuzatish.",
        fastTitle: "Tez qarorlar uchun",
        fastText:
          "Murakkab analitika emas — tushunarli va tez workflow.",
        demoTitle: "Bugun demo, ertaga ML",
        demoText:
          "Arxitektura real ML va live data ulashga tayyor.",
      },

      how: {
        title: "Ma’lumotdan prognozgacha — soniyalarda",
        subtitle:
          "Demo CSV va baseline logikada. Keyin real data + ML qo‘shiladi (UI buzilmaydi).",
        step1: "Parametr tanlash",
        step1Text: "Kategoriya, mahsulot, hudud, muddat.",
        step2: "Tahlil",
        step2Text: "Backend tarixni oladi, trend va prognozni qiladi.",
        step3: "Natija",
        step3Text: "Frontend grafik, trend va izohni chiqaradi.",
        inputTitle: "Foydalanuvchi nimani kiritadi",
        outputTitle: "Foydalanuvchi nimani oladi",
        vsTitle: "Demo vs real mahsulot",
      },

      benefits: {
        title: "Yaxshi qaror, kam isrof, past risk",
        subtitle:
          "Baseline prognoz ham ortiqcha xarajatni kamaytiradi va vaqtni to‘g‘ri tanlashga yordam beradi.",
        coreA: "Pul tejash",
        coreAText: "Arzonroq paytda olish, qimmat poylardan qochish.",
        coreB: "Zaxirani to‘g‘ri qilish",
        coreBText: "Trendga qarab zaxira vaqtini tanlash.",
        coreC: "Aniqlik",
        coreCText: "Taxmin emas — grafik va xulosa.",
        households: "Oilalar uchun",
        businesses: "Biznes uchun",
      },

      roadmap: {
        title: "Demodan real AI mahsulotgacha",
        subtitle:
          "Avval UX, keyin data, keyin ML’ni kuchaytiramiz.",
        phase1: "Hozir — demo",
        phase2: "Keyin — real data",
        phase3: "Keyinroq — ML/AI",
        whyTitle: "Nega bu reja ishlaydi",
        whyText:
          "Prognoz faqat model emas — data sifati muhim: yaxshi data → yaxshi prognoz.",
      },

      faq: {
        title: "FAQ",
        subtitle:
          "Demo va keyingi rivojlanish bo‘yicha tez javoblar.",
      },

      mvp: {
        title: "MVP hozir nimalarni beradi",
        subtitle:
          "Minimal end-to-end: data → API → dashboard. Keyin ML’ga tayyor.",
      },

      demo: {
        title: "Prognoz dashboard",
        subtitle:
          "Parametr tanlang va prognoz oling: trend, grafik va xulosa.",
        inputs: "Parametrlar",
        category: "Kategoriya",
        product: "Mahsulot",
        region: "Hudud",
        horizon: "Muddat (kun)",
        tip: "Maslahat: 30 kun demo uchun eng yaxshi.",
        trend: "Trend",
        startPrice: "Boshlang‘ich narx",
        expectedChange: "Kutilgan o‘zgarish",
        end: "Oxiri",
        chartTitle: "Prognoz grafigi",
        summaryTitle: "AI xulosa",
        placeholder: "Grafik uchun prognozni ishga tushiring",
        failed: "So‘rov xatosi",
      },
    },
  },
};

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
