import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Dark overlay — preserves the drama of the awards night shot */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Subtle gold glow accents */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #C4A76B 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #C4A76B 0%, transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-gold tracking-[0.3em] uppercase text-xs mb-6">
          Professional Event Host
        </p>

        <span className="divider-gold" />

        <h1 className="font-display text-5xl md:text-7xl text-ivory leading-tight mt-6 mb-4">
          Host Nellie
        </h1>

        <p className="text-cream/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl mx-auto">
          Weddings, corporate galas, birthdays &amp; beyond —<br />
          every event deserves a host who makes it{" "}
          <em className="text-gold not-italic">unforgettable</em>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book"
            className="px-8 py-4 bg-gold text-ivory text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
          >
            Book Your Event
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-cream/40 text-cream text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
          >
            Meet Nellie
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span className="w-px h-10 bg-cream/20 block" />
      </div>
    </section>
  );
}
