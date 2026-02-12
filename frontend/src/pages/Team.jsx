import React from "react";
import Glass from "../components/Glass.jsx";

import fotima from "../assets/team/Fotima.jpg";
import diyorbek from "../assets/team/Diyorbek.jpg";
import zaynabbegim from "../assets/team/Zaynabbegim.jpg";
import nasrullo from "../assets/team/Nasrullo.jpg";

const TEAM = [
  {
    name: "Zaynabbegim Komilovna",
    role: "AI Engineer",
     
    bio: "Time-series prognozlash, feature engineering va model baholash yo‘nalishlarida ishlaydi. Tadqiqot va model iteratsiyalarini tezlashtirishga fokus.",
    tags: ["Machine Learning", "Deep Learning", "Time-Series", "Model Optimization"],
    img: zaynabbegim,
  },
  {
    name: "Diyorbek Hikmatullayev",
    role: "Full-Stack Developer",
     
    bio: "React (Vite) + FastAPI asosida mahsulot yaratish, API integratsiya va deploy jarayonlarini (Railway) boshqarish. UI/UX’ni tez va sifatli yig‘adi.",
    tags: ["React (Vite)", "FastAPI", "UI Engineering", "Deployment (Railway)"],
    img: diyorbek,
  },
  {
    name: "Zikirova Fotima",
    role: "Product & Research",
     
    bio: "Bozor tahlili, foydalanuvchi ehtiyojlari va MVP scope. Hujjatlashtirish (PRD/Spec) va kontent strukturasini professional tarzda yuritadi.",
    tags: ["Product Strategy", "Market Research", "MVP Scope", "UX Writing"],
    img: fotima,
  },
  {
    name: "Nasrullo Nutfulloyev",
    role: "Data Analyst",
     
    bio: "Ma’lumotlarni tozalash, trend/seasonality tahlili va metrikalar. Vizual analitika hamda business uchun tushunarli xulosalar tayyorlaydi.",
    tags: ["Data Cleaning", "Seasonality", "Forecast QA", "Dashboards"],
    img: nasrullo,
  },
];

export default function Team() {
  return (
    <section className="space-y-10">
      <Header />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {TEAM.map((person) => (
          <MemberCard key={person.name} person={person} />
        ))}
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-3 justify-center">
        <span className="text-2xl">👥</span>
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
          Bizning jamoa
        </h1>
      </div>

      <p className="max-w-3xl mx-auto mt-3 text-white/70">
        2–3 yillik tajribaga ega mutaxassislar: AI, data tahlil, product va full-stack yo‘nalishlarda bir jamoa bo‘lib ishlaymiz.
      </p>
    </div>
  );
}

function MemberCard({ person }) {
  return (
    <Glass className="p-6 h-full relative overflow-hidden group">
      {/* premium glow */}
      <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:bg-indigo-500/20" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl transition group-hover:bg-emerald-500/20" />

      <div className="relative flex flex-col items-center text-center">
        {/* avatar */}
        <div className="relative">
          <div className="h-24 w-24 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 p-[3px] shadow-[0_14px_45px_rgba(0,0,0,0.5)]">
            <div className="h-full w-full rounded-full overflow-hidden bg-black/20">
              <img
                src={person.img}
                alt={person.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <h3 className="mt-6 text-xl font-semibold tracking-tight">
          {person.name}
        </h3>

        <div className="mt-1 text-sm font-medium text-cyan-300/90">
          {person.role}
        </div>

        <p className="mt-3 text-sm leading-6 text-white/70">
          {person.bio}
        </p>

        {/* tags */}
        <div className="mt-5 w-full grid grid-cols-2 gap-2">
          {person.tags.slice(0, 4).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {/* subtle bottom line */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </Glass>
  );
}

function Tag({ children }) {
  return (
    <div className="px-3 py-2 rounded-xl text-xs text-white/85 border border-white/10 bg-white/5 hover:bg-white/10 transition">
      {children}
    </div>
  );
}
