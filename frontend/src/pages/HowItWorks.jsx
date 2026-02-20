import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Glass from "../components/Glass";
import { PrimaryButton } from "../components/Button";

function Step({ n, title, desc }) {
  return (
    <Glass className="p-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center font-bold
                        bg-black/10 border-black/10 dark:bg-white/10 dark:border-white/10">
          {n}
        </div>
        <div className="text-lg font-semibold">{title}</div>
      </div>
      <div className="mt-3 text-sm text-white/70 dark:text-white/70 text-black/60 leading-relaxed">{desc}</div>
    </Glass>
  );
}

function Box({ title, items }) {
  return (
    <Glass className="p-6">
      <div className="text-lg font-semibold">{title}</div>
      <ul className="mt-3 text-sm text-white/70 dark:text-white/70 text-black/60 list-disc list-inside space-y-2">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </Glass>
  );
}

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="mt-4 text-4xl md:text-5xl font-bold">{t("how.title")}</h1>
        <p className="mt-4 text-white/70 dark:text-white/70 text-black/60 text-lg">{t("how.subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="overflow-visible  rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
        <Step n="1" title={t("how.step1")} desc={t("how.step1Text")} />
        </div>
        <div className="overflow-visible  rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
        <Step n="2" title={t("how.step2")} desc={t("how.step2Text")} />
        </div>
        <div className="overflow-visible  rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
        <Step n="3" title={t("how.step3")} desc={t("how.step3Text")} />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="overflow-visible  rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
        <Box
          title={t("how.inputTitle")}
          items={[t("how.CategoryTitle"), t("how.ProductTitle"), t("how.RegionTitle")]}
        />
        </div>
        <div className="overflow-visible  rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
        <Box
          title={t("how.outputTitle")}
          items={[t("how.TrendTitle"), t("how.ChartTitle"), t("how.SummaryTitle")]}
        />
        </div>
      </div>
      <div className="text-center">
        <Link to="/demo">
          <PrimaryButton className="overflow-visible  rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">{t("common.openDemo")}</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
