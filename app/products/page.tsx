import Link from "next/link"
import { ArrowLeft, Cog } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Victorinox Chrono-Gauge",
    category: "Timepieces",
    price: "$495",
    image: "https://m.media-amazon.com/images/I/81Y0qX4e+yL._AC_SX679_.jpg",
    description: "Swiss chronograph blending Victorian brass aesthetics with modern precision engineering.",
    features: ["Swiss quartz movement", "Brass-accented steel case", "100m water resistance"],
    slug: "victorinox-chrono-gauge",
  },
  {
    id: 2,
    name: "Cardo Aether-Comm",
    category: "Communication",
    price: "$299",
    image: "https://m.media-amazon.com/images/I/51+7QKzkgSL._AC_SX679_.jpg",
    description: "Tesla-inspired helmet communicator with quantum-like mesh networking.",
    features: ["Bluetooth 5.2 mesh", "Noise-canceling mic", "13-hour battery"],
    slug: "cardo-aether-comm",
  },
  {
    id: 3,
    name: "Articulated Voltaic Gauntlets",
    category: "Wearables",
    price: "$89",
    image: "https://m.media-amazon.com/images/I/61JmFARdp+L._AC_SX679_.jpg",
    description: "Medieval articulated armor enhanced with brass electromagnetic reinforcements.",
    features: ["Full finger movement", "Brass overlays", "Leather straps"],
    slug: "articulated-voltaic-gauntlets",
  },
  {
    id: 4,
    name: "Samsung Gear Chrono-Sport",
    category: "Timepieces",
    price: "$229.99",
    image: "https://m.media-amazon.com/images/I/61Die3FiMLL._AC_SX679_.jpg",
    description: "Water-resistant smart chronometer with rotating bezel and Victorian gear styling.",
    features: ["50m swim-ready", "NFC payments", "Fitness coaching"],
    slug: "samsung-gear-chrono-sport",
  },
  {
    id: 5,
    name: "Rechargeable Lumina Torch",
    category: "Lighting",
    price: "$29.99",
    image: "https://m.media-amazon.com/images/I/61IAQUkoftL._AC_SX679_.jpg",
    description: "Storm-proof rechargeable lantern evoking Victorian gas-lamp brilliance.",
    features: ["2000 lumens", "USB power bank", "IPX7 waterproof"],
    slug: "rechargeable-lumina-torch",
  },
  {
    id: 6,
    name: "ArmArmour Temporal Compass",
    category: "Navigation",
    price: "$28.49",
    image: "https://m.media-amazon.com/images/I/81Kb82bTy1L._AC_SX679_.jpg",
    description: "Wrist-mounted luminous compass and thermometer in rugged brass-like armor.",
    features: ["Luminous dial", "–30°F thermometer", "Hinged shield"],
    slug: "armarmour-temporal-compass",
  },
  {
    id: 7,
    name: "Omega Constellation Chronometre",
    category: "Timepieces",
    price: "$4,550",
    image: "https://m.media-amazon.com/images/I/611Hm3EBxaL._AC_SY695_.jpg",
    description: "Automatic Master Chronometer tracking celestial movements with co-axial precision.",
    features: ["Co-Axial movement", "Automatic winding", "29mm elegance"],
    slug: "omega-constellation-chronometre",
  },
  {
    id: 8,
    name: "BCA Avalanche Beacon",
    category: "Navigation",
    price: "$349.95",
    image: "https://m.media-amazon.com/images/I/61UOMYVgvWL._AC_SX679_.jpg",
    description: "Digital transceiver guiding rescuers through frozen temporal avalanches.",
    features: ["Triple antenna", "Multiple burial mode", "Auto-revert transmit"],
    slug: "bca-avalanche-beacon",
  },
  {
    id: 9,
    name: "VR Night Vision Spectacles",
    category: "Wearables",
    price: "$269.99",
    image: "https://m.media-amazon.com/images/I/61ddH2Fur0L._AC_SX679_.jpg",
    description: "Head-mounted 3D night vision revealing 4K phantoms from Victorian spirit photography.",
    features: ["7-level IR", "4K video + 24MP", "6x digital zoom"],
    slug: "vr-night-vision-spectacles",
  },
]

export default function ProductsPage() {
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

        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-7xl text-brass mb-4">Chrono-Shop Collection</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our complete catalog of temporal technologies and Victorian-inspired innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group bg-charcoal/50 border border-brass/30 rounded-lg overflow-hidden hover:border-neon-teal/50 transition-all duration-300 block"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-brass/90 text-charcoal px-3 py-1 rounded text-sm font-semibold">
                  {product.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl text-brass mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.description}</p>

                <div className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Cog className="w-3 h-3 text-neon-teal" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-brass/20">
                  
                  <Button className="bg-brass hover:bg-neon-teal text-charcoal font-semibold pointer-events-none">
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
