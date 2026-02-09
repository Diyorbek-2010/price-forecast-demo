import { Glass, Page } from "../components/ui.jsx";

function List({ items }) {
  return (
    <ul className="mt-3 text-white/70 text-sm space-y-2 list-disc list-inside">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

export default function Roadmap() {
  return (
    <Page
      kicker="Roadmap"
      title="From demo to real product"
      desc="We prove UX and pipeline now. Next milestones focus on real data + ML."
    >
      <div className="grid md:grid-cols-3 gap-6">
        <Glass className="p-6">
          <div className="text-lg font-semibold">Now (Demo)</div>
          <List items={["CSV dataset", "Trend + baseline forecast", "Chart + summary", "Demo dashboard"]} />
        </Glass>

        <Glass className="p-6">
          <div className="text-lg font-semibold">Next (Real data)</div>
          <List items={["Data ingestion (APIs/scrapers)", "Cleaning & features", "Regional normalization", "Alerts & monitoring"]} />
        </Glass>

        <Glass className="p-6">
          <div className="text-lg font-semibold">Later (ML/AI)</div>
          <List items={["Forecasting models", "Confidence calibration", "Explainability", "Personalized recommendations"]} />
        </Glass>
      </div>
    </Page>
  );
}
