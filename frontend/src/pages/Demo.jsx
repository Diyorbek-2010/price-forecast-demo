import { useMemo, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000";

function Glass({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg " +
        className
      }
    >
      {children}
    </div>
  );
}

function Label({ children }) {
  return <div className="text-xs text-white/60 mb-2">{children}</div>;
}

function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-white/20"
    >
      {options.map((x) => (
        <option key={x} value={x} className="bg-[#0b0d14]">
          {x}
        </option>
      ))}
    </select>
  );
}

function Input({ value, onChange, type = "number", min, max, step }) {
  return (
    <input
      type={type}
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-white/20"
    />
  );
}

function TrendBadge({ trend }) {
  // Sen aytgandek: narx tushsa green (yaxshi), oshsa red (yomon)
  const t = (trend || "").toLowerCase();
  const isDown = t === "down";
  const isUp = t === "up";
  const label = isUp ? "UP" : isDown ? "DOWN" : "FLAT";

  const cls = isDown
    ? "border-emerald-400/20 bg-emerald-500/15 text-emerald-200"
    : isUp
    ? "border-red-400/20 bg-red-500/15 text-red-200"
    : "border-white/15 bg-white/5 text-white/80";

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${cls}`}>
      Trend: <span className="ml-1 font-semibold">{label}</span>
    </span>
  );
}

function formatUZS(x) {
  if (x == null || Number.isNaN(Number(x))) return "—";
  try {
    return new Intl.NumberFormat("uz-UZ").format(Math.round(Number(x))) + " UZS";
  } catch {
    return String(x) + " UZS";
  }
}

function pct(x) {
  if (x == null || Number.isNaN(Number(x))) return "—";
  const v = Number(x);
  const sign = v > 0 ? "+" : "";
  return `${sign}${v.toFixed(2)}%`;
}

/**
 * Minimal SVG line chart (no libs)
 * points: array<number>
 * labels: array<string>
 */
function LineChart({ labels = [], points = [] }) {
  const W = 900;
  const H = 320;
  const P = 28;

  const safe = points.map((v) => Number(v)).filter((v) => Number.isFinite(v));
  const minV = safe.length ? Math.min(...safe) : 0;
  const maxV = safe.length ? Math.max(...safe) : 1;

  const span = maxV - minV || 1;

  const toX = (i) =>
    P + (i * (W - P * 2)) / Math.max(1, points.length - 1);
  const toY = (v) => H - P - ((v - minV) * (H - P * 2)) / span;

  const d = points
    .map((v, i) => {
      const x = toX(i);
      const y = toY(Number(v) || 0);
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const lastLabel = labels[labels.length - 1] || "";
  const firstLabel = labels[0] || "";

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-white/50 mb-2">
        <span>{firstLabel}</span>
        <span>{lastLabel}</span>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-3 overflow-hidden">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-60">
          {/* grid */}
          {[0, 1, 2, 3].map((k) => {
            const y = P + (k * (H - P * 2)) / 3;
            return (
              <line
                key={k}
                x1={P}
                x2={W - P}
                y1={y}
                y2={y}
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="2"
              />
            );
          })}

          {/* line */}
          <path
            d={d}
            fill="none"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* points */}
          {points.map((v, i) => {
            const x = toX(i);
            const y = toY(Number(v) || 0);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="5"
                fill="rgba(255,255,255,0.85)"
                opacity="0.9"
              />
            );
          })}
        </svg>

        <div className="mt-3 flex items-center justify-between text-xs text-white/60">
          <div>Min: <span className="text-white/80">{formatUZS(minV)}</span></div>
          <div>Max: <span className="text-white/80">{formatUZS(maxV)}</span></div>
        </div>
      </div>
    </div>
  );
}

export default function Demo() {
  // Demo inputs (keyinchalik backend’dan “options” endpoint qilamiz)
  const categories = ["food", "household"];
  const productsByCategory = {
    food: ["flour", "oil", "sugar", "rice", "potato"],
    household: ["soap", "detergent", "toothpaste", "shampoo"],
  };
  const regions = ["Tashkent", "Samarkand", "Andijan", "Namangan", "Bukhara"];

  const [category, setCategory] = useState("food");
  const [product, setProduct] = useState(productsByCategory.food[0]);
  const [region, setRegion] = useState("Tashkent");
  const [horizonDays, setHorizonDays] = useState(30);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [data, setData] = useState(null);

  const products = useMemo(() => productsByCategory[category] || [], [category]);

  // Ensure product is valid when category changes
  const onCategoryChange = (c) => {
    setCategory(c);
    const list = productsByCategory[c] || [];
    setProduct(list[0] || "");
  };

  const computed = useMemo(() => {
    const labels = data?.chart?.labels || [];
    const valuesObj = data?.chart?.values || [];
    const points = valuesObj.map((x) => x?.predicted_price);

    const trend = data?.chart?.trend || "flat";
    const startPrice = data?.summary?.start_price;
    const endPrice = data?.summary?.end_price;
    const changePct = data?.summary?.change_pct;

    return { labels, points, trend, startPrice, endPrice, changePct };
  }, [data]);

  async function runForecast() {
    setErr("");
    setLoading(true);
    try {
      const payload = {
        category,
        product,
        region,
        horizon_days: Number(horizonDays),
      };

      const res = await fetch(`${API_BASE}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(`API error ${res.status}. ${txt}`.trim());
      }

      const json = await res.json();
      setData(json);
    } catch (e) {
      setData(null);
      setErr(e?.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-14 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div className="text-sm text-white/60">Demo dashboard</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">
            Forecast prices with a clean workflow
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Select category, product, region, and horizon — get trend, forecast chart, and summary.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <a
            href={`${API_BASE}/docs`}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
          >
            API Docs
          </a>

          <button
            onClick={runForecast}
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-linear-to-r from-teal-500 to-indigo-500 text-black font-semibold hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Analyzing..." : "Run forecast"}
          </button>
        </div>
      </div>

      {/* Layout */}
      <div className="mt-10 grid lg:grid-cols-3 gap-6 items-start">
        {/* Left panel */}
        <Glass className="p-7 lg:sticky lg:top-24">
          <div className="text-lg font-semibold">Inputs</div>
          <div className="text-white/60 text-sm mt-1">
            Adjust parameters and run the forecast.
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <Label>Category</Label>
              <Select value={category} onChange={onCategoryChange} options={categories} />
            </div>

            <div>
              <Label>Product</Label>
              <Select value={product} onChange={setProduct} options={products} />
            </div>

            <div>
              <Label>Region</Label>
              <Select value={region} onChange={setRegion} options={regions} />
            </div>

            <div>
              <Label>Horizon (days)</Label>
              <Input
                value={horizonDays}
                onChange={(v) => setHorizonDays(v)}
                type="number"
                min={7}
                max={180}
                step={1}
              />
              <div className="text-xs text-white/50 mt-2">
                Tip: 30 days is best for a demo.
              </div>
            </div>

            {err && (
              <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-200">
                <div className="font-semibold">Request failed</div>
                <div className="mt-1 text-red-200/90">{err}</div>
                <div className="mt-2 text-red-200/70">
                  Check backend URL/CORS or open API Docs to verify the endpoint.
                </div>
              </div>
            )}

            <button
              onClick={runForecast}
              disabled={loading}
              className="w-full px-6 py-3 rounded-xl bg-linear-to-r from-teal-500 to-indigo-500 text-black font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Analyzing..." : "Run forecast"}
            </button>
          </div>
        </Glass>

        {/* Right panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Top stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <Glass className="p-6">
              <div className="text-xs text-white/60">Trend</div>
              <div className="mt-3">
                <TrendBadge trend={computed.trend} />
              </div>
              <div className="mt-3 text-white/60 text-sm">
                DOWN = good (price dropping)
              </div>
            </Glass>

            <Glass className="p-6">
              <div className="text-xs text-white/60">Start price</div>
              <div className="mt-2 text-2xl font-bold">
                {formatUZS(computed.startPrice)}
              </div>
              <div className="mt-2 text-white/60 text-sm">
                for {product} in {region}
              </div>
            </Glass>

            <Glass className="p-6">
              <div className="text-xs text-white/60">Expected change</div>
              <div className="mt-2 text-2xl font-bold">{pct(computed.changePct)}</div>
              <div className="mt-2 text-white/60 text-sm">
                End: {formatUZS(computed.endPrice)}
              </div>
            </Glass>
          </div>

          {/* Chart */}
          <Glass className="p-7">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="text-lg font-semibold">Forecast chart</div>
                <div className="text-white/60 text-sm mt-1">
                  Horizon: {horizonDays} days
                </div>
              </div>

              <div className="text-xs text-white/50">
                Source: demo dataset (CSV)
              </div>
            </div>

            <div className="mt-6">
              {data ? (
                <LineChart labels={computed.labels} points={computed.points} />
              ) : (
                <div className="rounded-2xl border border-white/10 bg-black/20 h-80 flex items-center justify-center text-white/50">
                  Run forecast to view chart
                </div>
              )}
            </div>
          </Glass>

          {/* AI-style summary */}
          <Glass className="p-7">
            <div className="text-lg font-semibold">AI-style summary</div>
            <div className="mt-3 text-white/70 leading-relaxed">
              {data ? (
                <SummaryText
                  trend={computed.trend}
                  product={product}
                  region={region}
                  start={computed.startPrice}
                  end={computed.endPrice}
                  changePct={computed.changePct}
                  horizon={horizonDays}
                />
              ) : (
                "Run forecast to generate a summary."
              )}
            </div>
          </Glass>
        </div>
      </div>
    </div>
  );
}

function SummaryText({ trend, product, region, start, end, changePct, horizon }) {
  const t = (trend || "").toLowerCase();
  const isDown = t === "down";
  const isUp = t === "up";

  const action = isDown ? "Consider waiting or buying later." : isUp ? "Consider buying earlier." : "Monitor the price.";

  return (
    <>
      <p>
        Based on recent signals, <span className="font-semibold">{product}</span> in{" "}
        <span className="font-semibold">{region}</span> is expected to trend{" "}
        <span className="font-semibold">
          {isDown ? "DOWN" : isUp ? "UP" : "FLAT"}
        </span>{" "}
        over the next <span className="font-semibold">{horizon}</span> days.
      </p>

      <p className="mt-3">
        The forecast moves from <span className="font-semibold">{formatUZS(start)}</span> to{" "}
        <span className="font-semibold">{formatUZS(end)}</span> (change:{" "}
        <span className="font-semibold">{pct(changePct)}</span>).
      </p>

      <p className="mt-3">
        Recommendation: <span className="font-semibold">{action}</span>
      </p>

      <p className="mt-3 text-white/50 text-sm">
        Note: This is a demo baseline forecast. The UI and API contract are designed to support real ML models later.
      </p>
    </>
  );
}
