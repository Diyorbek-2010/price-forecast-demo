import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Glass from "../components/Glass";
import { PrimaryButton } from "../components/Button";

function Column({ title, items }) {
  return (
    <Glass
      className="p-7 border border-white/10 rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-103 hover:border-violet-500 hover:shadow-[0_0_15px_#7c3aed,0_0_35px_#7c3aed]"
    >
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
        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          {t("roadmap.title")}
        </h1>

        <p className="mt-4 text-white/70 dark:text-white/70 text-black/60 text-lg">
          {t("roadmap.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Column
          title={t("roadmap.phase1")}
          items={[
            t("roadmap.CuratedTitle"),
            t("roadmap.BaselineTitle"),
            t("roadmap.DashboardTitle"),
            t("roadmap.StableTitle"),
          ]}
        />

        <Column
          title={t("roadmap.phase2")}
          items={[
            t("roadmap.AutomatedTitle"),
            t("roadmap.CleaningTitle"),
            t("roadmap.MonitoringTitle"),
            t("roadmap.ValidationTitle"),
          ]}
        />

        <Column
          title={t("roadmap.phase3")}
          items={[
            t("roadmap.MLTitle"),
            t("roadmap.ConfidenceTitle"),
            t("roadmap.ExplainabilityTitle"),
            t("roadmap.AlertsTitle"),
          ]}
        />
      </div>

      <Glass className="p-8 border border-white/10 rounded-3xl rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
        <h2 className="text-2xl font-bold">
          {t("roadmap.whyTitle")}
        </h2>

        <p className="mt-3 text-white/70 dark:text-white/70 text-black/60 leading-relaxed">
          {t("roadmap.whyText")}
        </p>
      </Glass>

      <div className="text-center">
        <Link to="/demo">
          <PrimaryButton className="rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.01] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
            {t("common.openDemo")}
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}