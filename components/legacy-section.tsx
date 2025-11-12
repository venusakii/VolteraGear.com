import { Compass, Zap } from "lucide-react"

export function LegacySection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[var(--brass)] mb-6 text-balance">
            Our Legacy
          </h2>
          <p className="text-2xl text-[var(--neon-teal)] font-medium">Where Steam Meets Silicon</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="border-4 border-[var(--brass)] bg-card p-8 relative overflow-hidden">
              {/* Blueprint style lines */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-px bg-[var(--neon-teal)]" />
                <div className="absolute top-0 left-0 w-px h-full bg-[var(--neon-teal)]" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-[var(--neon-teal)]" />
                <div className="absolute top-0 right-0 w-px h-full bg-[var(--neon-teal)]" />
              </div>

              <Compass className="w-32 h-32 text-[var(--brass)] mx-auto mb-6 gear-rotate-reverse" />

              <h3 className="font-serif text-2xl font-bold text-[var(--brass)] mb-4 text-center">
                Victorian Precision
              </h3>
              <p className="text-foreground/80 leading-relaxed text-center">
                Craftsmanship and attention to detail from the age of mechanical marvels
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="border-4 border-[var(--neon-teal)] bg-card p-8 relative overflow-hidden">
              {/* Energy diagram */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-0 w-full h-px bg-[var(--electric-purple)] energy-flow" />
                <div className="absolute top-1/2 left-1/2 w-px h-full bg-[var(--electric-purple)]" />
              </div>

              <Zap className="w-32 h-32 text-[var(--neon-teal)] mx-auto mb-6 neon-glow" />

              <h3 className="font-serif text-2xl font-bold text-[var(--neon-teal)] mb-4 text-center">
                Future Innovation
              </h3>
              <p className="text-foreground/80 leading-relaxed text-center">
                Cutting-edge GaN technology and power delivery from tomorrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
