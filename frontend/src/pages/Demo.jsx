import { useEffect, useMemo, useState } from "react";
import { api } from "../api/client";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Glass({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-black/10 dark:border-white/10
      bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}


function Badge({ trend }) {
  const text = trend === "up" ? "UP" : trend === "down" ? "DOWN" : "FLAT";

  // Xaridor uchun:
  // UP (qimmatlashish) = qizil
  // DOWN (arzonlashish) = yashil
  const cls =
    trend === "up"
      ? "bg-rose-500/20 border-rose-300/20 text-rose-200"
      : trend === "down"
      ? "bg-emerald-500/20 border-emerald-300/20 text-emerald-200"
      : "bg-white/10 border-white/10 text-white/80";

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold ${cls}`}>
      Trend: {text}
    </span>
  );
}


function formatNum(n) {
  if (n === null || n === undefined || Number.isNaN(n)) return "-";
  return Math.round(Number(n)).toLocaleString();
}

export default function Demo() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [regions, setRegions] = useState([]);

  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [region, setRegion] = useState("");

  const [horizon, setHorizon] = useState(30);
  const [historyDays, setHistoryDays] = useState(60);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [result, setResult] = useState(null);

  // 1) categories
  useEffect(() => {
    setErr("");
    api
      .getCategories()
      .then((data) => {
        const arr = Array.isArray(data) ? data : [];
        setCategories(arr);
        if (arr.length) setCategory(arr[0]);
      })
      .catch((e) => setErr(String(e.message || e)));
  }, []);

  // 2) products when category changes
  useEffect(() => {
    if (!category) return;
    setErr("");
    setProducts([]);
    setRegions([]);
    setProduct("");
    setRegion("");
    api
      .getProducts(category)
      .then((data) => {
        const arr = Array.isArray(data) ? data : [];
        setProducts(arr);
        if (arr.length) setProduct(arr[0]);
      })
      .catch((e) => setErr(String(e.message || e)));
  }, [category]);

  // 3) regions when product changes
  useEffect(() => {
    if (!category || !product) return;
    setErr("");
    setRegions([]);
    setRegion("");
    api
      .getRegions(category, product)
      .then((data) => {
        const arr = Array.isArray(data) ? data : [];
        setRegions(arr);
        if (arr.length) setRegion(arr[0]);
      })
      .catch((e) => setErr(String(e.message || e)));
  }, [category, product]);

  // Build chart data: history + forecast
  const chartData = useMemo(() => {
    if (!result?.history || !result?.forecast) return [];
    const hist = result.history.labels.map((d, idx) => ({
      date: d,
      actual: result.history.values[idx]?.price ?? null,
      predicted: null,
    }));
    const fc = result.forecast.labels.map((d, idx) => ({
      date: d,
      actual: null,
      predicted: result.forecast.values[idx]?.predicted_price ?? null,
    }));
    return [...hist, ...fc];
  }, [result]);

  async function onAnalyze() {
    setErr("");
    setResult(null);
    setLoading(true);

    try {
      const payload = {
        category,
        product,
        region,
        horizon_days: Number(horizon),
        history_days: Number(historyDays),
      };

      const res = await api.analyze(payload);

      if (res?.error) {
        setErr(res.message || res.error);
      } else {
        setResult(res);
      }
    } catch (e) {
      setErr(String(e.message || e));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Demo</h2>
        <p className="text-white/70 mt-1">
          Oziq-ovqat va ro‘zg‘or buyumlari bo‘yicha narx trendini tekshiring.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-4">
        {/* Left: form */}
        <Glass className="lg:col-span-2 p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm text-white/80">Input</div>
            <div className="text-xs text-white/60">CSV demo</div>
          </div>

          <div className="mt-4">
            <label className="text-xs text-white/60">Category</label>
            <select
              className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-3">
            <label className="text-xs text-white/60">Product</label>
            <select
              className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              disabled={!products.length}
            >
              {products.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-3">
            <label className="text-xs text-white/60">Region</label>
            <select
              className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              disabled={!regions.length}
            >
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-white/60">Horizon (days)</label>
              <select
                className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none"
                value={horizon}
                onChange={(e) => setHorizon(e.target.value)}
              >
                {[7, 30, 90, 180, 365].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs text-white/60">History (days)</label>
              <select
                className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none"
                value={historyDays}
                onChange={(e) => setHistoryDays(e.target.value)}
              >
                {[30, 60, 90, 180].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={onAnalyze}
            disabled={loading || !category || !product || !region}
            className="mt-5 w-full px-4 py-3 rounded-xl bg-linear-to-r from-teal-500 to-indigo-500 text-black font-semibold disabled:opacity-50"
          >
            {loading ? "Analiz qilinyapti..." : "Analiz qilish"}
          </button>

          {err && (
            <div className="mt-4 rounded-xl border border-rose-300/20 bg-rose-500/10 p-3 text-sm text-rose-100">
              {err}
            </div>
          )}

          {!err && !result && (
            <div className="mt-4 text-xs text-white/50">
              Maslahat: dropdownlardan tanlang va analiz qiling.
            </div>
          )}
        </Glass>

        {/* Right: results */}
        <Glass className="lg:col-span-3 p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm text-white/80">Natija</div>
            {result?.forecast?.trend && <Badge trend={result.forecast.trend} />}
          </div>

          {!result && !err && (
            <div className="mt-10 text-white/60 text-sm">
              Parametrlarni tanlang va <b>Analiz qilish</b> ni bosing.
            </div>
          )}

          {result && (
            <>
              {/* Summary cards */}
              <div className="mt-4 grid md:grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs text-white/60">Oxirgi real narx</div>
                  <div className="text-2xl font-bold mt-1">
                    {formatNum(result.summary.last_price)}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs text-white/60">Prognoz oxiri</div>
                  <div className="text-2xl font-bold mt-1">
                    {formatNum(result.summary.end_forecast)}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs text-white/60">O‘zgarish %</div>
                  <div className="text-2xl font-bold mt-1">
                    {result.summary.change_pct}%
                  </div>
                </div>
              </div>

              {/* AI Summary */}
              {result?.ai && (
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">🤖 AI xulosa</div>
                    <div className="text-xs text-white/70">
                      Confidence:{" "}
                      <span className="font-semibold">
                        {result.ai.confidence}%
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-teal-500 to-indigo-500"
                      style={{ width: `${result.ai.confidence}%` }}
                    />
                  </div>

                  <div className="mt-3 text-white/80 text-sm leading-relaxed">
                    {result.ai.summary}
                  </div>

                  <div className="mt-3 text-xs text-white/60">
                    Tavsiya:{" "}
                    <span className="text-white/80">
                      {result.ai.recommendation}
                    </span>
                  </div>
                </div>
              )}

              {/* Chart */}
              <div className="mt-5 h-90 rounded-2xl border border-white/10 bg-black/20 p-3">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis dataKey="date" hide />
                    <YAxis
                      tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "rgba(0,0,0,0.8)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                      labelStyle={{ color: "rgba(255,255,255,0.8)" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="actual"
                      dot={false}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="predicted"
                      dot={false}
                      strokeWidth={2}
                      strokeDasharray="6 4"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-3 text-xs text-white/50">
                Demo prognoz: oddiy linear trend (keyin real modelga
                almashtiriladi).
              </div>
            </>
          )}
        </Glass>
      </div>
    </div>
  );
}
