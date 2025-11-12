import { ArrowLeft, Package, Truck, Globe, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ShippingPage() {
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
              <Package className="w-12 h-12 text-brass" />
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-brass">Shipping Information</h1>
            </div>
            <p className="text-lg text-brass/70">Fast, secure delivery across time and space</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass flex items-center gap-3">
                <Truck className="w-8 h-8" />
                Shipping Methods
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-brass/30 bg-gradient-to-r from-brass/5 to-transparent">
                  <h3 className="font-bold text-brass mb-2">Standard Shipping (5-7 business days)</h3>
                  <p className="text-brass/70">Free on orders over $50 | $5.99 flat rate</p>
                </div>
                <div className="p-4 rounded-lg border border-brass/30 bg-gradient-to-r from-brass/5 to-transparent">
                  <h3 className="font-bold text-brass mb-2">Express Shipping (2-3 business days)</h3>
                  <p className="text-brass/70">$12.99 flat rate</p>
                </div>
                <div className="p-4 rounded-lg border border-neon-teal/30 bg-gradient-to-r from-neon-teal/5 to-transparent">
                  <h3 className="font-bold text-brass mb-2">Temporal Express (Next day delivery)</h3>
                  <p className="text-brass/70">$24.99 flat rate</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass flex items-center gap-3">
                <Globe className="w-8 h-8" />
                International Shipping
              </h2>
              <p className="text-brass/70 leading-relaxed">
                We ship to over 100 countries worldwide. International shipping times vary by location (7-21 business
                days). Customs fees and import duties are the responsibility of the recipient.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass flex items-center gap-3">
                <Clock className="w-8 h-8" />
                Processing Time
              </h2>
              <p className="text-brass/70 leading-relaxed">
                All orders are processed within 1-2 business days. Orders placed on weekends or holidays will be
                processed the next business day. You will receive a tracking number via email once your order ships.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass flex items-center gap-3">
                <Package className="w-8 h-8" />
                Packaging
              </h2>
              <p className="text-brass/70 leading-relaxed">
                Every VolteraGear product is carefully packaged in Victorian-inspired, eco-friendly materials designed
                to protect your purchase while minimizing environmental impact. Each package includes a brass wax seal
                and certification of authenticity.
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-brass/30 bg-gradient-to-br from-brass/5 to-transparent">
              <p className="text-brass/70 leading-relaxed">
                <strong className="text-brass">Questions about your shipment?</strong> Contact our logistics team at{" "}
                <a href="mailto:shipping@volteragear.com" className="text-neon-teal hover:underline">
                  shipping@volteragear.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
