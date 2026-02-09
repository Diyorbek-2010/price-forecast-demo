import { Glass, Page } from "../components/ui.jsx";

function Step({ n, title, desc }) {
  return (
    <Glass className="p-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center font-bold">
          {n}
        </div>
        <div className="text-lg font-semibold">{title}</div>
      </div>
      <div className="mt-3 text-white/70 text-sm leading-relaxed">{desc}</div>
    </Glass>
  );
}

export default function HowItWorks() {
  return (
    <Page
      kicker="How it works"
      title="From data to decision in seconds"
      desc="This demo uses a curated CSV dataset. Later we plug in real-time sources and ML models."
    >
      <div className="grid md:grid-cols-3 gap-6">
        <Step n="1" title="Select inputs" desc="Choose category, product, region, and forecast horizon." />
        <Step n="2" title="Analyze" desc="Backend computes trend + baseline forecast and generates a summary." />
        <Step n="3" title="Get insights" desc="Receive chart, change %, confidence, and recommendation." />
      </div>
    </Page>
  );
}
