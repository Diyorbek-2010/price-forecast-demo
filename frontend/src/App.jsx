import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppShell from "./components/AppShell";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home.jsx";
import Demo from "./pages/Demo.jsx";
import Problem from "./pages/Problem.jsx";
import Solution from "./pages/Solution.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Benefits from "./pages/Benefits.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import FAQ from "./pages/FAQ.jsx";
import MVP from "./pages/MVP.jsx";
import Team from "./pages/Team.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/mvp" element={<MVP />} />
          </Routes>
        </main>
        <Footer />
      </AppShell>
    </BrowserRouter>
  );
}
