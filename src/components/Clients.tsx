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

export default function Clients() {
  return (
    <section id="clients" className="flex flex-col md:flex-row min-h-[520px]">
      {/* Left — action photo */}
      <div className="relative w-full md:w-2/5 min-h-[280px] md:min-h-0">
        <Image
          src="/images/portfolio/sample2.png"
          alt="Host Nellie speaking at a corporate event"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 40vw"
          quality={85}
        />
        {/* Dark gradient fading into the right panel on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/60 md:block hidden" />
        <div className="absolute inset-0 bg-black/30 md:hidden" />
      </div>

      {/* Right — dark panel with logos */}
      <div
        className="w-full md:w-3/5 flex flex-col justify-center px-8 py-14 md:px-14"
        style={{ background: "#111111" }}
      >
        {/* Header */}
        <p className="text-gold tracking-[0.25em] uppercase text-xs mb-3">
          Trusted By
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-ivory leading-tight mb-2">
          Companies &amp; Brands
        </h2>
        <span className="block w-10 h-px bg-gold mb-8" />

        {/* Logo grid — white cards so every logo reads cleanly on dark bg */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="bg-white rounded-sm p-3 flex items-center justify-center h-16"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
