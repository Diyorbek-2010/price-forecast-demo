import React from "react";

export default function Glass({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-3xl border border-white/10 backdrop-blur-xl",
        "shadow-[0_10px_50px_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
