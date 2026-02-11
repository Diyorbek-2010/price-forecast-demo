import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Glass from "../components/Glass";
import { PrimaryButton, GhostButton } from "../components/Button";

function Feature({ title, text }) {
  return (
    <Glass className="p-6">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/70 dark:text-white/70 text-black/60 leading-relaxed">
        {text}
      </div>
    </Glass>
  );
}

function Step({ n, title, text }) {
  return (
    <Glass className="p-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center font-bold
                        bg-black/10 border-black/10 dark:bg-white/10 dark:border-white/10">
          {n}
        </div>
        <div className="text-lg font-semibold">{title}</div>
      </div>
      <div className="mt-3 text-sm text-white/70 dark:text-white/70 text-black/60 leading-relaxed">{text}</div>
    </Glass>
  );
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="space-y-10">
      <Glass className="p-10">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80
                        border-black/10 bg-black/5 text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          {t("home.badge")}
        </div>

        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
          {t("home.h1")}
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-white/70 dark:text-white/70 text-black/60 leading-relaxed">
          {t("home.p")}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/demo">
            <PrimaryButton>{t("home.ctaPrimary")}</PrimaryButton>
          </Link>
          <Link to="/problem">
            <GhostButton>{t("home.ctaSecondary")}</GhostButton>
          </Link>
        </div>
      </Glass>

      <div className="grid lg:grid-cols-2 gap-6">
        <Glass className="p-8">
          <h2 className="text-2xl font-bold">{t("home.section1Title")}</h2>
          <p className="mt-3 text-sm text-white/70 dark:text-white/70 text-black/60 leading-relaxed">
            {t("home.section1Text")}
          </p>
        </Glass>

        <div className="grid md:grid-cols-3 gap-6">
          <Feature title={t("home.s2aTitle")} text={t("home.s2aText")} />
          <Feature title={t("home.s2bTitle")} text={t("home.s2bText")} />
          <Feature title={t("home.s2cTitle")} text={t("home.s2cText")} />
        </div>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-center">{t("home.section3Title")}</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Step n="1" title={t("home.step1Title")} text={t("home.step1Text")} />
          <Step n="2" title={t("home.step2Title")} text={t("home.step2Text")} />
          <Step n="3" title={t("home.step3Title")} text={t("home.step3Text")} />
        </div>
      </div>

      <Glass className="p-10 text-center">
        <h3 className="text-3xl font-bold">{t("home.footerTitle")}</h3>
        <p className="mt-3 text-sm text-white/70 dark:text-white/70 text-black/60">
          {t("home.footerText")}
        </p>
        <div className="mt-6">
          <Link to="/demo">
            <PrimaryButton>{t("common.openDemo")}</PrimaryButton>
          </Link>
        </div>
      </Glass>
    </div>
  );
}
