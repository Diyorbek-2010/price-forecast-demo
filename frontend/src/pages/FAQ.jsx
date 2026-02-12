import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Glass from "../components/Glass";
import { PrimaryButton } from "../components/Button";

function Item({ q, a }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/5 p-5
                        border-black/10 bg-white/70 text-black dark:border-white/10 dark:bg-white/5 dark:text-white">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
        <span className="font-semibold">{q}</span>
        <span className="opacity-60 group-open:rotate-180 transition">⌄</span>
      </summary>
      <p className="mt-3 text-sm text-white/70 dark:text-white/70 text-black/60 leading-relaxed">{a}</p>
    </details>
  );
}

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="mt-4 text-4xl md:text-5xl font-bold">{t("faq.title")}</h1>
        <p className="mt-4 text-white/70 dark:text-white/70 text-black/60 text-lg">{t("faq.subtitle")}</p>
      </div>

      <div className="grid gap-4 max-w-3xl mx-auto">
        <Item q="Is this real AI?" a="This is a demo baseline. The UI and API are built to support real ML models later." />
        <Item q="Where does the data come from?" a="Demo uses curated CSV data. Next step is live ingestion from real sources." />
        <Item q="Can it predict perfectly?" a="No model is perfect. We provide direction + chart + context." />
        <Item q="Will you add alerts?" a="Yes. Watchlists and notifications are planned for the real product." />
      </div>

      <div className="text-center">
        <Link to="/demo">
          <PrimaryButton>{t("common.openDemo")}</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
