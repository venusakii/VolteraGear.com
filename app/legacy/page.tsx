import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LegacyPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brass hover:text-neon-teal transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl text-brass mb-6 text-center">The Legacy of VOLTERA</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-charcoal/50 border border-brass/30 rounded-lg p-8 mb-8">
              <h2 className="font-display text-3xl text-brass mb-4">Est. 1887 - Reimagined 2087</h2>
              <p className="text-muted-foreground leading-relaxed">
                In the gaslit streets of Victorian London, Professor Aldous Voltera first conceived the impossible: a
                fusion of steam-powered mechanics and ethereal electricity. His workshop, hidden beneath the
                cobblestones of Whitechapel, became the birthplace of temporal technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-charcoal/30 border border-neon-teal/30 rounded-lg p-6">
                <h3 className="font-display text-2xl text-neon-teal mb-3">The First Era</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Brass gears met crystal oscillators. Steam engines powered electromagnetic fields. The Victorian
                  inventors laid the foundation for what would become VolteraGear.
                </p>
              </div>

              <div className="bg-charcoal/30 border border-purple/30 rounded-lg p-6">
                <h3 className="font-display text-2xl text-purple mb-3">The Quantum Leap</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Two centuries later, cybernetic archaeologists discovered Voltera's blueprints. Ancient wisdom merged
                  with neural networks, creating our signature aesthetic.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brass/10 to-neon-teal/10 border border-brass/20 rounded-lg p-8">
              <h3 className="font-display text-3xl text-brass mb-4 text-center">Our Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Every VolteraGear product is a bridge between eras. We believe the elegance of Victorian craftsmanship
                deserves the power of cyberpunk innovation. Brass casings house quantum processors. Ornate engravings
                conceal holographic displays. The past and future, unified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
