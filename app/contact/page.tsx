"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Send, MapPin, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

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
            <h1 className="font-display text-5xl md:text-7xl text-brass mb-4">Contact the Workshop</h1>
            <p className="text-muted-foreground text-lg">Send us a message through time and space</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-charcoal/50 border border-brass/30 rounded-lg p-6 text-center hover:border-neon-teal/50 transition-all">
              <MapPin className="w-8 h-8 text-brass mx-auto mb-3" />
              <h3 className="font-display text-xl text-brass mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">
                47 Temporal Lane
                <br />
                Neo-Victorian District
                <br />
                London, 2087
              </p>
            </div>

            <div className="bg-charcoal/50 border border-brass/30 rounded-lg p-6 text-center hover:border-neon-teal/50 transition-all">
              <Mail className="w-8 h-8 text-brass mx-auto mb-3" />
              <h3 className="font-display text-xl text-brass mb-2">Aetheric Post</h3>
              <p className="text-muted-foreground text-sm">
                contact@volteragear.com
                <br />
                support@volteragear.com
                <br />
                orders@volteragear.com
              </p>
            </div>

            <div className="bg-charcoal/50 border border-brass/30 rounded-lg p-6 text-center hover:border-neon-teal/50 transition-all">
              <Clock className="w-8 h-8 text-brass mx-auto mb-3" />
              <h3 className="font-display text-xl text-brass mb-2">Workshop Hours</h3>
              <p className="text-muted-foreground text-sm">
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM GMT
                <br />
                (All Timelines Welcome)
              </p>
            </div>
          </div>

          <div className="bg-charcoal/50 border border-brass/30 rounded-lg p-8">
            <h2 className="font-display text-3xl text-brass mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-brass mb-2 text-sm font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-charcoal border border-brass/30 rounded px-4 py-3 text-foreground focus:border-neon-teal focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-brass mb-2 text-sm font-semibold">
                    Aetheric Address (Email)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-charcoal border border-brass/30 rounded px-4 py-3 text-foreground focus:border-neon-teal focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-brass mb-2 text-sm font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-charcoal border border-brass/30 rounded px-4 py-3 text-foreground focus:border-neon-teal focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-brass mb-2 text-sm font-semibold">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-charcoal border border-brass/30 rounded px-4 py-3 text-foreground focus:border-neon-teal focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto bg-brass hover:bg-neon-teal text-charcoal font-semibold px-8 py-6 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
