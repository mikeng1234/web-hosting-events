import Image from "next/image";
import { SlideLeft, SlideRight, FadeUp } from "@/components/ui/Motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo — slides in from left */}
          <SlideLeft>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/nellie-portrait.png"
                  alt="Host Nellie smiling in front of a floral arch at a wedding event"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30 pointer-events-none" />
            </div>
          </SlideLeft>

          {/* Text — slides in from right */}
          <SlideRight delay={0.15}>
            <p className="text-gold tracking-[0.25em] uppercase text-xs mb-4">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-6">
              The face behind
              <br />
              every great event
            </h2>
            <span className="divider-gold" style={{ margin: "0 0 1.5rem" }} />
            <p className="text-warm-gray leading-relaxed mb-4">
              Nellie is a full-time professional event host with years of
              experience bringing warmth, energy, and grace to every occasion.
              From intimate garden weddings to grand corporate galas, she knows
              how to read the room and make every guest feel at home.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              Her hosting style blends natural charisma with meticulous
              preparation — so you can relax, knowing the program is in expert
              hands.
            </p>

            <FadeUp delay={0.3}>
              <div className="flex gap-10 pt-6 border-t border-cream">
                {[
                  { value: "200+", label: "Events Hosted" },
                  { value: "5★", label: "Client Rating" },
                  { value: "8+", label: "Years Experience" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl text-gold">{stat.value}</p>
                    <p className="text-xs tracking-widest uppercase text-warm-gray mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
