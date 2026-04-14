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

export default function Clients() {
  const [current, setCurrent] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  // Measure how wide each logo card should be (container / visible count)
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

  const next = useCallback(
    () => setCurrent((c) => Math.min(c + 1, TOTAL - 1)),
    []
  );
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1 >= TOTAL ? 0 : c + 1));
    }, 3500);
    return () => clearInterval(t);
  }, []);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
  };

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
        {/* Track */}
        <div
          ref={containerRef}
          className="overflow-hidden px-0"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: itemWidth ? `translateX(-${current * itemWidth}px)` : "none",
            }}
          >
            {logos.map((logo) => (
              <div
                key={logo.alt}
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
          {/* Prev */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            &#8592;
          </button>

          {/* Dots — one per logo */}
          <div className="flex gap-1.5">
            {logos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to logo ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-gold w-5 h-2"
                    : "bg-white/20 hover:bg-white/40 w-2 h-2"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={current === TOTAL - 1}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
