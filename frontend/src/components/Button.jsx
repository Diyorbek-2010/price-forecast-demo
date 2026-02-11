import React from "react";

export function PrimaryButton({ className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold " +
        "bg-linear-to-r from-fuchsia-500 to-indigo-500 text-white hover:opacity-90 active:opacity-80 " +
        "shadow-[0_12px_40px_rgba(99,102,241,0.25)] " +
        className
      }
    />
  );
}

export function GhostButton({ className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center rounded-xl px-5 py-3 " +
        "border border-white/15 bg-white/5 text-white hover:bg-white/10 " +
        "dark:border-white/15 dark:bg-white/5 " +
        "border-black/10 bg-white/60 text-black hover:bg-white/80 dark:text-white " +
        className
      }
    />
  );
}
