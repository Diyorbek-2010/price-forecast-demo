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

export default function Solution() {
  const { t } = useTranslation();

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          {t("solution.title")}
        </h1>
        <p className="mt-4 text-white/70 dark:text-white/70 text-black/60 text-lg">
          {t("solution.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 ">
        <div className="rounded-3xl hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
          <Card
            title={"📈 " + t("solution.provideA")}
            text={t("solution.provideAText")}
          />
        </div>
        <div className="rounded-3xl hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
          <Card
            title={"🧠 " + t("solution.provideB")}
            text={t("solution.provideBText")}
          />
        </div>
        <div className="rounded-3xl hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
          <Card
            title={"🎯 " + t("solution.provideC")}
            text={t("solution.provideCText")}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 ">
        <Glass className="p-8 rounded-xl p-4 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.01] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
          <h2 className="text-2xl font-bold">{t("solution.fastTitle")}</h2>
          <p className="mt-3 text-white/70 dark:text-white/70 text-black/60 leading-relaxed">
            {t("solution.fastText")}
          </p>
          <ul className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5 border-black/10 bg-white/60 text-black dark:border-white/10 dark:bg-black/20 dark:text-white">
            <li>{t("solution.ChooseTitle")}</li>
            <li>{t("solution.PickTitle")}</li>
            <li>{t("solution.Get_chartTitle")}</li>
          </ul>
        </Glass>

        <Glass className="p-8 rounded-xl p-4 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.01] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
          <h2 className="text-2xl font-bold">{t("solution.demoTitle")}</h2>
          <p className="mt-3 text-white/70 dark:text-white/70 text-black/60 leading-relaxed">
            {t("solution.demoText")}
          </p>
          <div
            className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5
                          border-black/10 bg-white/60 text-black dark:border-white/10 dark:bg-black/20 dark:text-white"
          >
            <div className="text-sm text-white/60 dark:text-white/60 text-black/60">
              {t("solution.PlannedTitle")}
            </div>
            <div className="mt-2 text-sm text-white/70 dark:text-white/70 text-black/60 space-y-2">
              <div>•{t("solution.LiveTitle")}</div>
              <div>•{t("solution.MLTitle")}</div>
              <div>•{t("solution.ConfidenceTitle")}</div>
              <div>•{t("solution.AlertsTitle")}</div>
            </div>
          </div>
        </Glass>
      </div>

      <div className="text-center">
        <Link to="/demo">
          <PrimaryButton className="bg-slate-900 border border-slate-800 rounded-xl p-4 cursor-pointer transition-all duration-100 ease-out hover:scale-[1.05] hover:border-violet-100 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">{t("common.openDemo")}</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
