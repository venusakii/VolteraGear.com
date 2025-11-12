import { ArrowLeft, RotateCcw, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ReturnsPage() {
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
              <RotateCcw className="w-12 h-12 text-brass" />
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-brass">Returns & Refunds</h1>
            </div>
            <p className="text-lg text-brass/70">Your satisfaction is our guarantee</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass">30-Day Return Policy</h2>
              <p className="text-brass/70 leading-relaxed">
                We stand behind the quality of our products. If you're not completely satisfied with your purchase, you
                may return it within 30 days of delivery for a full refund or exchange. Items must be in original
                condition with all packaging and accessories.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass flex items-center gap-3">
                <CheckCircle className="w-8 h-8" />
                Eligible for Return
              </h2>
              <ul className="space-y-3">
                {[
                  "Unopened products in original packaging",
                  "Products with manufacturing defects",
                  "Items damaged during shipping",
                  "Wrong item received",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-brass/70">
                    <CheckCircle className="w-5 h-5 text-neon-teal flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass flex items-center gap-3">
                <XCircle className="w-8 h-8" />
                Not Eligible for Return
              </h2>
              <ul className="space-y-3">
                {[
                  "Products used or showing signs of wear",
                  "Items without original packaging or accessories",
                  "Products damaged due to misuse or neglect",
                  "Returns initiated after 30 days",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-brass/70">
                    <XCircle className="w-5 h-5 text-copper/70 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass">Return Process</h2>
              <ol className="space-y-4">
                {[
                  "Contact our support team at returns@volteragear.com to initiate a return",
                  "Receive your return authorization number and shipping label",
                  "Pack the item securely with all original materials",
                  "Ship the package using the provided label",
                  "Refund processed within 5-7 business days of receiving your return",
                ].map((step, index) => (
                  <li key={index} className="flex gap-4 text-brass/70">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-brass/30 flex items-center justify-center text-brass font-bold">
                      {index + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-6 rounded-lg border-2 border-neon-teal/30 bg-gradient-to-br from-neon-teal/5 to-transparent flex gap-4">
              <AlertTriangle className="w-6 h-6 text-neon-teal flex-shrink-0 mt-1" />
              <div>
                <p className="text-brass font-bold mb-2">Warranty Information</p>
                <p className="text-brass/70 leading-relaxed">
                  All VolteraGear products come with a 1-year limited warranty covering manufacturing defects. Extended
                  warranty options available at checkout.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-brass/30 bg-gradient-to-br from-brass/5 to-transparent">
              <p className="text-brass/70 leading-relaxed">
                <strong className="text-brass">Need help with a return?</strong> Our customer service team is here to
                assist at{" "}
                <a href="mailto:returns@volteragear.com" className="text-neon-teal hover:underline">
                  returns@volteragear.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
