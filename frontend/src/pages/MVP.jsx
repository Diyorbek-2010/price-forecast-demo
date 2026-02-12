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

export default function MVP() {
  const { t } = useTranslation();

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="mt-4 text-4xl md:text-5xl font-bold">{t("mvp.title")}</h1>
        <p className="mt-4 text-white/70 dark:text-white/70 text-black/60 text-lg">{t("mvp.subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title={t("mvp.EndTitle")} text={t("mvp.InputsTitle")} />
        <Card title={t("mvp.StableTitle")} text={t("mvp.ChartTitle")} />
        <Card title={t("mvp.UpgradeableTitle")} text={t("mvp.BaselineTitle")} />
      </div>

      <div className="text-center">
        <Link to="/demo">
          <PrimaryButton>{t("common.openDemo")}</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
