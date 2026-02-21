import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import demo from "../assets/Demovideo/DemoVideo.mp4";

const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000";

/**
 * 1) KO‘RINADIGAN NOMLARNI O‘ZBEKCHA QILISH UCHUN LUG‘AT
 * Backendga baribir asl qiymat (masalan "flour") ketadi.
 */
const CATEGORY_UZ = {
  food: "Oziq-ovqat",
  household: "Ro‘zg‘or buyumlari",
};

const PRODUCT_UZ = {
  flour: "Un",
  eggs: "Tuxum",
  rice: "Guruch",
  sugar: "Shakar",
  oil: "O‘simlik yog‘i",
  milk: "Sut",
  bread: "Non",
  meat: "Go‘sht",
  soap: "Sovun",
  detergent: "Kir yuvish kukuni",
  shampoo: "Shampun",
  toothpaste: "Tish pastasi",
  tissue: "Salfetka",
  toilet_paper: "Tualet qog‘ozi",
};

const REGION_UZ = {
  Tashkent: "Toshkent",
  Samarkand: "Samarqand",
  Bukhara: "Buxoro",
  Andijan: "Andijon",
  Fergana: "Farg‘ona",
  Namangan: "Namangan",
  Khorezm: "Xorazm",
  Karakalpakstan: "Qoraqalpog‘iston",
};

/* ===================== UI: VIDEO ===================== */
function DemoVideo() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
      <div style={{ position: "relative", width: "100%", minHeight: "520px" }}>
        <video
          className="w-full h-full rounded-2xl object-cover"
          src={demo}
          autoPlay
          loop
          muted
          controls
        />
      </div>
    </div>
  );
}

/* ===================== UI: ANALYSIS BLOCK ===================== */
function DemoAnalysis() {
  const { t } = useTranslation();
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-semibold text-white">{t("demo.BazaarAITitle")}</h2>

      <div className="mt-4 space-y-4">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <h3 className="text-white font-semibold">{t("demo.BazaarAITitle")}</h3>
          <p className="mt-2 text-white/75 leading-relaxed">{t("demo.UshbuTitle")}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <h3 className="text-white font-semibold">{t("demo.MuammoTitle")}</h3>
          <p className="mt-2 text-white/75 leading-relaxed">{t("demo.BozordaTitle")}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <h3 className="text-white font-semibold">{t("demo.TexnologiyalarTitle")}</h3>
          <p className="mt-2 text-white/75 leading-relaxed">{t("demo.BazaarAImachineTitle")}</p>
        </div>
      </div>
    </div>
  );
}

/* ===================== UTIL ===================== */
function prettyFallback(s) {
  const str = String(s ?? "");
  if (!str) return "—";
  return str.replaceAll("_", " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

function categoryLabel(c) {
  return CATEGORY_UZ[c] || prettyFallback(c);
}

function productLabel(p) {
  return PRODUCT_UZ[p] || prettyFallback(p);
}

function regionLabel(r) {
  return REGION_UZ[r] || prettyFallback(r);
}

function moneyUZS(n) {
  const x = Number(n);
  if (!Number.isFinite(x)) return "—";
  return new Intl.NumberFormat("uz-UZ").format(x) + " so‘m";
}

function normalizeValues(valuesRaw) {
  if (!Array.isArray(valuesRaw)) return [];
  return valuesRaw
    .map((v) => {
      if (v == null) return null;
      if (typeof v === "number") return Number.isFinite(v) ? v : null;
      if (typeof v === "string") {
        const n = Number(v);
        return Number.isFinite(n) ? n : null;
      }
      if (typeof v === "object") {
        const n =
          v.predicted_price ?? v.price ?? v.value ?? v.y ?? v.pred ?? null;
        const nn = Number(n);
        return Number.isFinite(nn) ? nn : null;
      }
      return null;
    })
    .filter((n) => Number.isFinite(n));
}

function trendStyle(trendRaw) {
  const tr = String(trendRaw || "").toLowerCase();
  if (tr === "up")
    return { key: "up", label: "OSHDI", color: "#22c55e", dot: "bg-emerald-400" };
  if (tr === "down")
    return { key: "down", label: "TUSHDI", color: "#ef4444", dot: "bg-rose-400" };
  return { key: "flat", label: "O‘ZGARMADI", color: "#9ca3af", dot: "bg-slate-300" };
}

function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/* ===================== CHART: history (grey) + forecast (trend color) ===================== */
function CombinedChart({ historyLabels, historyValues, forecastLabels, forecastValues, trendKey, height = 320 }) {
  const w = 1000;
  const h = 320;
  const pad = 40;

  const historyOk =
    Array.isArray(historyLabels) &&
    Array.isArray(historyValues) &&
    historyLabels.length > 1 &&
    historyLabels.length === historyValues.length;

  const forecastOk =
    Array.isArray(forecastLabels) &&
    Array.isArray(forecastValues) &&
    forecastLabels.length > 1 &&
    forecastLabels.length === forecastValues.length;

  if (!historyOk && !forecastOk) {
    return (
      <div className="h-[320px] flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/60">
        Grafik uchun ma’lumot kelmadi (history/forecast yo‘q yoki noto‘g‘ri).
      </div>
    );
  }

  // Join series, remove duplicate join day (history last == forecast first)
  const join = useMemo(() => {
    if (historyOk && forecastOk) {
      const lastH = historyLabels[historyLabels.length - 1];
      const firstF = forecastLabels[0];
      const labels =
        lastH === firstF
          ? [...historyLabels, ...forecastLabels.slice(1)]
          : [...historyLabels, ...forecastLabels];

      const values =
        lastH === firstF
          ? [...historyValues, ...forecastValues.slice(1)]
          : [...historyValues, ...forecastValues];

      return {
        labels,
        values,
        splitIndex: historyValues.length - 1, // last history point index
        mode: "history+forecast",
      };
    }

    if (forecastOk) {
      return { labels: forecastLabels, values: forecastValues, splitIndex: 0, mode: "forecast-only" };
    }

    // history-only (rare)
    return { labels: historyLabels, values: historyValues, splitIndex: historyValues.length - 1, mode: "history-only" };
  }, [historyOk, forecastOk, historyLabels, historyValues, forecastLabels, forecastValues]);

  const labels = join.labels;
  const values = join.values;
  const splitIndex = join.splitIndex;

  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const range = maxVal - minVal || 1;

  const innerW = w - pad * 2;
  const innerH = h - pad * 2;

  const pts = values.map((v, i) => {
    const x = pad + (innerW * i) / (values.length - 1);
    const y = pad + innerH - (innerH * (v - minVal)) / range;
    return { x, y };
  });

  const historyPath = pts
    .slice(0, Math.min(splitIndex + 1, pts.length))
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(" ");

  const forecastPts = pts.slice(Math.max(splitIndex, 0));
  const forecastPath = forecastPts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(" ");

  const trend = trendStyle(trendKey);

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={height} preserveAspectRatio="none">
        {/* grid */}
        <g opacity="0.25">
          {Array.from({ length: 5 }).map((_, i) => {
            const y = pad + ((h - pad * 2) * i) / 4;
            return (
              <line
                key={i}
                x1={pad}
                x2={w - pad}
                y1={y}
                y2={y}
                stroke="white"
                strokeWidth="1"
              />
            );
          })}
        </g>

        {/* history: grey */}
        {historyOk && join.mode !== "forecast-only" && (
          <path
            d={historyPath}
            fill="none"
            stroke="#9ca3af"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        )}

        {/* forecast: trend color */}
        <path
          d={forecastPath}
          fill="none"
          stroke={trend.color}
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      <div className="px-4 pb-3 pt-2 flex items-center justify-between text-xs text-white/70">
        <span>Min: {moneyUZS(minVal)}</span>
        <span>Max: {moneyUZS(maxVal)}</span>
      </div>

      <div className="px-4 pb-4 flex items-center justify-between text-xs text-white/60">
        <span>{labels?.[0] ?? "—"}</span>
        <span>{labels?.[labels.length - 1] ?? "—"}</span>
      </div>

      {join.mode === "forecast-only" && (
        <div className="px-4 pb-4 text-xs text-amber-200/90">
          Backend `history` qaytarmadi — hozir faqat forecast chizildi.
        </div>
      )}
    </div>
  );
}

/* ===================== DAYS TOGGLE (7/30/90) ===================== */
function DaysToggle({ value, onChange }) {
  const opts = [7, 30, 90,180, 365];
  return (
    <div className="mt-2 grid grid-cols-3 gap-2">
      {opts.map((d) => {
        const active = value === d;
        return (
          <button
            key={d}
            type="button"
            onClick={() => onChange(d)}
            className={[
              "rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-200",
              "border",
              active
                ? "border-violet-500 bg-violet-500/20 text-white shadow-[0_0_12px_#7c3aed]"
                : "border-slate-700 bg-slate-900 text-slate-200 hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed]",
            ].join(" ")}
          >
            {d} kun
          </button>
        );
      })}
    </div>
  );
}

/* ===================== MAIN PAGE ===================== */
export default function Demo() {
  const { t } = useTranslation();

  // Select options API’dan olinadi
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [regions, setRegions] = useState([]);

  // Selected values (backend uchun)
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [region, setRegion] = useState("");

  // 7/30/90
  const [horizonDays, setHorizonDays] = useState(30);

  // NEW backend requires date + mode
  const [date, setDate] = useState(todayISO());
  const [mode, setMode] = useState("forecast");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [result, setResult] = useState(null);

  // 1) categories
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/catalog/categories`);
        const data = await r.json();
        const list = Array.isArray(data) ? data : [];
        setCategories(list);
        const first = list[0] || "";
        setCategory(first);
      } catch {
        setErr("Katalogni olishda xatolik (categories). Backend javob bermayapti.");
      }
    })();
  }, []);

  // 2) products by category
  useEffect(() => {
    if (!category) return;
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/catalog/products?category=${encodeURIComponent(category)}`);
        const data = await r.json();
        const list = Array.isArray(data) ? data : [];
        setProducts(list);
        const first = list[0] || "";
        setProduct(first);
      } catch {
        setErr("Katalogni olishda xatolik (products).");
      }
    })();
  }, [category]);

  // 3) regions by category+product
  useEffect(() => {
    if (!category || !product) return;
    (async () => {
      try {
        const r = await fetch(
          `${API_BASE}/catalog/regions?category=${encodeURIComponent(category)}&product=${encodeURIComponent(product)}`
        );
        const data = await r.json();
        const list = Array.isArray(data) ? data : [];
        setRegions(list);
        const first = list[0] || "";
        setRegion(first);
      } catch {
        setErr("Katalogni olishda xatolik (regions).");
      }
    })();
  }, [category, product]);

  // Derived series from backend response (supports multiple possible formats)
  const trend = trendStyle(result?.forecast?.trend ?? result?.trend);

  const historyLabels = result?.history?.labels ?? result?.history_labels ?? [];
  const historyValues = normalizeValues(result?.history?.values ?? result?.history_values ?? []);

  const forecastLabels = result?.forecast?.labels ?? result?.forecast_labels ?? [];
  const forecastValues = normalizeValues(result?.forecast?.values ?? result?.forecast_values ?? []);

  // Summaries
  const aiSummary = result?.ai?.summary || result?.ai_summary || "—";
  const aiRec = result?.ai?.recommendation || result?.ai_recommendation || "—";
  const conf = result?.ai?.confidence ?? result?.ai_confidence;

  const lastPrice = result?.summary?.last_price ?? result?.last_price;
  const endForecast = result?.summary?.end_forecast ?? result?.end_forecast;
  const changePct = result?.summary?.change_pct ?? result?.change_pct;

  async function onAnalyze() {
    setErr("");
    setLoading(true);
    setResult(null);

    try {
      // backend validation: history_days 10..365 bo‘lsin
      const safeHistoryDays = Math.min(365, Math.max(10, Number(horizonDays) || 30));
      const safeHorizonDays = Number(horizonDays) || 30;

      const payload = {
        mode, // swagger’da bor
        category,
        product,
        region,
        date, // swagger’da bor (YYYY-MM-DD)
        horizon_days: safeHorizonDays,
        history_days: safeHistoryDays,
      };

      const res = await fetch(`${API_BASE}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || data?.error) {
        setErr(data?.detail?.[0]?.msg || data?.message || "Server xatosi");
        return;
      }

      setResult(data);
    } catch {
      setErr("Serverga ulanishda xatolik. Backend ishlayaptimi?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* TOP */}
        <section className="mb-10 space-y-6">
          <DemoVideo />
          <DemoAnalysis />
        </section>

        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Demo</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">{t("demo.competitionsTitle")}</h2>

            <div className="mt-5 space-y-4">
              {/* category */}
              <div>
                <label className="text-sm text-white/70">Kategoriya</label>
                <select
                  className="mt-2 w-full rounded-2xl border bg-slate-900 text-slate-100 border-slate-700 px-4 py-3 outline-none transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {categoryLabel(c)}
                    </option>
                  ))}
                </select>
              </div>

              {/* product */}
              <div>
                <label className="text-sm text-white/70">{t("demo.ProductTitle")}</label>
                <select
                  className="mt-2 w-full rounded-2xl border bg-slate-900 text-slate-100 border-slate-700 px-4 py-3 outline-none transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                >
                  {products.map((p) => (
                    <option key={p} value={p}>
                      {productLabel(p)}
                    </option>
                  ))}
                </select>
              </div>

              {/* region */}
              <div>
                <label className="text-sm text-white/70">{t("demo.areaTitle")}</label>
                <select
                  className="mt-2 w-full rounded-2xl border bg-slate-900 text-slate-100 border-slate-700 px-4 py-3 outline-none transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {regionLabel(r)}
                    </option>
                  ))}
                </select>
              </div>
              {/* 7/30/90 */}
              <div>
                <label className="text-sm text-white/70">{t("demo.DurationTitle")} (7/30/90)</label>
                <DaysToggle value={horizonDays} onChange={setHorizonDays} />
                <p className="mt-2 text-xs text-white/50">
                  Eslatma: backend `history_days` 10..365. 7 tanlansa ham history_days=10 yuboriladi (xato chiqmasligi uchun).
                </p>
              </div>

              {/* action */}
              <button
                onClick={onAnalyze}
                disabled={loading || !category || !product || !region || !date}
                className="mt-2 w-full rounded-2xl px-5 py-3 font-semibold text-white transition-all duration-300
                           bg-gradient-to-r from-fuchsia-500 to-indigo-500
                           hover:shadow-lg hover:shadow-violet-500/30
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Hisoblanmoqda..." : "Prognoz qilish"}
              </button>

              {err && (
                <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
                  {err}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-3 space-y-6">
            {/* Chart card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">{t("demo.ForecastTitle")}</h2>
                  <p className="mt-1 text-white/60 text-sm">
                    {t("demo.ProductTitle")}: <b className="text-white">{productLabel(product)}</b> ·{" "}
                    {t("demo.areaTitle")}: <b className="text-white">{regionLabel(region)}</b>
                  </p>
                  <p className="mt-1 text-white/50 text-xs">
                    Sana: <b className="text-white">{date}</b> · Horizon: <b className="text-white">{horizonDays} kun</b>
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${trend.dot}`} />
                  <span className="text-sm text-white/80">Trend: {trend.label}</span>
                </div>
              </div>

              <div className="mt-5">
                {result ? (
                  <CombinedChart
                    historyLabels={historyLabels}
                    historyValues={historyValues}
                    forecastLabels={forecastLabels}
                    forecastValues={forecastValues}
                    trendKey={result?.forecast?.trend ?? result?.trend}
                    height={320}
                  />
                ) : (
                  <div className="h-[320px] flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/60">
                    Chapdan tanlab, “Prognoz qilish”ni bosing.
                  </div>
                )}

                {result && (
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="text-white/50">So‘nggi narx</div>
                      <div className="mt-1 text-white font-semibold">{moneyUZS(lastPrice)}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="text-white/50">Prognoz yakuni</div>
                      <div className="mt-1 text-white font-semibold">{moneyUZS(endForecast)}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="text-white/50">O‘zgarish</div>
                      <div className="mt-1 font-semibold" style={{ color: trend.color }}>
                        {typeof changePct === "number"
                          ? `${changePct > 0 ? "+" : ""}${changePct.toFixed(2)}%`
                          : "—"}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* AI card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-white">{t("demo.aiSummaryTitle")}</h2>
                <div className="text-sm text-white/70">
                  {t("demo.ReliabilityTitle")}:{" "}
                  <b className="text-white">{Number.isFinite(Number(conf)) ? `${conf}%` : "—"}</b>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-white/80">{aiSummary}</p>

                <div className="mt-4">
                  <div className="text-white font-semibold">{t("demo.RecommendationTitle")}</div>
                  <p className="mt-1 text-white/75">{aiRec}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}