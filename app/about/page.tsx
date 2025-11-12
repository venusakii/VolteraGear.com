import { ArrowLeft, Zap, Award, Users, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-brass/20">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-brass hover:text-neon-teal">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-brass mb-6">About VolteraGear</h1>
            <p className="text-xl text-brass/80 leading-relaxed">
              Where Victorian elegance meets cybernetic innovation in the art of power delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 border-b border-brass/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-serif text-4xl font-bold text-brass mb-6">Our Story</h2>
                <p className="text-brass/70 leading-relaxed mb-4">
                  Founded in the convergence of two eras, VolteraGear emerged from a vision to blend the timeless
                  craftsmanship of the Victorian age with the cutting-edge technology of tomorrow.
                </p>
                <p className="text-brass/70 leading-relaxed">
                  Our founders, a collective of temporal engineers and artisan craftspeople, discovered that the
                  principles of steam-age precision could elevate modern charging technology to unprecedented levels of
                  reliability and beauty.
                </p>
              </div>
              <div className="relative h-64 rounded-lg border-2 border-brass/30 bg-gradient-to-br from-brass/5 to-copper/10 flex items-center justify-center">
                <Zap className="w-32 h-32 text-brass/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-brass mb-12 text-center">Our Values</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Award,
                  title: "Quality Craftsmanship",
                  description:
                    "Every product is meticulously engineered with Victorian attention to detail and modern precision.",
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  description:
                    "We push the boundaries of charging technology while respecting timeless design principles.",
                },
                {
                  icon: Users,
                  title: "Customer First",
                  description:
                    "Your satisfaction is our mission. We provide white-glove service from purchase to support.",
                },
                {
                  icon: Globe,
                  title: "Sustainability",
                  description: "Built to last generations, our products reduce waste through superior durability.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border-2 border-brass/30 bg-gradient-to-br from-brass/5 to-transparent hover:border-neon-teal/50 transition-all duration-300 group"
                >
                  <value.icon className="w-12 h-12 text-brass mb-4 group-hover:text-neon-teal transition-colors" />
                  <h3 className="font-serif text-2xl font-bold text-brass mb-3">{value.title}</h3>
                  <p className="text-brass/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
