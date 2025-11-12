"use client"

import { Button } from "@/components/ui/button"
import { Ear as Gear, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gears */}
      <div className="absolute inset-0 opacity-10">
        <Gear className="absolute top-20 left-10 w-32 h-32 text-[var(--brass)] gear-rotate" />
        <Gear className="absolute top-40 right-20 w-24 h-24 text-[var(--dark-copper)] gear-rotate-reverse" />
        <Gear className="absolute bottom-32 left-1/4 w-40 h-40 text-[var(--brass)] gear-rotate" />
        <Gear className="absolute bottom-20 right-1/3 w-28 h-28 text-[var(--dark-copper)] gear-rotate-reverse" />
      </div>

      {/* Neon tube effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[var(--neon-teal)] to-transparent energy-flow" />
        <div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[var(--electric-purple)] to-transparent energy-flow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 relative inline-block">
          <Zap className="absolute -top-6 -left-6 w-12 h-12 text-[var(--neon-teal)] neon-glow" />
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-[var(--brass)] mb-2 tracking-wider">VOLTERA</h1>
          <div className="flex items-center justify-center gap-3">
            <Gear className="w-8 h-8 text-[var(--brass)] gear-rotate" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--dark-copper)]">GEAR</h2>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-2xl mx-auto leading-relaxed text-balance">
          Where Steam Meets Silicon
        </p>

        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          A time-travel laboratory where the energy of the past powers the technology of the future
        </p>

        <Link href="/products">
          <Button
            size="lg"
            className="bg-[var(--brass)] hover:bg-[var(--dark-copper)] text-background font-semibold text-lg px-8 py-6 rounded-sm border-2 border-[var(--dark-copper)] shadow-lg hover:shadow-[var(--neon-teal)]/50 transition-all duration-300"
          >
            <Gear className="mr-2 w-5 h-5 gear-rotate" />
            Enter the Workshop
          </Button>
        </Link>

        {/* Steam effects */}
        
      </div>
    </section>
  )
}
