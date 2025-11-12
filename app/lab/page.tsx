import Link from "next/link"
import { ArrowLeft, Flag as Flask, Zap, Sparkles } from "lucide-react"

const experiments = [
  {
    title: "Quantum Gear Fusion",
    status: "Active",
    description: "Merging Victorian mechanical engineering with quantum entanglement for unprecedented precision.",
    progress: 78,
  },
  {
    title: "Aetheric Energy Harvesting",
    status: "Testing",
    description: "Capturing ambient temporal energy using brass resonators and crystal matrices.",
    progress: 45,
  },
  {
    title: "Chrono-Lock Security",
    status: "Complete",
    description: "Time-based encryption using mechanical combination locks and quantum algorithms.",
    progress: 100,
  },
  {
    title: "Steam-Neural Interface",
    status: "Research",
    description: "Direct brain-to-mechanism connection preserving Victorian aesthetic principles.",
    progress: 23,
  },
]

export default function LabPage() {
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

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-7xl text-brass mb-4">The Voltera Laboratory</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Where Victorian ingenuity meets quantum innovation. Witness our experiments in temporal technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-brass/20 to-transparent border border-brass/40 rounded-lg p-8 text-center">
              <Flask className="w-12 h-12 text-brass mx-auto mb-4" />
              <div className="font-display text-4xl text-brass mb-2">47</div>
              <div className="text-muted-foreground">Active Experiments</div>
            </div>

            <div className="bg-gradient-to-br from-neon-teal/20 to-transparent border border-neon-teal/40 rounded-lg p-8 text-center">
              <Zap className="w-12 h-12 text-neon-teal mx-auto mb-4" />
              <div className="font-display text-4xl text-neon-teal mb-2">23</div>
              <div className="text-muted-foreground">Breakthroughs Achieved</div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-3xl text-brass mb-6">Current Experiments</h2>

            {experiments.map((exp, idx) => (
              <div
                key={idx}
                className="bg-charcoal/50 border border-brass/30 rounded-lg p-6 hover:border-neon-teal/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-2xl text-brass mb-1">{exp.title}</h3>
                    <span
                      className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                        exp.status === "Complete"
                          ? "bg-neon-teal/20 text-neon-teal"
                          : exp.status === "Active"
                            ? "bg-brass/20 text-brass"
                            : "bg-purple/20 text-purple"
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>
                  <Sparkles className="w-6 h-6 text-brass" />
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-brass font-semibold">{exp.progress}%</span>
                  </div>
                  <div className="h-2 bg-charcoal rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brass to-neon-teal transition-all duration-500"
                      style={{ width: `${exp.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
