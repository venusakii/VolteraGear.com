"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center text-[var(--brass)] mb-6 text-balance">
          Signal Transmission
        </h2>
        <p className="text-center text-foreground/70 mb-12 text-lg">Send us a message through time and space</p>

        <form className="space-y-6">
          <div className="relative group">
            <Input
              placeholder="Your Name"
              className="bg-card border-2 border-[var(--dark-copper)] focus:border-[var(--neon-teal)] text-foreground placeholder:text-foreground/40 h-12"
            />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--neon-teal)] group-focus-within:w-full transition-all duration-500" />
          </div>

          <div className="relative group">
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-card border-2 border-[var(--dark-copper)] focus:border-[var(--neon-teal)] text-foreground placeholder:text-foreground/40 h-12"
            />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--neon-teal)] group-focus-within:w-full transition-all duration-500" />
          </div>

          <div className="relative group">
            <Textarea
              placeholder="Your Message"
              rows={6}
              className="bg-card border-2 border-[var(--dark-copper)] focus:border-[var(--neon-teal)] text-foreground placeholder:text-foreground/40 resize-none"
            />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--neon-teal)] group-focus-within:w-full transition-all duration-500" />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[var(--brass)] hover:bg-[var(--neon-teal)] text-background font-semibold border-2 border-[var(--dark-copper)] hover:border-[var(--neon-teal)] transition-all duration-300 shadow-lg hover:shadow-[var(--neon-teal)]/50"
          >
            <Send className="mr-2 w-5 h-5" />
            Send Signal
          </Button>
        </form>
      </div>
    </section>
  )
}
