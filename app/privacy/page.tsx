import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
              <Shield className="w-12 h-12 text-brass" />
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-brass">Privacy Policy</h1>
            </div>
            <p className="text-lg text-brass/70">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass flex items-center gap-3">
                <Lock className="w-8 h-8" />
                Information We Collect
              </h2>
              <p className="text-brass/70 leading-relaxed">
                At VolteraGear, we collect information necessary to provide you with exceptional service. This includes
                your name, email address, shipping address, and payment information when you make a purchase. We also
                collect browsing data to improve your experience on our site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass flex items-center gap-3">
                <Eye className="w-8 h-8" />
                How We Use Your Information
              </h2>
              <p className="text-brass/70 leading-relaxed">
                Your information is used to process orders, communicate about your purchases, improve our products and
                services, and send you marketing communications (with your consent). We never sell your personal
                information to third parties.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass flex items-center gap-3">
                <Shield className="w-8 h-8" />
                Data Protection
              </h2>
              <p className="text-brass/70 leading-relaxed">
                We employ industry-standard security measures to protect your data, including SSL encryption for all
                transactions and secure storage of personal information. Our systems are regularly audited for security
                vulnerabilities.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-brass flex items-center gap-3">
                <FileText className="w-8 h-8" />
                Your Rights
              </h2>
              <p className="text-brass/70 leading-relaxed">
                You have the right to access, correct, or delete your personal information at any time. You may also opt
                out of marketing communications. To exercise these rights, please contact us at privacy@volteragear.com.
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-brass/30 bg-gradient-to-br from-brass/5 to-transparent">
              <p className="text-brass/70 leading-relaxed">
                <strong className="text-brass">Questions about our Privacy Policy?</strong> Contact our privacy team at{" "}
                <a href="mailto:privacy@volteragear.com" className="text-neon-teal hover:underline">
                  privacy@volteragear.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
