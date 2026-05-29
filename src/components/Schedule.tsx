const schedule = [
  { time: "08:00", title: "Registro y bienvenida", desc: "Acreditación y kit del participante." },
  { time: "09:30", title: "Ceremonia de apertura", desc: "Presentación de retos y mentores." },
  { time: "10:00", title: "¡Inicia el hackathon!", desc: "Arranque oficial de la construcción." },
  { time: "14:00", title: "Talleres y mentorías", desc: "Sesiones con expertos de la industria." },
  { time: "19:00", title: "Pitch & demos", desc: "Cada equipo presenta su proyecto." },
  { time: "21:00", title: "Premiación", desc: "Anuncio de ganadores rumbo al Summit." },
]

export function Schedule() {
  return (
    <section id="schedule" className="relative py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-14 text-center">
          <p className="mb-3 font-display text-xs uppercase tracking-[0.3em] text-neon-cyan/80">
            Agenda · 6 de Junio
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Un día <span className="text-neon-cyan text-glow-cyan">intenso</span>
          </h2>
        </div>

        <ol className="relative ml-3 border-l border-white/15">
          {schedule.map((item) => (
            <li key={item.time} className="mb-8 ml-6 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(34,227,255,0.8)]" />
              <div className="glass rounded-xl border border-white/10 p-5">
                <p className="font-display text-sm font-bold text-neon-cyan">
                  {item.time}
                </p>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-foreground/60">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
