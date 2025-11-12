"use client"

import { Zap, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-background to-background/95 border-t-2 border-brass/30">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-teal to-transparent opacity-50" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full border-2 border-brass flex items-center justify-center bg-gradient-to-br from-brass/10 to-copper/10">
                <Zap className="w-5 h-5 text-brass" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-brass">VOLTERA</h3>
                <p className="text-xs text-brass/60 tracking-[0.2em]">GEAR</p>
              </div>
            </div>
            <p className="text-sm text-brass/70 leading-relaxed">
              Where Victorian craftsmanship meets cybernetic innovation. Your trusted source for premium charging
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-brass font-bold mb-4 text-lg">Navigation</h4>
            <nav className="space-y-2">
              {[
                { label: "Legacy", href: "/legacy" },
                { label: "Products", href: "/products" },
                { label: "Laboratory", href: "/lab" },
                { label: "Chronicles", href: "/chronicles" },
                { label: "Inventors", href: "/inventors" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-brass/70 hover:text-neon-teal transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-serif text-brass font-bold mb-4 text-lg">Information</h4>
            <nav className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Shipping Info", href: "/shipping" },
                { label: "Returns", href: "/returns" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-brass/70 hover:text-neon-teal transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-brass font-bold mb-4 text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-brass/70">
                <MapPin className="w-4 h-4 mt-0.5 text-neon-teal flex-shrink-0" />
                <span>1875 Steam Ave, Neo-London, VT 2250</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-brass/70">
                <Mail className="w-4 h-4 mt-0.5 text-neon-teal flex-shrink-0" />
                <a href="mailto:hello@volteragear.com" className="hover:text-neon-teal transition-colors">
                  hello@volteragear.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-brass/70">
                <Clock className="w-4 h-4 mt-0.5 text-neon-teal flex-shrink-0" />
                <span>Mon-Fri: 9AM - 6PM GMT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brass/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-brass/60">© {currentYear} VolteraGear.com. All rights reserved.</p>
              <p className="text-xs text-brass/50 mt-1">
                Member of the Amazon Associates Program. As an Amazon Partner, we earn from qualifying purchases.
              </p>
            </div>

            <div className="flex gap-4">
              {["Twitter", "Instagram", "YouTube", "LinkedIn"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full border border-brass/30 flex items-center justify-center text-brass/60 hover:text-neon-teal hover:border-neon-teal hover:shadow-lg hover:shadow-neon-teal/20 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs">{social[0]}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brass to-transparent opacity-30" />
    </footer>
  )
}
