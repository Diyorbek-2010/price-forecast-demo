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

function WhoCard({ title, items }) {
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

function Metric({ label, value, note }) {
  return (
    <Glass className="p-6 text-center">
      <div className="text-white/60 text-sm">{label}</div>
      <div className="mt-2 text-3xl font-bold">{value}</div>
      {note && <div className="mt-2 text-white/70 text-sm">{note}</div>}
    </Glass>
  );
}

export default function Benefits() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="text-sm text-white/60">Benefits</div>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          Better decisions, less waste, lower risk
        </h1>

        <p className="mt-4 text-white/70 text-lg">
          PriceForecast helps users understand price direction early and take action.
          Even a baseline forecast can reduce overspending and improve timing.
        </p>
      </div>

      {/* QUICK VALUE METRICS (DEMO) */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <Metric label="Decision speed" value="Seconds" note="Simple trend + chart + summary." />
        <Metric label="Risk reduction" value="Higher" note="Avoid buying at price peaks." />
        <Metric label="Planning horizon" value="7–90 days" note="Short-term forecasts for practical use." />
      </div>

      {/* CORE BENEFITS */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <Card
          title="💸 Save money"
          text="Buy when prices are expected to be lower and avoid peak periods whenever possible."
        />
        <Card
          title="📦 Smarter stocking"
          text="Small shops can decide when to restock inventory based on predicted price movement."
        />
        <Card
          title="🧠 Confidence & clarity"
          text="Instead of guessing, users see a clear chart and explanation of what’s happening."
        />
      </div>

      {/* WHO IT HELPS */}
      <div className="mt-20 grid lg:grid-cols-2 gap-6">
        <WhoCard
          title="For households"
          items={[
            "Plan monthly shopping with less uncertainty",
            "Compare regions and products quickly",
            "Avoid impulse buys during spikes",
            "Understand trend direction (up/down)",
          ]}
        />

        <WhoCard
          title="For small businesses"
          items={[
            "Reduce inventory risk and sudden cost increases",
            "Choose restock timing based on trend signals",
            "Monitor key products across regions",
            "Use forecasts for pricing strategy",
          ]}
        />
      </div>

      {/* USE CASES */}
      <div className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Example use-cases
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Card
            title="Household planning"
            text="If flour is trending up, a family may buy earlier to avoid higher prices later."
          />
          <Card
            title="Shop restocking"
            text="If oil is trending down, a shop may wait a few days to restock at a better price."
          />
          <Card
            title="Regional comparison"
            text="Users can compare Tashkent vs other regions to identify better purchase opportunities."
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <Glass className="p-10">
          <h2 className="text-3xl font-bold">Try it now</h2>
          <p className="mt-3 text-white/70">
            Open the demo and see trend + forecast + summary for your product.
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
