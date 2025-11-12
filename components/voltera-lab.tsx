import { Cog, Microscope, Lightbulb, Zap } from "lucide-react"

export function VolteraLab() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[var(--brass)] mb-6 text-balance">
            The Voltera Lab
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            An interactive laboratory where Victorian mechanisms meet quantum innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Cog, title: "Mechanical", desc: "Precision gears & steam" },
            { icon: Microscope, title: "Scientific", desc: "Research & analysis" },
            { icon: Lightbulb, title: "Innovation", desc: "Future technology" },
            { icon: Zap, title: "Energy", desc: "Power transmission" },
          ].map((item, i) => (
            <div
              key={i}
              className="border-2 border-[var(--dark-copper)] bg-background p-6 hover:border-[var(--neon-teal)] transition-all duration-300 group cursor-pointer"
            >
              <item.icon className="w-16 h-16 text-[var(--brass)] mb-4 group-hover:text-[var(--neon-teal)] transition-colors gear-rotate" />
              <h3 className="font-serif text-xl font-bold text-[var(--brass)] mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
