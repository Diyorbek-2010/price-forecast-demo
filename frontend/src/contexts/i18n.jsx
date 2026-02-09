import React, { createContext, useContext, useMemo, useState } from "react";

const dict = {
  en: {
    home: "Home",
    demo: "Demo",
    brand: "PriceForecast",
  },
  uz: {
    home: "Bosh sahifa",
    demo: "Demo",
    brand: "PriceForecast",
  },
};

const I18nCtx = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(() => localStorage.getItem("lang") || "en");

  const setLang = (l) => {
    localStorage.setItem("lang", l);
    setLangState(l);
  };

  const t = (key) => dict[lang]?.[key] ?? dict.en[key] ?? key;

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
