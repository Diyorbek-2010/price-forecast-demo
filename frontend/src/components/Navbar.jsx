import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme";
import Glass from "./Glass";

const items = [
  { to: "/", key: "nav.home" },
  { to: "/demo", key: "nav.demo" },
  { to: "/problem", key: "nav.problem" },
  { to: "/solution", key: "nav.solution" },
  { to: "/how-it-works", key: "nav.how" },
  { to: "/benefits", key: "nav.benefits" },
  { to: "/roadmap", key: "nav.roadmap" },
  { to: "/team", key: "nav.team" },
  { to: "/faq", key: "nav.faq" },
  { to: "/mvp", key: "nav.mvp" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const [lang, setLang] = React.useState(() => localStorage.getItem("lang") || "en");

  const onLang = async (e) => {
    const next = e.target.value;
    setLang(next);
    localStorage.setItem("lang", next);
    await i18n.changeLanguage(next);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <Glass className="px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="font-bold tracking-wide">
              {t("brand.name")}
            </Link>

            <nav className="hidden md:flex items-center gap-3">
              {items.map((it) => (
                <NavLink
                  key={it.to}
                  to={it.to}
                  className={({ isActive }) =>
                    "text-sm px-3 py-2 rounded-lg transition " +
                    (isActive
                      ? "text-white dark: dark:text-white bg-black/10 text-black"
                      : "text-white/70 hover:text-white hover: dark:text-white/70 dark:hover:text-white dark:hover: text-black/70 hover:text-black hover:bg-black/5")
                  }
                >
                  {t(it.key)}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <select
                value={lang}
                onChange={onLang}
                className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white outline-none
                           dark:border-white/10 dark:bg-black/20
                           border-black/10 bg-white/60 text-black"
                aria-label={t("common.language")}
              >
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="uz">UZ</option>
              </select>

            </div>
          </div>
        </Glass>
      </div>
    </div>
  );
}
