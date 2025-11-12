import { ArrowLeft, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "What makes VolteraGear products unique?",
      answer:
        "Our products combine Victorian-era craftsmanship with cutting-edge technology. Each piece features brass and copper accents, intricate gear mechanisms, and modern fast-charging capabilities. They're designed to be both functional charging solutions and conversation-starting works of art.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 5-7 business days and is free on orders over $50. Express shipping (2-3 days) and Temporal Express next-day delivery are also available. International orders typically arrive within 7-21 business days depending on location.",
    },
    {
      question: "Are your products compatible with all devices?",
      answer:
        "Yes! Our chargers are compatible with all USB-C and Lightning devices, including iPhones, Android phones, tablets, and laptops. Each product clearly lists its compatibility on the product page.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on all products. Items must be in original condition with all packaging. Simply contact our returns team at returns@volteragear.com to initiate the process. Refunds are processed within 5-7 business days of receiving your return.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location. Please note that customers are responsible for any customs fees or import duties.",
    },
    {
      question: "Are the products covered by warranty?",
      answer:
        "All VolteraGear products come with a 1-year limited warranty covering manufacturing defects. Extended warranty options are available at checkout for additional peace of mind.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or directly through the carrier's website.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer:
        "Orders can be cancelled or modified within 2 hours of placement. After that, the order enters processing and cannot be changed. Please contact customer service immediately if you need to make changes.",
    },
    {
      question: "Do you offer gift wrapping?",
      answer:
        "Yes! We offer premium Victorian-style gift wrapping for $9.99. Each gift-wrapped item includes a brass wax seal, decorative ribbon, and a handwritten-style gift card. Select this option at checkout.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team at hello@volteragear.com or through our contact form. We typically respond within 24 hours during business days (Mon-Fri, 9AM-6PM GMT).",
    },
  ]

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
              <HelpCircle className="w-12 h-12 text-brass" />
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-brass">FAQ</h1>
            </div>
            <p className="text-lg text-brass/70">Frequently Asked Questions</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-brass/30 rounded-lg px-6 bg-gradient-to-r from-brass/5 to-transparent hover:border-neon-teal/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-serif text-xl text-brass pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-brass/70 leading-relaxed pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-6 rounded-lg border-2 border-brass/30 bg-gradient-to-br from-brass/5 to-transparent text-center">
              <h3 className="font-serif text-2xl font-bold text-brass mb-3">Still have questions?</h3>
              <p className="text-brass/70 mb-6">Our customer support team is here to help you with any inquiries.</p>
              <Link href="/contact">
                <Button className="bg-brass hover:bg-brass/90 text-background">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
