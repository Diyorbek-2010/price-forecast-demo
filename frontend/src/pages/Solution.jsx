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

function Pill({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-white/80">
      {children}
    </span>
  );
}

export default function Solution() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="text-sm text-white/60">Solution</div>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          A single dashboard: forecast, trend, and explanation
        </h1>

        <p className="mt-4 text-white/70 text-lg">
          PriceForecast turns historical price data into clear signals: where the
          price is going, how fast it may change, and what action to take.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Pill>Trend signal</Pill>
          <Pill>Forecast chart</Pill>
          <Pill>AI-style summary</Pill>
          <Pill>Region-based</Pill>
        </div>
      </div>

      {/* WHAT WE PROVIDE */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <Card
          title="📈 Forecast chart"
          text="See historical prices and the predicted trajectory for the next 7/30/90 days."
        />
        <Card
          title="🧠 AI-style explanation"
          text="A human-friendly summary that describes the trend and possible drivers (seasonality, demand, etc.)."
        />
        <Card
          title="🎯 Recommendation"
          text="A simple suggestion: buy now, wait, or monitor — supported by a confidence estimate."
        />
      </div>

      {/* HOW IT FEELS (UX) */}
      <div className="mt-20 grid lg:grid-cols-2 gap-6 items-stretch">
        <Glass className="p-8">
          <h2 className="text-2xl font-bold">Designed for fast decisions</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            The goal is not to overwhelm users with complex analytics. Instead,
            we provide a clear “direction + chart + summary” workflow that anyone
            can understand in seconds.
          </p>

          <ul className="mt-5 text-white/70 text-sm space-y-2 list-disc list-inside">
            <li>Choose product and region</li>
            <li>Pick forecast horizon</li>
            <li>Get chart + trend + summary instantly</li>
          </ul>

          <div className="mt-6 flex gap-3 flex-wrap">
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">
              Simple UI
            </span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">
              Clear outputs
            </span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">
              Actionable insight
            </span>
          </div>
        </Glass>

        <Glass className="p-8">
          <h2 className="text-2xl font-bold">Demo today, real ML tomorrow</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Today’s demo uses curated CSV data and a baseline forecasting logic.
            The architecture is built so we can replace the baseline with real ML
            models and real-time data sources later.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm text-white/60">Planned upgrades</div>
            <div className="mt-2 grid gap-2 text-white/70 text-sm">
              <div>• Live data ingestion (APIs / scraping)</div>
              <div>• ML forecasting models (Prophet/LSTM/etc.)</div>
              <div>• Better confidence calibration</div>
              <div>• Alerts: “price likely to rise in 7 days”</div>
            </div>
          </div>
        </Glass>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">See it in action</h2>
        <p className="text-white/70 mt-3">
          Try the demo flow and view the forecast chart + summary.
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
