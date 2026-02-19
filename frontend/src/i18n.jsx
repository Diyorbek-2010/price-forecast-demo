import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      brand: { name: "BozorAI" },
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
        p: "A premium AI-style dashboard for short-term price forecasting. Built as a demo today — designed to scale into a real ML product tomorrow.",
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
        ChooseTitle: "Choose product and region",
        PickTitle: "Pick forecast horizon",
        Get_chartTitle: "Get chart + trend + summary",
        LiveTitle: "Live data ingestion in the works",
        MLTitle: "ML forecasting models",
        ConfidenceTitle: "Confidence intervals",
        AlertsTitle: "Alerts & watchlists",
        PlannedTitle: "Planned upgrades",
      },

      how: {
        title: "From data to forecast in seconds",
        subtitle:
          "The demo uses curated CSV data and baseline logic. Later we plug in real data + ML without breaking the UI.",
        step1: "Select inputs",
        step1Text: "Choose category, product, region, and forecast horizon.",
        step2: "Analyze",
        step2Text:
          "Backend loads relevant history, computes trend, generates forecast.",
        step3: "View results",
        step3Text: "Frontend renders chart, trend badge, and AI-style summary.",
        inputTitle: "What users provide",
        outputTitle: "What users receive",
        vsTitle: "Demo vs real product",
        CategoryTitle: "Category",
        ProductTitle: "Product",
        RegionTitle: "Region",
        HorizonTitle: "Horizon (7/30/90 days)",
        TrendTitle: "Trend signal (UP/DOWN/FLAT)",
        ChartTitle: "Chart-ready data with history and forecast",
        SummaryTitle: "Human-friendly summary + recommendation",
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
        PlanTitle: "Plan shopping with less uncertainty",
        AvoidTitle: "Avoid peak prices",
        CompareTitle: "Compare regions quickly",
        ReduceTitle: "Reduce inventory risk",
        ChooseTitle: "Choose restock timing",
        MonitorTitle: "Monitor key products",
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
        CuratedTitle: "Curated CSV dataset",
        BaselineTitle: "Baseline trend (UP/DOWN/FLAT), simple forecast",
        DashboardTitle: "Clean UI with chart, trend badge, and summary",
        StableTitle: "Stable API contract for future ML integration",
        AutomatedTitle: "Automated ingestion from public data sources",
        CleaningTitle: "Cleaning & normalization for better data quality",
        MonitoringTitle: "Monitoring & anomaly detection",
        ValidationTitle: "Validation pipeline for improving forecast accuracy",
        MLTitle: "ML forecasting models",
        ConfidenceTitle: "Confidence intervals",
        ExplainabilityTitle: "Explainability features for AI predictions",
        AlertsTitle: "Alerts and watchlist features for users",
      },

      faq: {
        title: "Frequently asked questions",
        subtitle:
          "Quick answers about the demo and how it evolves into a real AI product.",
        IsTitle: "Is this real AI?",
        ThisTitle:
          "This is a demo baseline. The UI and API are built to support real ML models later.",
        WhereTitle: "Where does the data come from?",
        DemoTitle:
          "Demo uses curated CSV data. Next step is live ingestion from real sources.",
        CanTitle: "Can it predict perfectly?",
        NoTitle: "No model is perfect. We provide direction + chart + context.",
        WillTitle: "Will you add alerts?",
        YesTitle:
          "Yes. Watchlists and notifications are planned for the real product.",
      },

      mvp: {
        title: "What the demo includes today",
        subtitle:
          "A minimal end-to-end product: data → API → dashboard. Built to upgrade into real ML later.",
        EndTitle: "End-to-end workflow",
        InputsTitle: "Inputs → analysis → chart + summary.",
        StableTitle: "Stable API contract",
        ChartTitle: "Chart-ready JSON response for UI rendering.",
        UpgradeableTitle: "Upgradeable architecture",
        BaselineTitle: "Baseline logic can be replaced by real ML later.",
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

        BozorAITitle: "BozorAI — Smart Product Price Forecasting Platform",
        VideodaTitle: "What is shown in the video",
        UshbuTitle:
          "This video demonstrates the full workflow of the BozorAI platform. The user selects a product category (such as rice, wheat, cotton, potatoes, onions, tomatoes, meat, dairy products, sugar, oil, cement, metals and other consumer or industrial goods) and enters the required parameters. The platform automatically analyzes historical prices, trading volumes, seasonality, regional factors and market dynamics. The AI model calculates 7, 30 and 90-day price forecasts in real time, showing the probability of increase or decrease in percentages, assessing risk levels and providing confidence intervals. Visual charts also display trends and seasonal fluctuations.",
        MuammoTitle: "How the problem and solution are connected",
        BozordaTitle:
          "Frequent price fluctuations in the market are a serious challenge for traders and producers. Sharp price drops can lead to losses, while selling at the wrong time can reduce profits. Many small and medium-sized businesses lack analytical tools, so decisions are often made based on subjective judgment. BozorAI solves this problem with a data-driven forecasting model. The platform analyzes demand and supply dynamics, seasonal factors, logistics costs and macroeconomic indicators to deliver more accurate and reliable price predictions. As a result, users can identify optimal selling times, improve inventory management and reduce financial risks.",
        TexnologiyalarTitle: "Technologies",
        BozorAImachineTitle:
          "BozorAI is built on a modern machine learning architecture. It combines Gradient Boosting Regressor, Random Forest and LSTM models using an ensemble approach to improve forecasting accuracy. Feature engineering includes trend, seasonality, moving averages, volatility and anomaly detection. The backend is developed with Python and FastAPI, and data is stored in PostgreSQL. Models are trained using Scikit-learn and TensorFlow and continuously updated with automated retraining. The system provides real-time predictions via REST API and displays results through a visual analytics module.",
        KatalogniTitle:
          "Catalog loading error (categories). Backend is not responding",
        ForecastTitle:"Forecast graph",
        competitionsTitle:"competitions",
        ProductTitle:"Product",
        areaTitle:"Area",
        DurationTitle:"Duration (days)",
        FellTitle:"Fell",
        IncreasedTitle:"Increased",
        ChangedTitle:"Has not changed.",
        ReliabilityTitle:"Reliability",
        ConclusionTitle:"Conclusion",
        RecommendationTitle:"Recommendation",
        AdviceTitle:"Tip: 30 days is convenient for a demo.",
        aiSummaryTitle:"AI-style summary",
      },
      team: {
        title: "Our team",
        subtitle: "We are a team of professionals with 2–3 years of experience: AI, data analysis, product, and full-stack.",
        s1userTitle: "AI Engineer",
        s1userText: "Works in time-series forecasting, feature engineering, and model evaluation. Focus on accelerating research and model iterations.",
        s2userTitle: "Data Analyst",
        s2userText: "Data cleaning, trend/seasonality analysis, and metrics. Visual analytics and business-friendly insights.",
        s3userTitle: "Product Manager",
        s3userText: "Market analysis, user needs and MVP scope. Maintains documentation (PRD/Spec) and content structure in a professional manner.",
        s4userTitle: "Full-stack Developer",
       s4userText: "Build products based on React (Vite) + FastAPI, manage API integration and deployment processes (Railway). Assemble UI/UX quickly and with high quality."},
    },
  },

  ru: {
    translation: {
      brand: { name: "BozorAI" },
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
        p: "Премиальный AI-дашборд для краткосрочного прогнозирования цен. Сегодня — демо, завтра — настоящий ML продукт.",
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
        ChooseTitle: "Выберите продукт и регион",
        PickTitle: "Выберите горизонт прогноза",
        Get_chartTitle: "Получите график + тренд + резюме",
        LiveTitle: "Работаем над подключением живых данных",
        MLTitle: "ML модели для прогнозирования",
        ConfidenceTitle: "Доверительные интервалы",
        AlertsTitle: "Уведомления и watchlist",
        PlannedTitle: "Планируемые обновления",
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
        CategoryTitle: "Категория",
        ProductTitle: "Продукт",
        RegionTitle: "Регион",
        HorizonTitle: "Горизонт (7/30/90 дней)",
        TrendTitle: "Сигнал тренда (UP/DOWN/FLAT)",
        ChartTitle: "Данные для графика с историей и прогнозом",
        SummaryTitle: "Понятное резюме + рекомендация",
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
        PlanTitle: "Планируйте покупки с меньшей неопределённостью",
        AvoidTitle: "Избегайте пиковых цен",
        CompareTitle: "Быстро сравнивайте регионы",
        ReduceTitle: "Снижайте риски запасов",
        ChooseTitle: "Выбирайте время закупки",
        MonitorTitle: "Следите за ключевыми продуктами",
      },

      roadmap: {
        title: "От демо к реальному AI-продукту",
        subtitle: "Сначала UX, затем данные, затем масштабируем ML.",
        phase1: "Сейчас — демо",
        phase2: "Дальше — данные",
        phase3: "Позже — ML/AI",
        whyTitle: "Почему это работает",
        whyText:
          "Прогноз — это не только модель. Качество данных критично: лучше данные → лучше прогноз.",
        CuratedTitle: "Кураторский CSV-датасет",
        BaselineTitle: "Базовый тренд (UP/DOWN/FLAT), простой прогноз",
        DashboardTitle: "Чистый UI с графиком, бейджем тренда и резюме",
        StableTitle: "Стабильный API для будущей ML интеграции",
        AutomatedTitle: "Автоматический сбор данных из публичных источников",
        CleaningTitle: "Очистка и нормализация для лучшего качества данных",
        MonitoringTitle: "Мониторинг и обнаружение аномалий",
        ValidationTitle: "Пайплайн валидации для улучшения точности прогнозов",
        MLTitle: "ML модели для прогнозирования",
        ConfidenceTitle: "Доверительные интервалы",
        ExplainabilityTitle: "Функции объяснения для AI-прогнозов",
        AlertsTitle: "Уведомления и функции watchlist для пользователей",
      },

      faq: {
        title: "FAQ",
        subtitle: "Ответы о демо и развитии до реального AI-продукта.",
        IsTitle: "Это настоящий AI?",
        ThisTitle:
          "Это демо-версия. UI и API построены для поддержки реальных ML моделей позже.",
        WhereTitle: "Откуда данные?",
        DemoTitle:
          "Демо использует кураторский CSV. Следующий шаг — живые данные.",
        CanTitle: "Он может предсказывать идеально?",
        NoTitle:
          "Нет модели не идеальны. Мы предоставляем направление, график и контекст.",
        WillTitle: "Вы добавите уведомления?",
        YesTitle:
          "Да. Watchlist и уведомления запланированы для реального продукта.",
      },

      mvp: {
        title: "Что включает MVP сегодня",
        subtitle:
          "Минимальный end-to-end продукт: данные → API → дашборд. Готов к апгрейду в ML.",
        EndTitle: "Сквозной рабочий процесс",
        InputsTitle: "Входные данные → анализ → диаграмма + сводка.",
        StableTitle: "Стабильный контракт API",
        ChartTitle: "JSON-ответ, готовый для отображения в пользовательском интерфейсе.",
        UpgradeableTitle: "Модернизируемая архитектура",
        BaselineTitle: "Базовую логику можно будет заменить реальным машинным обучением позже.",
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
        BozorAITitle:
          "BozorAI — Платформа интеллектуального прогнозирования цен на товары",

        VideodaTitle: "Что показано в видео",
        UshbuTitle:
          "В этом видео демонстрируется полный процесс работы платформы BozorAI. Пользователь выбирает тип продукта (например: рис, пшеница, хлопок, картофель, лук, помидоры, мясо, молочные продукты, сахар, масло, цемент, металл и другие потребительские и промышленные товары) и вводит необходимые данные. Платформа автоматически анализирует исторические цены, объёмы торговли, сезонность, региональные факторы и рыночную динамику. AI-модель в режиме реального времени рассчитывает прогноз цен на 7, 30 и 90 дней, показывает вероятность роста или падения в процентах, оценивает уровень риска и предоставляет доверительный интервал. Также с помощью визуальных графиков отображаются тренды и сезонные колебания.",
        MuammoTitle: "Как связаны проблема и решение",
        BozordaTitle:
          "Частые изменения цен на рынке являются серьёзной проблемой для продавцов и производителей. Резкое снижение цен может привести к убыткам, а продажа в неподходящий момент — к снижению прибыли. У многих малых и средних бизнесов отсутствуют аналитические инструменты, поэтому решения принимаются на основе субъективных оценок. BozorAI решает эту проблему с помощью модели прогнозирования на основе данных. Платформа учитывает динамику спроса и предложения, сезонные факторы, логистические расходы и макроэкономические показатели, предоставляя более точный и обоснованный прогноз цен. В результате пользователи могут определить оптимальное время продажи, улучшить управление запасами и снизить финансовые риски.",
        TexnologiyalarTitle: "Технологии",
        BozorAImachineTitle:
          "BozorAI построен на современной архитектуре машинного обучения. Используется комбинация моделей Gradient Boosting Regressor, Random Forest и LSTM с применением ансамблевого подхода для повышения точности прогнозов. На этапе feature engineering выделяются тренды, сезонность, скользящие средние, волатильность и аномалии. Backend разработан на Python и FastAPI, данные хранятся в базе PostgreSQL. Модели обучены с использованием Scikit-learn и TensorFlow и регулярно обновляются через механизм автоматического переобучения. Система предоставляет прогнозы в реальном времени через REST API и отображает результаты в виде визуальной аналитики.",
        KatalogniTitle:
          "Ошибка загрузки каталога (categories). Backend не отвечает",
        ForecastTitle: "График прогноза",
        competitionsTitle: "конкурсы",
        ProductTitle: "Продукт",
        areaTitle: "Регион",
        DurationTitle: "Горизонт (дней)",
        FellTitle: "Падение",
        IncreasedTitle: "Рост",
        ChangedTitle: "Без изменений",
        ReliabilityTitle: "Надёжность",
        ConclusionTitle: "Вывод",
        RecommendationTitle: "Рекомендация",
        AdviceTitle: "Подсказка: 30 дней удобно для демо.",
        aiSummaryTitle: "AI-резюме",
        },
      team: {
        title: "Наша команда",
        subtitle: "Мы — команда профессионалов с опытом 2–3 года: AI, аналитика данных, продукт и full-stack.",
        s1userTitle: "AI-инженер",
        s1userText: "Работает с прогнозированием временных рядов, feature engineering и оценкой моделей. Фокус на ускорении исследований и итераций моделей.",
        s2userTitle: "Аналитик данных",
        s2userText: "Очистка данных, анализ трендов/сезонности и метрик. Визуальная аналитика и инсайты для бизнеса.",
        s3userTitle: "Продукт-менеджер",
        s3userText: "Анализ рынка, потребностей пользователей и объёма MVP. Поддерживает документацию (PRD/Spec) и структуру контента на профессиональном уровне.",
        s4userTitle: "Full-stack разработчик",
        s4userText: "Создаёт продукты на основе React (Vite) + FastAPI, управляет интеграцией API и процессами деплоя (Railway). Быстро и качественно собирает UI/UX.",
      }
    },
  },

  uz: {
    translation: {
      brand: { name: "BozorAI" },
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
        p: "Qisqa muddatli narx prognozi uchun premium AI uslubidagi dashboard. Bugun demo — ertaga real ML mahsulot.",
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
          aT: "Kutilmagan narx o‘zgarishlari",
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
        fastText: "Murakkab analitika emas — tushunarli va tez workflow.",
        demoTitle: "Bugun demo, ertaga ML",
        demoText: "Arxitektura real ML va live data ulashga tayyor.",
        ChooseTitle: "Mahsulot va hududni tanlang",
        PickTitle: "Prognoz muddatini tanlang",
        Get_chartTitle: "Grafik + trend + izohni oling",
        LiveTitle: "Live data ulash ustida ishlayapmiz",
        MLTitle: "ML prognoz modellari",
        ConfidenceTitle: "Ishonch oralig‘i",
        AlertsTitle: "Bildirishnomalar va watchlistlar",
        PlannedTitle: "Rejalashtirilgan yangilanishlar",
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
        CategoryTitle: "Kategoriya",
        ProductTitle: "Mahsulot",
        RegionTitle: "Hudud",
        HorizonTitle: "Muddat (7/30/90 kun)",
        TrendTitle: "Trend signali (UP/DOWN/FLAT)",
        ChartTitle: "Tarix va prognoz bilan grafik ma’lumot",
        SummaryTitle: "Tushunarli izoh + tavsiya",
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
        PlanTitle: "Kam noaniqlik bilan xaridni rejalashtiring",
        AvoidTitle: "Qimmat narxlardan qoching",
        CompareTitle: "Hududlarni tez taqqoslang",
        ReduceTitle: "Zaxira riskini kamaytiring",
        ChooseTitle: "Zaxira vaqtini tanlang",
        MonitorTitle: "Asosiy mahsulotlarni kuzatib boring",
      },

      roadmap: {
        title: "Demodan real AI mahsulotgacha",
        subtitle: "Avval UX, keyin data, keyin ML’ni kuchaytiramiz.",
        phase1: "Hozir — demo",
        phase2: "Keyin — real data",
        phase3: "Keyinroq — ML/AI",
        whyTitle: "Nega bu reja ishlaydi",
        whyText:
          "Prognoz faqat model emas — data sifati muhim: yaxshi data → yaxshi prognoz.",
        CuratedTitle: "Kuratordan CSV dataset",
        BaselineTitle: "Baseline trend (UP/DOWN/FLAT)",
        DashboardTitle: "Grafik, trend va izoh bilan toza UI",
        StableTitle: "Kelajakdagi ML integratsiyasi uchun barqaror API",
        AutomatedTitle: "Ommaviy data manbalaridan avtomatik ma’lumot olish",
        CleaningTitle:
          "Yaxshiroq data sifati uchun tozalash va normallashtirish",
        MonitoringTitle: "Anomaliyalarni aniqlash va monitoring",
        ValidationTitle:
          "Prognoz aniqligini oshirish uchun validatsiya pipeline",
        MLTitle: "ML prognoz modellari",
        ConfidenceTitle: "Ishonch oralig‘i",
        ExplainabilityTitle: "AI prognozlari uchun tushuntirish xususiyatlari",
        AlertsTitle:
          "Foydalanuvchilar uchun bildirishnomalar va watchlist xususiyatlari",
      },

      faq: {
        title: "FAQ",
        subtitle: "Demo va keyingi rivojlanish bo‘yicha tez javoblar.",
        IsTitle: "Bu haqiqiy AI emasmi?",
        ThisTitle:
          "Bu demo versiya. UI va API keyinchalik real ML modellarini qo‘llab-quvvatlash uchun qurilgan.",
        WhereTitle: "Ma’lumot qayerdan keladi?",
        DemoTitle:
          "Demo kuratordan CSV ma’lumotidan foydalanadi. Keyingi qadam — real manbalardan live data.",
        CanTitle: "Bu mukammal prognoz bera oladimi?",
        NoTitle:
          "Yo‘q, hech qanday model mukammal emas. Biz yo‘nalish + grafik + kontekst taqdim etamiz.",
        WillTitle: "Siz bildirishnomalarni qo‘shasizmi?",
        YesTitle:
          "Ha. Watchlist va bildirishnomalar real mahsulot uchun rejalashtirilgan.",
      },

      mvp: {
        title: "MVP hozir nimalarni beradi",
        subtitle:
          "Minimal end-to-end: data → API → dashboard. Keyin ML’ga tayyor.",
        EndTitle: "End-to-end workflow",
        InputsTitle: "Inputs → analysis → chart + summary.",
        StableTitle: "Barqaror API",
        ChartTitle: "UI rendering uchun chart-ready JSON javob.",
        UpgradeableTitle: "Yaxshilanishga tayyor arxitektura",
        BaselineTitle:
          "Baseline logikasi keyin real ML bilan almashtirilishi mumkin.",
      },

      demo: {
        title: "Prognoz dashboard",
        subtitle: "Parametr tanlang va prognoz oling: trend, grafik va xulosa.",
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

        BozorAITitle:
          "BozorAI — Aqlli Mahsulot Narxini Bashorat Qilish Platformasi",
        VideodaTitle: "Videoda nima ko‘rsatilgan",
        UshbuTitle:
          "Ushbu videoda BozorAI platformasining to‘liq ishlash jarayoni namoyish etiladi. Foydalanuvchi tizimga mahsulot turini (masalan: guruch, bug‘doy, paxta, kartoshka, piyoz, pomidor, go‘sht, sut mahsulotlari, shakar, yog‘, sement, metall va boshqa iste’mol hamda sanoat tovarlari) tanlaydi va tegishli ma’lumotlarni kiritadi. Platforma avtomatik ravishda tarixiy narxlar, savdo hajmi, mavsumiylik, hududiy omillar va bozor dinamikasini tahlil qiladi. AI modeli real vaqt rejimida 7, 30 va 90 kunlik narx prognozini hisoblab, o‘sish yoki pasayish ehtimolini foizlarda ko‘rsatadi, risk darajasini baholaydi va ishonchlilik intervalini taqdim etadi. Shuningdek, vizual grafiklar orqali trend va mavsumiy tebranishlar ko‘rsatiladi.",
        MuammoTitle: "Muammo va yechim qanday bog‘liq",
        BozordaTitle:
          "Bozorda mahsulot narxlarining tez-tez o‘zgarishi savdogarlar va ishlab chiqaruvchilar uchun jiddiy muammo hisoblanadi. Narxning keskin pasayishi zarar keltirishi, noto‘g‘ri vaqtda sotish esa daromadni kamaytirishi mumkin. Ko‘plab kichik va o‘rta biznes subyektlarida analitik vositalar mavjud emasligi sababli qarorlar subyektiv baholash asosida qabul qilinadi. BozorAI ushbu muammoni ma’lumotlarga asoslangan prognozlash modeli orqali hal qiladi. Platforma talab va taklif dinamikasi, mavsumiy omillar, logistika xarajatlari hamda makroiqtisodiy ko‘rsatkichlarni hisobga olib, aniqroq va asosli narx bashoratini taqdim etadi. Natijada foydalanuvchilar optimal sotish vaqtini aniqlay oladi, zaxira boshqaruvini yaxshilaydi va moliyaviy risklarni kamaytiradi.",
        TexnologiyalarTitle: "Texnologiyalar",
        BozorAImachineTitle:
          "BozorAI machine learning arxitekturasi asosida qurilgan. Gradient Boosting Regressor, Random Forest va LSTM kombinatsiyasi, feature engineering (trend, seasonality, moving average, volatility) qo‘llaniladi. Backend: Python + FastAPI. Data: PostgreSQL. Model: Scikit-learn va TensorFlow. REST API orqali prediction xizmatlari beriladi va vizual analitika modulida grafiklar chiqariladi.",
        KatalogniTitle:
          "Katalogni olishda xatolik (categories). Backend Javob bermayapti",
        ForecastTitle:"Prognoz grafigi",
        competitionsTitle:"Tanlovlar",
        ProductTitle:"Mahsulot",
        areaTitle:"Hudud",
        DurationTitle:"Muddat (kun)",
        FellTitle:"Pasaydi",
        IncreasedTitle:"O‘sdi",
        ChangedTitle:"O‘zgarish yo‘q.",
        ReliabilityTitle:"Ishonchlilik",
        ConclusionTitle:"Xulosa",
        RecommendationTitle:"Tavsiya",
        AdviceTitle:"Maslahat: 30 kun demo uchun qulay.",
        aiSummaryTitle:"AI uslubidagi xulosa",
        },
      team: {
        title: "Bizning jamoa",
        subtitle: "Biz 2–3 yillik tajribaga ega mutaxassislar jamoasimiz: AI, data tahlil, mahsulot va full-stack.",
        s1userTitle: "AI muhandisi",
        s1userText: "Vaqt qatorlarini prognozlash, feature engineering va model baholash bo‘yicha ishlaydi. Tadqiqot va model iteratsiyalarini tezlashtirishga e’tibor qaratadi.",
        s2userTitle: "Data tahlilchi",
        s2userText: "Data tozalash, trend/mavsumiylik tahlili va metrikalar. Vizual analitika va biznes uchun tushunarli insightlar.",
        s3userTitle: "Mahsulot menejeri",
        s3userText: "Bozor tahlili, foydalanuvchi ehtiyojlari va MVP doirasi. Hujjatlarni (PRD/Spec) va kontent tuzilishini professional tarzda saqlaydi.",
        s4userTitle: "Full-stack dasturchi",
       s4userText: "React (Vite) + FastAPI asosida mahsulotlar quradi, API integratsiyasi va deployment jarayonlarini (Railway) boshqaradi. UI/UX ni tez va sifatli yig‘adi."
      }
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