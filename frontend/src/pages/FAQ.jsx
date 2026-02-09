import { Page } from "../components/ui.jsx";

function FAQItem({ q, a }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/5 p-5">
      <summary className="cursor-pointer list-none flex items-center justify-between">
        <span className="font-semibold">{q}</span>
        <span className="text-white/60 group-open:rotate-180 transition">⌄</span>
      </summary>
      <p className="mt-3 text-white/70 text-sm leading-relaxed">{a}</p>
    </details>
  );
}

export default function FAQ() {
  return (
    <Page
      kicker="FAQ"
      title="Frequently asked questions"
      desc="Quick answers about the demo and the future ML version."
    >
      <div className="grid gap-4 max-w-3xl mx-auto">
        <FAQItem
          q="Is this real AI?"
          a="In the demo, it's a baseline algorithm that mimics an AI flow. The architecture is designed to swap in real ML later."
        />
        <FAQItem
          q="Where does the data come from?"
          a="Currently from a curated CSV. Next step: real-time sources (APIs/scraping) + automated cleaning."
        />
        <FAQItem
          q="Can it predict 100% accurately?"
          a="No model is perfect. The goal is direction + confidence, not absolute certainty."
        />
      </div>
    </Page>
  );
}
