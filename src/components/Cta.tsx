import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Cta() {
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <section id="cta" className="relative overflow-hidden py-24">
      <div className="rainbow-bar absolute inset-x-0 bottom-0 h-1.5 opacity-80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />

      <div className="mx-auto max-w-2xl px-5 text-center">
        <h2 className="text-balance font-display text-4xl font-bold sm:text-5xl">
          Asegura tu <span className="text-neon-cyan text-glow-cyan">lugar</span>
        </h2>
        <p className="mt-4 text-foreground/70">
          Cupo limitado. Regístrate y recibe toda la información del evento
          rumbo al Summit 2026.
        </p>

        {sent ? (
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-neon-green/40 bg-neon-green/10 px-6 py-4 text-neon-green">
            <CheckCircle2 size={22} />
            <span className="font-semibold">
              ¡Listo! Te contactaremos pronto.
            </span>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (email) setSent(true)
            }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="flex-1 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-neon-cyan"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neon-cyan px-7 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Registrarme
              <ArrowRight size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
