import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cog } from "lucide-react"

export function ChronoShop() {
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
  ]

  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center text-[var(--brass)] mb-16 text-balance">
          Chrono-Shop
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-charcoal/50 border border-brass/30 rounded-lg overflow-hidden hover:border-neon-teal/50 transition-all duration-300"
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
                  
                  <Link href={`/product/${product.slug}`}>
                    <Button className="bg-brass hover:bg-neon-teal text-charcoal font-semibold">View Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
