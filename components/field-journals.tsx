import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function FieldJournals() {
  const reviews = [
    { name: "Eliza V.", review: "Extraordinary craftsmanship meets modern efficiency. A true marvel!", rating: 5 },
    {
      name: "Marcus Ferro",
      review: "The brass detailing is exquisite. Charges faster than anything I've owned.",
      rating: 5,
    },
    { name: "Nora Quinn", review: "Like owning a piece of history that powers the future. Brilliant!", rating: 5 },
    { name: "Leo Glass", review: "The perfect fusion of Victorian aesthetics and cutting-edge technology.", rating: 5 },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center text-[var(--brass)] mb-16 text-balance">
          Field Journals
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <Card
              key={i}
              className="group border-4 border-[var(--dark-copper)] bg-card p-6 hover:border-[var(--neon-teal)] transition-all duration-300 relative overflow-hidden hover:shadow-xl hover:shadow-[var(--neon-teal)]/20"
            >
              {/* Glowing frame effect */}
              <div className="absolute inset-0 bg-[var(--neon-teal)]/0 group-hover:bg-[var(--neon-teal)]/5 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-muted/50 mx-auto mb-4 border-2 border-[var(--brass)] flex items-center justify-center">
                  <span className="text-[var(--brass)] text-2xl font-serif font-bold">{review.name.charAt(0)}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[var(--brass)] text-center mb-3">{review.name}</h3>

                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--neon-teal)] text-[var(--neon-teal)]" />
                  ))}
                </div>

                <p className="text-sm text-foreground/70 text-center leading-relaxed">"{review.review}"</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
