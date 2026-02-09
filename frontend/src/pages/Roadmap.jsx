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

function Column({ title, subtitle, items }) {
  return (
    <Glass className="p-7">
      <div className="text-sm text-white/60">{subtitle}</div>
      <div className="mt-2 text-xl font-bold">{title}</div>

      <ul className="mt-5 text-white/70 text-sm space-y-2 list-disc list-inside">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </Glass>
  );
}

function TimelineItem({ when, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-xs text-white/60">{when}</div>
      <div className="mt-1 font-semibold">{title}</div>
      <div className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="text-sm text-white/60">Roadmap</div>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          From demo to a real AI product
        </h1>

        <p className="mt-4 text-white/70 text-lg">
          This demo proves the workflow (inputs → analysis → chart + summary). Next,
          we upgrade data sources and forecasting quality step-by-step.
        </p>
      </div>

      {/* 3-PHASE ROADMAP */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <Column
          subtitle="Phase 1"
          title="Now — Demo"
          items={[
            "Curated CSV dataset (food + household goods)",
            "Baseline trend detection (UP/DOWN/FLAT)",
            "Short-term forecast (7/30/90 days)",
            "Frontend dashboard UI + summary",
            "Public API endpoints for integration",
          ]}
        />
        <Column
          subtitle="Phase 2"
          title="Next — Real data"
          items={[
            "Automated data ingestion (APIs / scraping)",
            "Data cleaning & normalization (by region, units)",
            "Feature engineering (seasonality, events, lag features)",
            "Monitoring & anomaly detection",
            "Better evaluation metrics and validation pipeline",
          ]}
        />
        <Column
          subtitle="Phase 3"
          title="Later — ML/AI"
          items={[
            "Forecasting models (Prophet / XGBoost / LSTM / hybrids)",
            "Confidence calibration & uncertainty intervals",
            "Explainability: why price is moving (signals)",
            "Personalized alerts & watchlists",
            "Role-based dashboard (households vs businesses)",
          ]}
        />
      </div>

      {/* WHY THIS ROADMAP */}
      <div className="mt-20 grid lg:grid-cols-2 gap-6 items-stretch">
        <Glass className="p-8">
          <h2 className="text-2xl font-bold">Why this roadmap works</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Predicting prices is not only a modeling task. Data quality and
            consistency matter as much as algorithms. That’s why we first prove the UX,
            then invest in real data, and only then scale up ML sophistication.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm text-white/60">Key principle</div>
            <div className="mt-2 text-white/70 text-sm leading-relaxed">
              <span className="font-semibold text-white/90">Better data → better forecasts.</span>{" "}
              Once the pipeline is stable, ML becomes significantly more accurate and reliable.
            </div>
          </div>
        </Glass>

        <Glass className="p-8">
          <h2 className="text-2xl font-bold">Milestone timeline (example)</h2>
          <div className="mt-6 grid gap-4">
            <TimelineItem
              when="Week 1–2"
              title="Finalize demo UI & endpoints"
              desc="Stabilize pages, demo dashboard, and API response formats."
            />
            <TimelineItem
              when="Week 3–6"
              title="Add real data ingestion"
              desc="Bring in sources, clean data, and build a consistent dataset."
            />
            <TimelineItem
              when="Week 7–12"
              title="Deploy ML forecasting"
              desc="Train models, validate accuracy, add confidence intervals, and launch alerts."
            />
          </div>
        </Glass>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <Glass className="p-10">
          <h2 className="text-3xl font-bold">Ready to explore the demo?</h2>
          <p className="mt-3 text-white/70">
            Open the dashboard and see how the pipeline works end-to-end.
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
