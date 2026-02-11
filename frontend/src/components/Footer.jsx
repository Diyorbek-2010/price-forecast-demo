import React from "react";
import { useTranslation } from "react-i18next";
import Glass from "./Glass";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10">
      <Glass className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="font-semibold">{t("brand.name")}</div>
          <div className="text-sm text-white/60 dark:text-white/60 text-black/60">
            © {new Date().getFullYear()} {t("brand.name")} — demo build
          </div>
        </div>
      </Glass>
    </div>
  );
}
