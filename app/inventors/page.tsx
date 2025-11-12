import Link from "next/link"
import { ArrowLeft, Zap, Cog, Flag as Flask, Compass } from "lucide-react"

const team = [
  {
    name: "Dr. Mortimer Ashcroft",
    title: "Chief Temporal Engineer",
    specialization: "Quantum Mechanics & Victorian Aesthetics",
    bio: "Bridging centuries with brass and circuitry. Dr. Ashcroft discovered the Voltera manuscripts in 2075 and has dedicated his life to realizing the Professor's vision.",
    image: "/victorian-era-engineer-with-goggles-sepia-engravin.jpg",
    icon: Cog,
  },
  {
    name: "Lady Octavia Voltaire",
    title: "Master Artificer",
    specialization: "Ornamental Engineering & Holographics",
    bio: "Every gear tells a story. Lady Voltaire ensures that beauty and function are inseparable in every VolteraGear creation.",
    image: "/victorian-era-woman-inventor-sepia-engraving-style.jpg",
    icon: Zap,
  },
  {
    name: "Professor Cornelius Gearwright",
    title: "Director of Innovation",
    specialization: "Steam Systems & Neural Networks",
    bio: "Where steam meets synapse. Professor Gearwright pioneered the integration of Victorian power systems with modern computing.",
    image: "/victorian-era-professor-with-beard-sepia-engraving.jpg",
    icon: Flask,
  },
  {
    name: "Captain Isadora Chronos",
    title: "Temporal Navigator",
    specialization: "Time-Space Calibration",
    bio: "Charting the unknown. Captain Chronos tests every device across multiple timelines to ensure perfect synchronization.",
    image: "/victorian-era-female-captain-sepia-engraving-style.jpg",
    icon: Compass,
  },
]

export default function InventorsPage() {
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

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-7xl text-brass mb-4">The Inventors</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the brilliant minds who forge the future from the blueprints of the past
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, idx) => {
              const Icon = member.icon
              return (
                <div
                  key={idx}
                  className="group bg-charcoal/50 border border-brass/30 rounded-lg overflow-hidden hover:border-neon-teal/50 transition-all"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover sepia"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-brass/20 border border-brass rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-brass" />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl text-brass">{member.name}</h3>
                          <p className="text-copper text-sm">{member.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="inline-block bg-neon-teal/20 text-neon-teal px-3 py-1 rounded text-xs font-semibold mb-3">
                      {member.specialization}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 bg-gradient-to-r from-brass/10 to-neon-teal/10 border border-brass/30 rounded-lg p-8 text-center">
            <h2 className="font-display text-3xl text-brass mb-4">Join Our Workshop</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We seek individuals who share our passion for temporal innovation and Victorian elegance. If you possess
              expertise in quantum mechanics, mechanical engineering, or aesthetic design, we invite you to submit your
              portfolio.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brass hover:bg-neon-teal text-charcoal font-semibold px-8 py-3 rounded transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
