import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Glass from "../components/Glass";
import { PrimaryButton } from "../components/Button";

function Card({ title, text }) {
  return (
    <Glass className="p-6">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/70 dark:text-white/70 text-black/60 leading-relaxed">{text}</div>
    </Glass>
  );
}

function ListCard({ title, items }) {
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

export default function Benefits() {
  const { t } = useTranslation();

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="mt-4 text-4xl md:text-5xl font-bold">{t("benefits.title")}</h1>
        <p className="mt-4 text-white/70 dark:text-white/70 text-black/60 text-lg">{t("benefits.subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title={"💸 " + t("benefits.coreA")} text={t("benefits.coreAText")} />
        <Card title={"📦 " + t("benefits.coreB")} text={t("benefits.coreBText")} />
        <Card title={"🧠 " + t("benefits.coreC")} text={t("benefits.coreCText")} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <ListCard
          title={t("benefits.households")}
          items={[t("benefits.PlanTitle"), t("benefits.AvoidTitle"), t("benefits.CompareTitle")]}
        />
        <ListCard
          title={t("benefits.businesses")}
          items={[t("benefits.ReduceTitle"), t("benefits.ChooseTitle"), t("benefits.MonitorTitle")]}
        />
      </div>

      <div className="text-center">
        <Link to="/demo">
          <PrimaryButton>{t("common.openDemo")}</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
