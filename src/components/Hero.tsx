"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #C4A76B 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #C4A76B 0%, transparent 40%)`,
        }}
      />

      {/* Staggered text reveal */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.p
          className="text-gold tracking-[0.3em] uppercase text-xs mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Professional Event Host
        </motion.p>

        <motion.span
          className="divider-gold"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        <motion.h1
          className="font-display text-5xl md:text-7xl text-ivory leading-tight mt-6 mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Host Nellie
        </motion.h1>

        <motion.p
          className="text-cream/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Weddings, corporate galas, birthdays &amp; beyond —<br />
          every event deserves a host who makes it{" "}
          <em className="text-gold not-italic">unforgettable</em>.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.span
          className="w-px h-10 bg-cream/20 block origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        />
      </motion.div>
    </section>
  );
}
