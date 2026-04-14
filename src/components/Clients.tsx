"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { SlideLeft, SlideRight } from "@/components/ui/Motion";

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

const TOTAL = logos.length;

// Triple the logos: [...logos, ...logos, ...logos]
// We start in the middle copy so we can slide left OR right seamlessly.
const extended = [...logos, ...logos, ...logos];

export default function Clients() {
  // Start at index TOTAL so the middle copy is shown first
  const [index, setIndex] = useState(TOTAL);
  const [animated, setAnimated] = useState(true);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  // Measure item width on mount and resize
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const visible = window.innerWidth < 640 ? 3 : 5;
      setItemWidth(containerRef.current.offsetWidth / visible);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => setIndex((i) => i - 1), []);

  // After each animated slide, check if we've drifted into a clone.
  // If so, silently snap back to the equivalent position in the middle copy.
  const onTransitionEnd = useCallback(() => {
    if (index >= TOTAL * 2) {
      setAnimated(false);
      setIndex(index - TOTAL);
    } else if (index < TOTAL) {
      setAnimated(false);
      setIndex(index + TOTAL);
    }
  }, [index]);

  // Re-enable the transition one frame after the silent snap
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  // Auto-advance every 3.5 s
  useEffect(() => {
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [next]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
  };

  // The dot that lights up is always relative to the middle copy
  const activeDot = ((index - TOTAL) % TOTAL + TOTAL) % TOTAL;

  return (
    <section id="clients" style={{ background: "#111111" }}>
      {/* Split: photo + heading */}
      <div className="flex flex-col md:flex-row min-h-[320px]">
        <SlideLeft className="relative w-full md:w-2/5 min-h-[220px] md:min-h-0">
          <Image
            src="/images/portfolio/sample2.png"
            alt="Host Nellie speaking at a corporate event"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 40vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/30" />
        </SlideLeft>

        <SlideRight delay={0.15} className="w-full md:w-3/5 flex flex-col justify-center px-8 py-10 md:px-14">
          <p className="text-gold tracking-[0.25em] uppercase text-xs mb-3">Trusted By</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory leading-tight mb-4">
            Companies &amp; Brands
          </h2>
          <span className="block w-10 h-px bg-gold mb-4" />
          <p className="text-cream/50 text-sm leading-relaxed max-w-md">
            From corporate giants to beloved local brands — Nellie has hosted
            events for some of the Philippines&apos; most recognisable names.
          </p>
        </SlideRight>
      </div>

      {/* Carousel */}
      <div className="border-t border-white/10 py-10">
        <div
          ref={containerRef}
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={animated ? "flex transition-transform duration-500 ease-in-out" : "flex"}
            style={{ transform: itemWidth ? `translateX(-${index * itemWidth}px)` : "none" }}
            onTransitionEnd={onTransitionEnd}
          >
            {extended.map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="shrink-0 px-3"
                style={{ width: itemWidth || "20%" }}
              >
                <div className="bg-white rounded-sm flex items-center justify-center p-4 h-20">
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5 mt-8 px-6">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-colors"
          >
            &#8592;
          </button>

          <div className="flex gap-1.5">
            {logos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(TOTAL + i)}
                aria-label={`Go to logo ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeDot ? "bg-gold w-5 h-2" : "bg-white/20 hover:bg-white/40 w-2 h-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-colors"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
