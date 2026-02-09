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

function Card({ title, text }) {
  return (
    <Glass className="p-6 hover:bg-white/10 transition">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-white/70 text-sm mt-2 leading-relaxed">{text}</div>
    </Glass>
  );
}

function ListBox({ title, items }) {
  return (
    <Glass className="p-7">
      <div className="text-lg font-semibold">{title}</div>
      <ul className="mt-4 text-white/70 text-sm space-y-2 list-disc list-inside">
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

export default function MVP() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="text-sm text-white/60">MVP</div>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          What the demo includes today
        </h1>

        <p className="mt-4 text-white/70 text-lg">
          A minimal end-to-end product: data → API → dashboard. Built to be upgraded
          to real ML and real-time data sources later.
        </p>
      </div>

      {/* MVP BLOCKS */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <Card
          title="End-to-end workflow"
          text="Users choose product and region, backend analyzes historical data, frontend renders chart + summary."
        />
        <Card
          title="Stable API contract"
          text="Backend returns structured JSON (labels, predicted values, trend, and summary) for easy frontend rendering."
        />
        <Card
          title="Upgradeable architecture"
          text="The baseline forecast logic can be replaced with real ML models without changing the UI."
        />
      </div>

      {/* FRONTEND / BACKEND / DATA */}
      <div className="mt-20 grid lg:grid-cols-3 gap-6">
        <ListBox
          title="Frontend (Vite + React)"
          items={[
            "Landing pages: Problem / Solution / How-it-works / Benefits / Roadmap / FAQ / MVP",
            "Demo page (dashboard UI)",
            "Clean design (glass + gradient)",
            "Ready for i18n & dark/light later",
          ]}
        />
        <ListBox
          title="Backend (FastAPI)"
          items={[
            "CSV-based dataset for demo",
            "Trend detection: UP/DOWN/FLAT",
            "Baseline forecasting for selected horizon",
            "JSON response for chart + summary",
            "Swagger docs (/docs)",
          ]}
        />
        <ListBox
          title="Data (Demo)"
          items={[
            "Curated historical price data",
            "Food and household goods focus",
            "Region field included",
            "Extensible to more products and sources",
          ]}
        />
      </div>

      {/* API EXAMPLE */}
      <div className="mt-20 grid lg:grid-cols-2 gap-6 items-stretch">
        <Glass className="p-8">
          <h2 className="text-2xl font-bold">API example</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Frontend sends a request, backend responds with chart-ready data.
          </p>

          <div className="mt-6 space-y-4">
            <CodeBlock title="Request">
{`POST /analyze
{
  "category": "food",
  "product": "flour",
  "region": "Tashkent",
  "horizon_days": 30
}`}
            </CodeBlock>

            <CodeBlock title="Response">
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
          <h2 className="text-2xl font-bold">What’s next (after MVP)</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Once the demo UX is stable, we focus on real data and ML quality.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm text-white/60">Next upgrades</div>
            <div className="mt-2 grid gap-2 text-white/70 text-sm">
              <div>• Data ingestion from reliable sources</div>
              <div>• Cleaning, normalization, anomaly detection</div>
              <div>• ML forecasting models + evaluation</div>
              <div>• Confidence intervals + explainability</div>
              <div>• Watchlists and alerts</div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm text-white/60">Optional product layer</div>
            <div className="mt-2 text-white/70 text-sm leading-relaxed">
              Accounts, saved forecasts, and a business dashboard can be added
              once the forecasting core is strong.
            </div>
          </div>
        </Glass>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <Glass className="p-10">
          <h2 className="text-3xl font-bold">Test the MVP</h2>
          <p className="mt-3 text-white/70">
            Open the demo and see the full pipeline in action.
          </p>

          <Link
            to="/demo"
            className="inline-block mt-6 px-8 py-4 rounded-xl bg-linear-to-r from-teal-500 to-indigo-500 text-black font-semibold hover:opacity-90"
          >
            🚀 Open Demo
          </Link>
        </Glass>
      </div>
    </div>
  );
}
