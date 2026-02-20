import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Glass from "../components/Glass";
import { PrimaryButton } from "../components/Button";

function Card({ title, text }) {
  return (
    <Glass className="p-6">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/70 dark:text-white/70 text-black/60 leading-relaxed">
        {text}
      </div>
    </Glass>
  );
}

export default function Problem() {
  const { t } = useTranslation();

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          {t("problem.title")}
        </h1>
        <p className="mt-4 text-white/70 dark:text-white/70 text-black/60 text-lg">
          {t("problem.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="overflow-visible rounded-3xl hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
          <Card title={t("problem.cards.aT")} text={t("problem.cards.aD")} />
        </div>
        <div className="overflow-visible rounded-3xl hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
          <Card title={t("problem.cards.bT")} text={t("problem.cards.bD")} />
        </div>
        <div className="overflow-visible rounded-3xl hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
          <Card title={t("problem.cards.cT")} text={t("problem.cards.cD")} />
        </div>
        <div className="overflow-visible rounded-3xl hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
          <Card title={t("problem.cards.dT")} text={t("problem.cards.dD")} />
        </div>
        <div className="overflow-visible rounded-3xl hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
          <Card title={t("problem.cards.eT")} text={t("problem.cards.eD")} />
        </div>
        <div className="overflow-visible rounded-3xl hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
          <Card title={t("problem.cards.fT")} text={t("problem.cards.fD")} />
        </div>
      </div>

      <Glass className="p-10 rounded-3xl hover:scale-[1.01] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
        <h2 className="text-2xl font-bold">{t("problem.impactTitle")}</h2>
        <p className="mt-4 text-white/70 dark:text-white/70 text-black/60 leading-relaxed">
          {t("problem.impactText1")}
        </p>
        <p className="mt-3 text-white/70 dark:text-white/70 text-black/60 leading-relaxed">
          {t("problem.impactText2")}
        </p>
      </Glass>

      <div className="text-center">
        <h2 className="text-3xl font-bold">{t("problem.ctaTitle")}</h2>
        <p className="mt-3 text-white/70 dark:text-white/70 text-black/60">
          {t("problem.ctaText")}
        </p>
        <div className="mt-6">
          <Link to="/demo">
            <PrimaryButton className="bg-slate-900 border border-slate-800rounded-xl p-4 transition-all duration-300 hover:shadow-[0_0_5px_#7c3aed,0_0_25px_#7c3aed,0_0_50px_#7c3aed] hover:border-violet-100">{t("common.openDemo")}</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
