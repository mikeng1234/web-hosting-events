"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { SlideLeft, SlideRight } from "@/components/ui/Motion";

// Auto-rotating photos for the left panel
const calendarPhotos = [
  { src: "/images/calendar/calendar1.png", alt: "Nellie hosting a wedding reception" },
  { src: "/images/calendar/calendar2.jpg", alt: "Nellie hosting a kids birthday party" },
  { src: "/images/calendar/calendar3.jpg", alt: "Nellie at a private event" },
  { src: "/images/calendar/calendar4.png", alt: "Nellie at a Dentacare corporate event" },
];

const logos = [
  { src: "/images/companies/asialink.png",   alt: "Asialink Finance Corporation" },
  { src: "/images/companies/smdc.png",       alt: "SMDC" },
  { src: "/images/companies/san-miguel.png", alt: "San Miguel Foods" },
  { src: "/images/companies/dmci.png",       alt: "DMCI Holdings" },
  { src: "/images/companies/rebisco.png",    alt: "Rebisco" },
  { src: "/images/companies/bingo-plus.png", alt: "Bingo Plus" },
  { src: "/images/companies/sotogrande.png", alt: "SotoGrande Hotels and Resorts" },
  { src: "/images/companies/fibercom.png",   alt: "Fibercom Telecom Phils." },
  { src: "/images/companies/data-lake.png",  alt: "Data Lake" },
  { src: "/images/companies/dentacare.png",  alt: "DentaCare Dental Clinic" },
  { src: "/images/companies/pacific-plaza.png", alt: "Pacific Plaza Towers" },
];

const TOTAL = logos.length;
const extended = [...logos, ...logos, ...logos];

export default function Clients() {
  // ── Slideshow state ──────────────────────────────────────
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActivePhoto((p) => (p + 1) % calendarPhotos.length),
      4000
    );
    return () => clearInterval(t);
  }, []);

  // ── Logo carousel state ──────────────────────────────────
  const [index, setIndex] = useState(TOTAL);
  const [animated, setAnimated] = useState(true);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const visible = window.innerWidth < 640 ? 3 : 5;
      setItemWidth(containerRef.current.offsetWidth / visible);
    };
    measure();
    let timer: ReturnType<typeof setTimeout>;
    const debouncedMeasure = () => { clearTimeout(timer); timer = setTimeout(measure, 100); };
    window.addEventListener("resize", debouncedMeasure);
    return () => { window.removeEventListener("resize", debouncedMeasure); clearTimeout(timer); };
  }, []);

  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => setIndex((i) => i - 1), []);

  const onTransitionEnd = useCallback(() => {
    if (index >= TOTAL * 2) { setAnimated(false); setIndex(index - TOTAL); }
    else if (index < TOTAL) { setAnimated(false); setIndex(index + TOTAL); }
  }, [index]);

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  useEffect(() => {
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [next]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
  };

  const activeDot = ((index - TOTAL) % TOTAL + TOTAL) % TOTAL;

  return (
    <section id="clients" className="bg-ivory">
      {/* Split: auto-rotating photo + heading */}
      <div className="flex flex-col md:flex-row min-h-[480px]">

        {/* Left — crossfading slideshow */}
        <SlideLeft className="relative w-full md:w-1/2 min-h-[360px] md:min-h-0 overflow-hidden">
          {calendarPhotos.map((photo, i) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover object-center transition-opacity duration-1000"
              style={{ opacity: i === activePhoto ? 1 : 0 }}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              priority={i === 0}
            />
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 z-10" />

          {/* Slideshow dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {calendarPhotos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActivePhoto(i)}
                aria-label={`Show photo ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activePhoto ? "bg-white w-4 h-1.5" : "bg-white/40 w-1.5 h-1.5"
                }`}
              />
            ))}
          </div>
        </SlideLeft>

        {/* Right — heading */}
        <SlideRight delay={0.15} className="w-full md:w-1/2 flex flex-col justify-center px-8 py-10 md:px-14">
          <p className="text-gold-dark tracking-[0.25em] uppercase text-xs mb-3">Trusted By</p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal leading-tight mb-4">
            Companies &amp; Brands
          </h2>
          <span className="block w-10 h-px bg-gold mb-4" />
          <p className="text-warm-gray text-sm leading-relaxed max-w-md">
            From corporate giants to beloved local brands — Nellie has hosted
            events for some of the Philippines&apos; most recognisable names.
          </p>
        </SlideRight>
      </div>

      {/* Logo carousel */}
      <div className="border-t border-cream py-10">
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
              <div key={`${logo.alt}-${i}`} className="shrink-0 px-3" style={{ width: itemWidth || "20%" }}>
                <div className="flex items-center justify-center p-4 h-20">
                  <div className="relative w-full h-full">
                    <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="160px" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5 mt-8 px-6">
          <button onClick={prev} aria-label="Previous"
            style={{ touchAction: "manipulation" }}
            className="w-9 h-9 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal/40 hover:border-gold hover:text-gold transition-colors">
            &#8592;
          </button>
          <div className="flex gap-1.5">
            {logos.map((_, i) => (
              <button key={i} onClick={() => setIndex(TOTAL + i)} aria-label={`Go to logo ${i + 1}`}
                style={{ touchAction: "manipulation" }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeDot ? "bg-gold w-5 h-2" : "bg-charcoal/20 hover:bg-charcoal/40 w-2 h-2"
                }`} />
            ))}
          </div>
          <button onClick={next} aria-label="Next"
            style={{ touchAction: "manipulation" }}
            className="w-9 h-9 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal/40 hover:border-gold hover:text-gold transition-colors">
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
