import { MapPin, CalendarDays, Clock, Ticket } from "lucide-react"

const info = [
  { icon: CalendarDays, label: "Fecha", value: "6 de Junio, 2026" },
  { icon: Clock, label: "Horario", value: "08:00 — 21:00 hrs" },
  { icon: MapPin, label: "Sede", value: "Museo Bebeleche, Durango" },
  { icon: Ticket, label: "Costo", value: "Entrada gratuita" },
]

export function EventInfo() {
  return (
    <section id="info" className="relative bg-white/[0.02] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-display text-xs uppercase tracking-[0.3em] text-neon-cyan/80">
              Cómo llegar
            </p>
            <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">
              Te esperamos en el{" "}
              <span className="text-neon-magenta text-glow-magenta">
                Museo Bebeleche
              </span>
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Un espacio interactivo en el corazón de Durango, el escenario
              perfecto para una jornada donde la creatividad y la tecnología se
              fusionan.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {info.map((i) => (
                <div
                  key={i.label}
                  className="glass rounded-xl border border-white/10 p-5"
                >
                  <i.icon className="mb-3 text-neon-cyan" size={24} />
                  <p className="text-xs uppercase tracking-widest text-foreground/50">
                    {i.label}
                  </p>
                  <p className="mt-1 font-semibold">{i.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Mapa Museo Bebeleche"
              src="https://www.google.com/maps?q=Museo+Bebeleche+Durango&output=embed"
              className="h-80 w-full grayscale-[0.3]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
