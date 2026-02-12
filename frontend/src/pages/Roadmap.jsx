import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Glass from "../components/Glass";
import { PrimaryButton } from "../components/Button";

function Column({ title, items }) {
  return (
    <Glass className="p-7">
      <div className="text-xl font-bold">{title}</div>
      <ul className="mt-4 text-sm text-white/70 dark:text-white/70 text-black/60 list-disc list-inside space-y-2">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </Glass>
  );
}

export default function Roadmap() {
  const { t } = useTranslation();

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="mt-4 text-4xl md:text-5xl font-bold">{t("roadmap.title")}</h1>
        <p className="mt-4 text-white/70 dark:text-white/70 text-black/60 text-lg">{t("roadmap.subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Column
          title={t("roadmap.phase1")}
          items={[t("roadmap.CuratedTitle"), t("roadmap.BaselineTitle"), t("roadmap.DashboardTitle"), t("roadmap.StableTitle")]}
        />
        <Column
          title={t("roadmap.phase2")}
          items={[t("roadmap.AutomatedTitle"), t("roadmap.CleaningTitle"), t("roadmap.MonitoringTitle"), t("roadmap.ValidationTitle")]}
        />
        <Column
          title={t("roadmap.phase3")}
          items={[t("roadmap.MLTitle"), t("roadmap.ConfidenceTitle"), t("roadmap.ExplainabilityTitle"), t("roadmap.AlertsTitle")]}
        />
      </div>

      <Glass className="p-8">
        <h2 className="text-2xl font-bold">{t("roadmap.whyTitle")}</h2>
        <p className="mt-3 text-white/70 dark:text-white/70 text-black/60 leading-relaxed">{t("roadmap.whyText")}</p>
      </Glass>

      <div className="text-center">
        <Link to="/demo">
          <PrimaryButton>{t("common.openDemo")}</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
