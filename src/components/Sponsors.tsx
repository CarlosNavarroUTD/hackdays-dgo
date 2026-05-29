const sponsors = [
  "Durango — Fomento Económico y Turismo",
  "Gemini",
  "XIXIM — Clúster de Innovación",
  "Universidad Tecnológica de Durango",
  "Major League Hacking",
  "Durango · ¡Es el camino!",
]

export function Sponsors() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-10">
      <div className="mx-auto max-w-6xl px-5">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.3em] text-foreground/50">
          Con el respaldo de
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {sponsors.map((s) => (
            <span
              key={s}
              className="text-center text-sm font-semibold uppercase tracking-wide text-foreground/60 transition-colors hover:text-neon-cyan"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
