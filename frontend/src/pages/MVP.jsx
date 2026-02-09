import { Glass, Page } from "../components/ui.jsx";

export default function MVP() {
  return (
    <Page
      kicker="MVP"
      title="What the demo includes today"
      desc="A minimal end-to-end product that is easy to replace with real ML later."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Glass className="p-6">
          <div className="text-lg font-semibold">Frontend</div>
          <ul className="mt-3 text-white/70 text-sm space-y-2 list-disc list-inside">
            <li>Landing pages</li>
            <li>Demo dashboard UI</li>
            <li>Chart + summary</li>
            <li>Clean UX (fast)</li>
          </ul>
        </Glass>

        <Glass className="p-6">
          <div className="text-lg font-semibold">Backend</div>
          <ul className="mt-3 text-white/70 text-sm space-y-2 list-disc list-inside">
            <li>CSV-based dataset</li>
            <li>Trend detection</li>
            <li>Baseline forecast</li>
            <li>JSON API for frontend</li>
          </ul>
        </Glass>
      </div>
    </Page>
  );
}
