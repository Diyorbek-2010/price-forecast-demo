export function Glass({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-3xl border border-white/10  backdrop-blur-xl shadow-lg " +
        className
      }
    >
      {children}
    </div>
  );
}

export function Page({ title, kicker, desc, children }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="text-center max-w-3xl mx-auto">
        {kicker && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10  text-sm text-white/80">
            {kicker}
          </div>
        )}
        <h1 className="mt-6 text-4xl md:text-5xl font-bold">{title}</h1>
        {desc && <p className="mt-3 text-white/70 text-lg">{desc}</p>}
      </div>

      <div className="mt-12">{children}</div>
    </div>
  );
}

export function Card({ title, desc }) {
  return (
    <Glass className="p-6 transition">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-white/70 text-sm mt-2 leading-relaxed">{desc}</div>
    </Glass>
  );
}
