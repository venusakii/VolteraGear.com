"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t-4 border-[var(--brass)] p-6 shadow-2xl shadow-black/50 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-12 h-12 border-2 border-[var(--brass)] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🍪</span>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            This website uses cookies to improve your experience and power our time-travel analytics. By continuing, you
            consent to our use of Victorian-era data collection methods.
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <Button
            onClick={() => setIsVisible(false)}
            className="bg-[var(--brass)] hover:bg-[var(--neon-teal)] text-background border border-[var(--dark-copper)]"
          >
            Accept
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsVisible(false)}
            className="border-[var(--brass)] text-[var(--brass)] hover:bg-[var(--brass)] hover:text-background"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
