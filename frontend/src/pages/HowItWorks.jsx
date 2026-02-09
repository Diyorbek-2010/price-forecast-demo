import { Link } from "react-router-dom";

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

function Step({ n, title, desc }) {
  return (
    <Glass className="p-6 hover:bg-white/10 transition">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center font-bold">
          {n}
        </div>
        <div className="text-lg font-semibold">{title}</div>
      </div>
      <div className="mt-3 text-white/70 text-sm leading-relaxed">{desc}</div>
    </Glass>
  );
}

function MiniCard({ title, items }) {
  return (
    <Glass className="p-6">
      <div className="text-lg font-semibold">{title}</div>
      <ul className="mt-3 text-white/70 text-sm space-y-2 list-disc list-inside">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </Glass>
  );
}

function CodeBlock({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5 overflow-x-auto">
      <div className="text-xs text-white/60 mb-2">{title}</div>
      <pre className="text-sm text-white/80 leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="text-sm text-white/60">How it works</div>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          From data to forecast in seconds
        </h1>

        <p className="mt-4 text-white/70 text-lg">
          The demo uses curated CSV data and a baseline forecasting logic.
          The same pipeline is designed to be upgraded to real-time data and ML models later.
        </p>
      </div>

      {/* STEPS */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <Step
          n="1"
          title="Select inputs"
          desc="Choose category, product, region, and forecast horizon (e.g., 30 days)."
        />
        <Step
          n="2"
          title="Analyze"
          desc="Backend loads the relevant historical prices, computes trend, and generates a baseline forecast."
        />
        <Step
          n="3"
          title="View results"
          desc="Frontend renders a chart, a trend badge (UP/DOWN/FLAT), and an AI-style summary."
        />
      </div>

      {/* INPUT vs OUTPUT */}
      <div className="mt-20 grid lg:grid-cols-2 gap-6 items-stretch">
        <MiniCard
          title="What users provide"
          items={[
            "Category (food / household goods)",
            "Product (e.g., flour, oil, sugar)",
            "Region (e.g., Tashkent)",
            "Horizon (7 / 30 / 90 days)",
          ]}
        />

        <MiniCard
          title="What users receive"
          items={[
            "Trend signal: UP / DOWN / FLAT",
            "Forecast chart: history + predicted prices",
            "Start/end price + change %",
            "AI-style explanation + recommendation",
          ]}
        />
      </div>

      {/* API EXAMPLE */}
      <div className="mt-20 grid lg:grid-cols-2 gap-6">
        <Glass className="p-8">
          <h2 className="text-2xl font-bold">API flow</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Frontend sends a request to the backend. Backend responds with chart data
            and a summary that is easy to render.
          </p>

          <div className="mt-6 space-y-4">
            <CodeBlock title="Request (example)">
{`POST /analyze
{
  "category": "food",
  "product": "flour",
  "region": "Tashkent",
  "horizon_days": 30
}`}
            </CodeBlock>

            <CodeBlock title="Response (example)">
{`{
  "meta": {"category":"food","product":"flour","region":"Tashkent","horizon_days":30},
  "chart": {
    "labels": ["2026-02-08","2026-02-09"],
    "values": [{"predicted_price":12000},{"predicted_price":12150}],
    "trend": "up"
  },
  "summary": {"start_price":12000,"end_price":12150,"change_pct":1.25}
}`}
            </CodeBlock>
          </div>
        </Glass>

        <Glass className="p-8">
          <h2 className="text-2xl font-bold">Demo vs real product</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            This demo proves the user experience and the data pipeline. The real product will
            replace the baseline forecast with ML and connect to live data sources.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm text-white/60">Upgrade path</div>
            <div className="mt-2 grid gap-2 text-white/70 text-sm">
              <div>• Replace CSV with real-time price sources</div>
              <div>• Add cleaning + feature engineering</div>
              <div>• Train forecasting models and validate accuracy</div>
              <div>• Add confidence & alerts (notifications)</div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm text-white/60">Why this matters</div>
            <div className="mt-2 text-white/70 text-sm leading-relaxed">
              Even with a basic model, users get direction and context. With real ML and live data,
              the system becomes a decision-making tool for households and businesses.
            </div>
          </div>
        </Glass>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">Try the pipeline</h2>
        <p className="text-white/70 mt-3">
          Open the demo and generate a forecast chart from the backend API.
        </p>

        <Link
          to="/demo"
          className="inline-block mt-6 px-8 py-4 rounded-xl bg-linear-to-r from-teal-500 to-indigo-500 text-black font-semibold hover:opacity-90"
        >
          🚀 Open Demo
        </Link>
      </div>
    </div>
  );
}
