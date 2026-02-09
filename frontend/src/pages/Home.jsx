import { Link } from "react-router-dom";
import { Glass, Card, Page } from "../components/ui.jsx";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14 space-y-20">
      {/* HERO */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">
          PriceForecast • AI-style Demo (CSV-based)
        </div>

        <h1 className="mt-7 text-5xl md:text-6xl font-bold tracking-tight">
          Forecast prices for{" "}
          <span className="text-teal-300">food</span> and{" "}
          <span className="text-indigo-300">household goods</span>
        </h1>

        <p className="mt-5 text-white/70 max-w-2xl mx-auto text-lg">
          Trend signal (UP/DOWN/FLAT), a short-term forecast chart, and a readable summary
          to support smarter buying decisions.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/demo"
            className="px-7 py-3 rounded-xl bg-linear-to-r from-teal-500 to-indigo-500 text-black font-semibold hover:opacity-90 transition"
          >
            🚀 Open Demo
          </Link>

          <a
            href="http://127.0.0.1:8000/docs"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/10 transition"
          >
            View API Docs
          </a>
        </div>
      </div>

      {/* QUICK LINKS */}
      <Glass className="p-6">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          {[
            ["/problem", "Problem"],
            ["/solution", "Solution"],
            ["/how-it-works", "How it works"],
            ["/benefits", "Benefits"],
            ["/roadmap", "Roadmap"],
            ["/mvp", "MVP"],
            ["/faq", "FAQ"],
          ].map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              {label}
            </Link>
          ))}
        </div>
      </Glass>

      {/* WHAT YOU CAN DO */}
      <Page
        kicker="Overview"
        title="What you can do"
        desc="A complete demo flow: choose product → analyze → chart + summary."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="📈 Price Forecast"
            desc="Baseline forecasting from historical data (demo), designed to be replaceable with a real ML model later."
          />
          <Card
            title="🤖 AI Summary"
            desc="Readable explanation + confidence score and recommendation."
          />
          <Card
            title="📊 Trend Analytics"
            desc="Track price direction by product and region with a clean chart."
          />
        </div>
      </Page>
    </div>
  );
}
