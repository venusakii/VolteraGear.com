import { HeroSection } from "@/components/hero-section"
import { LegacySection } from "@/components/legacy-section"
import { FeaturedProducts } from "@/components/featured-products"
import { VolteraLab } from "@/components/voltera-lab"
import { VideoSection } from "@/components/video-section"
import { ChronoShop } from "@/components/chrono-shop"
import { FieldJournals } from "@/components/field-journals"
import { AboutInventors } from "@/components/about-inventors"
import { ContactSection } from "@/components/contact-section"
import { CookieBanner } from "@/components/cookie-banner"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <LegacySection />
      <FeaturedProducts />
      <VolteraLab />
      <VideoSection />
      <ChronoShop />
      <FieldJournals />
      <AboutInventors />
      <ContactSection />
      <CookieBanner />
    </main>
  )
}
