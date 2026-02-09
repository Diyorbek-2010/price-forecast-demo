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

function FAQItem({ q, a }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/5 p-5">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
        <span className="font-semibold">{q}</span>
        <span className="text-white/60 group-open:rotate-180 transition">⌄</span>
      </summary>
      <p className="mt-3 text-white/70 text-sm leading-relaxed">{a}</p>
    </details>
  );
}

export default function FAQ() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="text-sm text-white/60">FAQ</div>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          Frequently asked questions
        </h1>

        <p className="mt-4 text-white/70 text-lg">
          Quick answers about the demo and how it evolves into a real AI forecasting product.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="mt-16 grid gap-4 max-w-3xl mx-auto">
        <FAQItem
          q="Is this real AI?"
          a="The current version is a demo that mimics an AI workflow using a baseline forecasting logic and curated CSV data. The architecture is designed to replace the baseline with real ML models later."
        />
        <FAQItem
          q="Where does the data come from?"
          a="For the demo, data comes from a curated dataset. The next step is real-time ingestion from APIs or reliable public sources, plus automated cleaning and normalization."
        />
        <FAQItem
          q="Can it predict prices perfectly?"
          a="No forecasting model is perfect. The goal is to provide direction, context, and confidence — not absolute certainty. Real ML models will improve accuracy over time."
        />
        <FAQItem
          q="What products are supported?"
          a="The demo focuses on food and household goods (e.g., flour, oil, sugar). More products and categories can be added once data coverage expands."
        />
        <FAQItem
          q="Why do regions matter?"
          a="Prices vary by region due to logistics, local demand, and supply conditions. Region-based forecasting gives more practical, localized insights."
        />
        <FAQItem
          q="How is trend calculated?"
          a="We analyze historical prices to estimate direction (UP/DOWN/FLAT) and then project a short-term forecast for the selected horizon."
        />
        <FAQItem
          q="Will you add alerts or notifications?"
          a="Yes. In the real product, users will be able to watch products and receive alerts like 'price likely to rise in 7 days' with a confidence level."
        />
        <FAQItem
          q="Do you store personal data?"
          a="In the demo version, there is no user account system and no personal data storage. In production, privacy and security will be part of the core design."
        />
        <FAQItem
          q="Will this be free?"
          a="The demo is free. A real product could use a freemium model: free basic forecasts and paid advanced analytics, alerts, or business dashboards."
        />
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <Glass className="p-10">
          <h2 className="text-3xl font-bold">Still curious?</h2>
          <p className="mt-3 text-white/70">
            Open the demo and explore the forecast chart + summary.
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
