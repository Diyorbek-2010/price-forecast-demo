import { Card, Page } from "../components/ui.jsx";

export default function Solution() {
  return (
    <Page
      kicker="Solution"
      title="One platform: trend + forecast + explanation"
      desc="A clean dashboard that turns historical prices into future signals and actionable recommendations."
    >
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="📈 Forecast chart" desc="Visualize predicted prices for a selected horizon (7/30/90 days)." />
        <Card title="🧠 AI-style summary" desc="Human-friendly explanation of why the trend is rising/falling." />
        <Card title="🎯 Recommendation" desc="Simple suggestion: buy now, wait, or monitor — with confidence." />
      </div>
    </Page>
  );
}
