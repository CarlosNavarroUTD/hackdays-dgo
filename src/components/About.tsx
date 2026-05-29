import { Users, Code2, Trophy } from "lucide-react"

const stats = [
  { icon: Users, value: "300+", label: "Hackers esperados" },
  { icon: Code2, value: "24h", label: "De construcción" },
  { icon: Trophy, value: "$$$", label: "En premios" },
]

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-display text-xs uppercase tracking-[0.3em] text-neon-cyan/80">
            El evento
          </p>
          <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">
            Donde lo humano y lo artificial se{" "}
            <span className="text-neon-magenta text-glow-magenta">encuentran</span>
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-foreground/70">
            Hack Days by UTD reúne a estudiantes, desarrolladores y mentes
            creativas de Durango para construir el futuro de la tecnología.
            Una jornada intensa rumbo al Summit 2026 &mdash; Gigantes de la
            Tecnología, donde la inteligencia artificial y el talento humano
            colaboran para resolver retos reales.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl border border-white/10 p-8 text-center transition-colors hover:border-neon-cyan/40"
            >
              <s.icon className="mx-auto mb-4 text-neon-cyan" size={32} />
              <p className="font-display text-3xl font-bold text-glow-cyan">
                {s.value}
              </p>
              <p className="mt-1 text-sm uppercase tracking-widest text-foreground/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
