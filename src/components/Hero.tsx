import { MapPin, CalendarDays } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-32">
      {/* rainbow ribbon top accent */}
      <div className="rainbow-bar absolute inset-x-0 top-0 h-1.5 opacity-90" />

      {/* background faces image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/faces.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/10 via-transparent to-neon-cyan/10" />
      </div>

      {/* concentric ripple rings behind title */}
      <div className="pointer-events-none absolute left-1/2 top-44 -z-10 -translate-x-1/2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-cyan/30 animate-ripple"
            style={{ animationDelay: `${i * 1.6}s` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <p className="mb-4 font-display text-xs font-medium uppercase tracking-[0.4em] text-neon-cyan/80">
          In Durango
        </p>

        <h1 className="font-display text-6xl font-black leading-none tracking-tight sm:text-7xl md:text-8xl">
          <span className="text-foreground text-glow-cyan">HACK</span>
          <span className="block text-neon-green text-glow-green">DAYS</span>
        </h1>

        <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-foreground/60">
          by Universidad Tecnológica de Durango
        </p>

        <div className="mx-auto mt-10 max-w-xl">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-foreground/70">
            Rumbo al
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neon-blue text-glow-cyan sm:text-5xl">
            SUMMIT <span className="text-neon-cyan">2026</span>
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-foreground/80">
            Gigantes de la Tecnología
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan/70">
            Cuarta edición
          </p>
        </div>

        {/* date + location chips */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="glass flex items-center gap-3 rounded-2xl border border-neon-cyan/30 px-6 py-4">
            <CalendarDays className="text-neon-cyan" size={28} />
            <div className="text-left">
              <p className="font-display text-2xl font-bold leading-none text-neon-cyan text-glow-cyan">
                6
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest">
                de Junio
              </p>
            </div>
          </div>
          <div className="glass flex items-center gap-3 rounded-2xl border border-neon-magenta/30 px-6 py-4">
            <MapPin className="text-neon-magenta" size={28} />
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-foreground/60">
                Sede
              </p>
              <p className="text-sm font-bold uppercase tracking-wide">
                Museo Bebeleche
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#cta"
            className="rounded-full bg-neon-cyan px-8 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Regístrate gratis
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-neon-cyan hover:text-neon-cyan"
          >
            Conoce más
          </a>
        </div>
      </div>
    </section>
  )
}
