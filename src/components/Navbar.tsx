import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "El evento", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Agenda", href: "#schedule" },
  { label: "Sede", href: "#info" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-widest">
          <span className="text-glow-cyan text-neon-cyan">HACK</span>
          <span className="text-neon-green text-glow-green">DAYS</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-neon-cyan"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-full bg-neon-cyan px-5 py-2 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Regístrate
          </a>
        </nav>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="glass border-t border-white/10 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="rounded-full bg-neon-cyan px-5 py-2 text-center text-sm font-semibold text-background"
            >
              Regístrate
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
