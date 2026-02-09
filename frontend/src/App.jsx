import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Demo from "./pages/Demo.jsx";
import Problem from "./pages/Problem.jsx";
import Solution from "./pages/Solution.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Benefits from "./pages/Benefits.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import MVP from "./pages/MVP.jsx";
import FAQ from "./pages/FAQ.jsx";

function Navbar() {
  const linkBase =
    "px-4 py-2 rounded-full text-sm transition border border-white/10 hover:border-white/20 hover:bg-white/5";
  const active = "bg-white/10 border-white/20";

  const nav = [
    { to: "/", label: "Home" },
    { to: "/demo", label: "Demo" },
    { to: "/problem", label: "Problem" },
    { to: "/solution", label: "Solution" },
    { to: "/how-it-works", label: "How it works" },
    { to: "/benefits", label: "Benefits" },
    { to: "/roadmap", label: "Roadmap" },
    { to: "/mvp", label: "MVP" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="text-xl font-semibold tracking-wide select-none whitespace-nowrap">
          <span className="text-teal-300">Price</span>
          <span className="text-indigo-300">Forecast</span>
        </div>

        <div className="flex gap-2 items-center flex-wrap justify-end">
          {nav.map((x) => (
            <NavLink
              key={x.to}
              to={x.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : "text-white/80"}`
              }
            >
              {x.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <div className="fixed inset-0 -z-10 bg-[#05060a]" />
      <div className="fixed inset-0 -z-10 opacity-80 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-136 w-136 rounded-full bg-teal-500/30 blur-3xl" />
        <div className="absolute -bottom-44 -right-44 h-144 w-xl rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-112 w-md rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/mvp" element={<MVP />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}
