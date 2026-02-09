import { Card, Page } from "../components/ui.jsx";

export default function Benefits() {
  return (
    <Page
      kicker="Benefits"
      title="Why it matters"
      desc="Even a simple forecast can reduce overspending and improve timing decisions."
    >
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Save money" desc="Avoid buying at peaks; plan purchases around expected dips." />
        <Card title="Reduce risk" desc="Small shops manage inventory with less uncertainty." />
        <Card title="Faster decisions" desc="One dashboard instead of guessing or checking many sources." />
      </div>
    </Page>
  );
}
