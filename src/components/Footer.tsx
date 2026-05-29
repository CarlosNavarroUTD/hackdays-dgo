import { Instagram, Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold tracking-widest">
            <span className="text-neon-cyan text-glow-cyan">HACK</span>
            <span className="text-neon-green text-glow-green">DAYS</span>
          </p>
          <p className="mt-1 text-sm text-foreground/50">
            by Universidad Tecnológica de Durango · In Durango 2026
          </p>
        </div>

        <div className="flex items-center gap-5">
          {[Instagram, Twitter, Github].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-foreground/50 transition-colors hover:text-neon-cyan"
              aria-label="Red social"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-foreground/40">
        © 2026 Hack Days by UTD. Rumbo al Summit · Gigantes de la Tecnología.
      </p>
    </footer>
  )
}
