"use client"

import { Card } from "@/components/ui/card"
import { Battery, Plug, Zap } from "lucide-react"

export function FeaturedProducts() {
  const products = [
    {
      icon: Plug,
      name: "GaN Charger Pro",
      description: "Multi-port power station with Victorian brass accents",
      glow: "neon-teal",
    },
    {
      icon: Battery,
      name: "Power Cell X",
      description: "Portable energy reservoir in steampunk casing",
      glow: "electric-purple",
    },
    {
      icon: Zap,
      name: "Tesla Adapter",
      description: "Universal power converter with holographic display",
      glow: "brass",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center text-[var(--brass)] mb-16 text-balance">
          Featured Power Devices
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group relative bg-card border-2 border-[var(--brass)] p-8 hover:border-[var(--neon-teal)] transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-[var(--neon-teal)]/30"
            >
              {/* Energy field effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-teal)]/0 to-[var(--electric-purple)]/0 group-hover:from-[var(--neon-teal)]/10 group-hover:to-[var(--electric-purple)]/10 transition-all duration-500" />

              <div className="relative z-10">
                <div className="mb-6 relative inline-block">
                  <product.icon className="w-20 h-20 text-[var(--brass)] group-hover:text-[var(--neon-teal)] transition-colors duration-300" />
                  <div className="absolute -inset-4 bg-[var(--neon-teal)]/0 group-hover:bg-[var(--neon-teal)]/20 rounded-full blur-xl transition-all duration-500" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[var(--brass)] mb-4 group-hover:text-[var(--neon-teal)] transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="text-foreground/70 leading-relaxed">{product.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
