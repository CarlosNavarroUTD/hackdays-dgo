import { Brain, Cpu, Globe, ShieldCheck } from "lucide-react"

const tracks = [
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    desc: "Construye soluciones con modelos generativos, visión por computadora y agentes inteligentes.",
    color: "text-neon-magenta",
    border: "hover:border-neon-magenta/50",
  },
  {
    icon: Globe,
    title: "Web & Apps",
    desc: "Desarrolla experiencias web y móviles modernas con impacto social y comercial.",
    color: "text-neon-cyan",
    border: "hover:border-neon-cyan/50",
  },
  {
    icon: Cpu,
    title: "IoT & Hardware",
    desc: "Conecta el mundo físico y digital con dispositivos, sensores y sistemas embebidos.",
    color: "text-neon-green",
    border: "hover:border-neon-green/50",
  },
  {
    icon: ShieldCheck,
    title: "Ciberseguridad",
    desc: "Protege sistemas, datos y usuarios con soluciones de seguridad innovadoras.",
    color: "text-neon-blue",
    border: "hover:border-neon-blue/50",
  },
]

export function Tracks() {
  return (
    <section id="tracks" className="relative bg-white/[0.02] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 text-center">
          <p className="mb-3 font-display text-xs uppercase tracking-[0.3em] text-neon-cyan/80">
            Categorías
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Elige tu <span className="text-neon-green text-glow-green">track</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((t) => (
            <div
              key={t.title}
              className={`glass rounded-2xl border border-white/10 p-7 transition-colors ${t.border}`}
            >
              <t.icon className={`mb-5 ${t.color}`} size={36} />
              <h3 className="font-display text-lg font-bold">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
