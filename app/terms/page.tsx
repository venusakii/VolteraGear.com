import { ArrowLeft, Scale, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-20 border-b border-brass/20">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-brass hover:text-neon-teal">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <Scale className="w-12 h-12 text-brass" />
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-brass">Terms of Service</h1>
            </div>
            <p className="text-lg text-brass/70">Effective date: January 2025</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass">1. Agreement to Terms</h2>
              <p className="text-brass/70 leading-relaxed">
                By accessing and using VolteraGear.com, you agree to be bound by these Terms of Service and all
                applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
                using this site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass">2. Product Information</h2>
              <p className="text-brass/70 leading-relaxed">
                We strive to provide accurate product descriptions and imagery. However, we do not warrant that product
                descriptions, colors, or other content are accurate, complete, or error-free. We reserve the right to
                correct any errors or inaccuracies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass">3. Pricing and Payment</h2>
              <p className="text-brass/70 leading-relaxed">
                All prices are in USD and subject to change without notice. We reserve the right to refuse or cancel any
                order for any reason. Payment is processed securely through trusted third-party payment processors.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass">4. Intellectual Property</h2>
              <p className="text-brass/70 leading-relaxed">
                All content on VolteraGear.com, including text, graphics, logos, and images, is the property of
                VolteraGear and protected by international copyright laws. Unauthorized use is strictly prohibited.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass">5. Limitation of Liability</h2>
              <p className="text-brass/70 leading-relaxed">
                VolteraGear shall not be liable for any indirect, incidental, or consequential damages arising from the
                use of our products or website. Our total liability shall not exceed the purchase price of the product
                in question.
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-brass/30 bg-gradient-to-br from-brass/5 to-transparent flex gap-4">
              <AlertCircle className="w-6 h-6 text-neon-teal flex-shrink-0 mt-1" />
              <div>
                <p className="text-brass/70 leading-relaxed">
                  <strong className="text-brass">Have questions about our terms?</strong> Contact our legal team at{" "}
                  <a href="mailto:legal@volteragear.com" className="text-neon-teal hover:underline">
                    legal@volteragear.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
