import { Users } from "lucide-react"

export function AboutInventors() {
  const team = [
    { name: "Dr. Victoria Brass", role: "Chief Inventor", specialty: "Mechanical Engineering" },
    { name: "Nikola Voltaire", role: "Energy Specialist", specialty: "Quantum Physics" },
    { name: "Ada Clockwork", role: "Design Master", specialty: "Victorian Aesthetics" },
  ]

  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center text-[var(--brass)] mb-16 text-balance">
          About the Inventors
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="group text-center border-2 border-[var(--brass)] bg-background p-8 hover:border-[var(--neon-teal)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Digital backlight effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-teal)]/0 via-[var(--neon-teal)]/0 to-[var(--electric-purple)]/0 group-hover:via-[var(--neon-teal)]/10 group-hover:to-[var(--electric-purple)]/10 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[var(--brass)] bg-muted/30 flex items-center justify-center group-hover:border-[var(--neon-teal)] transition-colors">
                  <Users className="w-16 h-16 text-[var(--brass)] group-hover:text-[var(--neon-teal)] transition-colors" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[var(--brass)] mb-2">{member.name}</h3>

                <p className="text-[var(--neon-teal)] font-medium mb-3">{member.role}</p>

                <p className="text-sm text-foreground/60">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
