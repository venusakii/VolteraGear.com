export function VideoSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center text-[var(--brass)] mb-16 text-balance">
          The Spark of Innovation
        </h2>

        <div className="relative border-8 border-[var(--dark-copper)] bg-card p-4 shadow-2xl shadow-[var(--neon-teal)]/20">
          {/* Decorative corner pieces */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[var(--brass)]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[var(--brass)]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[var(--brass)]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[var(--brass)]" />

          {/* Video thumbnail with play button overlay */}
          <div className="aspect-video bg-background/50 relative overflow-hidden group cursor-pointer">
            <img
              src="/steampunk-laboratory-workshop-with-brass-gears-and-n.jpg"
              alt="VolteraGear Innovation Workshop"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
              
            </div>
          </div>

          {/* Energy indicators */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            <div className="w-3 h-3 rounded-full bg-[var(--neon-teal)] neon-glow" />
            <div
              className="w-3 h-3 rounded-full bg-[var(--electric-purple)] neon-glow"
              style={{ animationDelay: "0.5s" }}
            />
            <div className="w-3 h-3 rounded-full bg-[var(--brass)] neon-glow" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  )
}
