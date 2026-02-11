import React from "react";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-[#050510] text-white dark:bg-[#050510]">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute top-20 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />

        {/* Light-mode background (when NOT dark) */}
        <div className="dark:hidden">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-400/30 blur-3xl" />
          <div className="absolute top-10 -left-40 h-[520px] w-[520px] rounded-full bg-blue-400/25 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-pink-400/20 blur-3xl" />
        </div>
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}
