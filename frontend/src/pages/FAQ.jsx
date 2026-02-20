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
        <div className="rounded-2xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
        <Item q={t("faq.IsTitle")} a={t("faq.ThisTitle")} />
        </div>
        <div className="rounded-2xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
        <Item q={t("faq.WhereTitle")} a={t("faq.DemoTitle")} />
        </div>
        <div className="rounded-2xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">

        <Item q={t("faq.CanTitle")} a={t("faq.NoTitle")} />
        </div>
        <div className="rounded-2xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">
        <Item q={t("faq.WillTitle")} a={t("faq.YesTitle")} />
        </div>
      </div>

      <div className="text-center">
        <Link to="/demo">
          <PrimaryButton className="rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] hover:border-violet-500 hover:shadow-[0_0_10px_#7c3aed,0_0_30px_#7c3aed]">{t("common.openDemo")}</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
