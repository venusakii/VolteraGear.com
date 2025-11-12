"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Legacy", href: "/legacy" },
    { label: "Products", href: "/products" },
    { label: "Laboratory", href: "/lab" }, // Fixed path from /laboratory to /lab
    { label: "Chronicles", href: "/chronicles" }, // Fixed label and path from Chrono-Shop to Chronicles
    { label: "Inventors", href: "/inventors" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-brass/20 shadow-lg shadow-neon-teal/5"
          : "bg-transparent"
      }`}
    >
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brass to-transparent opacity-60" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-neon-teal/20 blur-xl rounded-full animate-pulse" />
              <div className="relative w-12 h-12 rounded-full border-2 border-brass flex items-center justify-center bg-gradient-to-br from-brass/10 to-copper/10 group-hover:border-neon-teal transition-colors duration-300">
                <Zap className="w-6 h-6 text-brass group-hover:text-neon-teal transition-colors duration-300" />
              </div>
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-brass tracking-wider group-hover:text-neon-teal transition-colors duration-300">
                VOLTERA
              </h1>
              <p className="text-xs text-brass/60 tracking-[0.3em] font-sans uppercase">Gear</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-brass/80 hover:text-neon-teal transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-neon-teal group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brass hover:text-neon-teal transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-brass/20">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-brass/80 hover:text-neon-teal hover:bg-brass/5 rounded-lg transition-all duration-300 border border-transparent hover:border-brass/20"
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="mt-4 bg-gradient-to-r from-brass to-copper text-background font-semibold hover:shadow-lg hover:shadow-brass/50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore Devices
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
