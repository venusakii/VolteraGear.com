import Link from "next/link"
import { ArrowLeft, BookOpen, Star } from "lucide-react"

const reviews = [
  {
    author: "Dr. Eleanor Blackwood",
    title: "Temporal Archaeologist",
    date: "15th October, 2087",
    rating: 5,
    product: "ChronoScope MK-III",
    content:
      "Absolutely magnificent craftsmanship! The brass housing feels substantial in one's hands, whilst the quantum optics reveal temporal anomalies with unprecedented clarity. Professor Voltera would be proud of this modern interpretation.",
    image: "/victorian-era-woman-portrait-sepia.jpg",
  },
  {
    author: "Captain Reginald Steele",
    title: "Airship Navigator",
    date: "3rd November, 2087",
    rating: 5,
    product: "Temporal Compass",
    content:
      "During my voyage through the Temporal Straits, this compass proved invaluable. The mechanical precision combined with quantum tracking kept my vessel on course through three separate time zones. Essential equipment for any serious chrononaut.",
    image: "/victorian-era-man-with-mustache-portrait-sepia.jpg",
  },
  {
    author: "Miss Arabella Cogsworth",
    title: "Inventor & Socialite",
    date: "22nd September, 2087",
    rating: 4,
    product: "Aetheric Communicator",
    content:
      "The aesthetic is simply divine - perfectly complements my laboratory décor. Communication quality across temporal boundaries is excellent, though I do wish the brass patina developed more quickly for that authentic aged appearance.",
    image: "/victorian-era-elegant-woman-portrait-sepia.jpg",
  },
  {
    author: "Professor Nathaniel Gearhart",
    title: "Mechanical Engineer",
    date: "8th December, 2087",
    rating: 5,
    product: "Gear-Heart Processor",
    content:
      "A marvel of engineering! Watching the brass gears synchronize with quantum processors is mesmerizing. Computing power wrapped in Victorian elegance - exactly what my research laboratory required.",
    image: "/victorian-era-professor-portrait-sepia.jpg",
  },
]

export default function ChroniclesPage() {
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
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <BookOpen className="w-16 h-16 text-brass" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-brass mb-4">Field Chronicles</h1>
            <p className="text-muted-foreground text-lg">
              Testimonials from esteemed explorers, inventors, and temporal travelers
            </p>
          </div>

          <div className="space-y-8">
            {reviews.map((review, idx) => (
              <article
                key={idx}
                className="bg-charcoal/50 border border-brass/30 rounded-lg p-8 hover:border-neon-teal/50 transition-all"
              >
                <div className="flex items-start gap-6 mb-6">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.author}
                    className="w-20 h-20 rounded-full border-2 border-brass/50 sepia"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-brass mb-1">{review.author}</h3>
                    <p className="text-copper text-sm mb-2">{review.title}</p>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brass text-brass" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-xs">{review.date}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-brass/20 text-brass px-3 py-1 rounded text-sm font-semibold">
                    {review.product}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed italic">"{review.content}"</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
