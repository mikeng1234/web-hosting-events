import Image from "next/image";

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

// Duplicate for seamless infinite loop
const marqueeLogos = [...logos, ...logos];

export default function Clients() {
  return (
    <section id="clients" style={{ background: "#111111" }}>
      {/* Top — split photo + heading */}
      <div className="flex flex-col md:flex-row min-h-[360px]">
        {/* Left: action photo */}
        <div className="relative w-full md:w-2/5 min-h-[240px] md:min-h-0">
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

        {/* Right: heading */}
        <div className="w-full md:w-3/5 flex flex-col justify-center px-8 py-12 md:px-14">
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

      {/* Bottom — infinite scrolling logo carousel */}
      <div className="border-t border-white/10 py-10 overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #111111, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #111111, transparent)" }} />

        <div className="marquee-track">
          {marqueeLogos.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="mx-4 bg-white rounded-sm flex items-center justify-center shrink-0"
              style={{ width: "140px", height: "64px", padding: "10px 16px" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="140px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
