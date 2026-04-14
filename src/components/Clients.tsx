"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

const logos = [
  { src: "/images/companies/asialink.png", alt: "Asialink Finance Corporation" },
  { src: "/images/companies/smdc.png", alt: "SMDC" },
  { src: "/images/companies/san-miguel.png", alt: "San Miguel Foods" },
  { src: "/images/companies/dmci.png", alt: "DMCI Holdings" },
  { src: "/images/companies/rebisco.png", alt: "Rebisco" },
  { src: "/images/companies/bingo-plus.png", alt: "Bingo Plus" },
  { src: "/images/companies/sotogrande.png", alt: "SotoGrande Hotels and Resorts" },
  { src: "/images/companies/fibercom.png", alt: "Fibercom Telecom Phils." },
  { src: "/images/companies/data-lake.png", alt: "Data Lake" },
  { src: "/images/companies/dentacare.png", alt: "DentaCare Dental Clinic" },
  { src: "/images/companies/pacific-plaza.png", alt: "Pacific Plaza Towers" },
];

// Group logos into pages of 4
const ITEMS_PER_PAGE = 4;
const pages: typeof logos[] = [];
for (let i = 0; i < logos.length; i += ITEMS_PER_PAGE) {
  pages.push(logos.slice(i, i + ITEMS_PER_PAGE));
}
const TOTAL_PAGES = pages.length;

export default function Clients() {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);

  const next = useCallback(
    () => setPage((p) => (p + 1) % TOTAL_PAGES),
    []
  );
  const prev = () => setPage((p) => (p - 1 + TOTAL_PAGES) % TOTAL_PAGES);

  // Auto-advance every 3.5s, pauses on hover/touch
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [paused, next]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
  };

  return (
    <section id="clients" style={{ background: "#111111" }}>
      {/* Split: photo + heading */}
      <div className="flex flex-col md:flex-row min-h-[320px]">
        <div className="relative w-full md:w-2/5 min-h-[220px] md:min-h-0">
          <Image
            src="/images/portfolio/sample2.png"
            alt="Host Nellie speaking at a corporate event"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 40vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="w-full md:w-3/5 flex flex-col justify-center px-8 py-10 md:px-14">
          <p className="text-gold tracking-[0.25em] uppercase text-xs mb-3">
            Trusted By
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory leading-tight mb-4">
            Companies &amp; Brands
          </h2>
          <span className="block w-10 h-px bg-gold mb-4" />
          <p className="text-cream/50 text-sm leading-relaxed max-w-md">
            From corporate giants to beloved local brands — Nellie has hosted
            events for some of the Philippines&apos; most recognisable names.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="border-t border-white/10 px-6 md:px-14 pt-8 pb-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Track — slides between pages */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {pages.map((pageLogos, pageIdx) => (
              <div
                key={pageIdx}
                className="w-full shrink-0 grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {pageLogos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="bg-white rounded-sm flex items-center justify-center p-4 h-20"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                        sizes="200px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-7">
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-8 h-8 flex items-center justify-center border border-white/20 text-white/50 hover:border-gold hover:text-gold transition-colors"
          >
            &#8592;
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === page ? "bg-gold w-6" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next"
            className="w-8 h-8 flex items-center justify-center border border-white/20 text-white/50 hover:border-gold hover:text-gold transition-colors"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
