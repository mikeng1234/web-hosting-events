import type { ReactNode } from "react";
import { FadeUp, Stagger, StaggerItem } from "@/components/ui/Motion";

/* ── Thin-stroke SVG icons — consistent across all OS / browsers ── */
const WeddingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CorporateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

const MilestoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <circle cx="12" cy="9" r="6" />
    <path d="M15.477 13.89L17 22l-5-3-5 3 1.523-8.11" />
  </svg>
);

const GatheringIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ReligiousIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <path d="M12 22V12" />
    <path d="M12 8V2" />
    <path d="M7 12h10" />
    <circle cx="12" cy="5" r="1" />
  </svg>
);

const CustomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
    <path d="M9 18h6M10 22h4" />
    <path d="M12 2a7 7 0 0 1 7 7c0 4.17-3.33 6.17-3.33 9H8.33C8.33 15.17 5 13.17 5 9a7 7 0 0 1 7-7z" />
  </svg>
);

const services: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: "Weddings",
    description:
      "From ceremony to reception, Nellie guides your wedding program with elegance and heart — keeping every moment on time while letting the emotion breathe.",
    icon: <WeddingIcon />,
  },
  {
    title: "Corporate Events",
    description:
      "Product launches, annual galas, award nights, and conferences. Professional, polished, and adaptable to any brand voice.",
    icon: <CorporateIcon />,
  },
  {
    title: "Birthdays & Milestones",
    description:
      "Debuts, sweet sixteens, anniversaries, and retirement parties. Celebrating life's big moments with the energy they deserve.",
    icon: <MilestoneIcon />,
  },
  {
    title: "Private Gatherings",
    description:
      "Intimate dinners, reunions, and social events where a great host sets the tone and keeps conversation flowing all evening.",
    icon: <GatheringIcon />,
  },
  {
    title: "Religious Ceremonies",
    description:
      "Baptisms, confirmations, and community celebrations handled with reverence and warmth.",
    icon: <ReligiousIcon />,
  },
  {
    title: "Custom Events",
    description:
      "Have something unique in mind? Nellie works with your vision to craft a hosting experience that fits your event perfectly.",
    icon: <CustomIcon />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-gold-dark tracking-[0.25em] uppercase text-xs mb-4">
              What I Do
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Events I Host
            </h2>
            <span className="divider-gold" />
            <p className="text-warm-gray max-w-xl mx-auto">
              Every event is different. Every client deserves a host who prepares
              like it&apos;s the only one that matters.
            </p>
          </div>
        </FadeUp>

        {/* Staggered cards */}
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="bg-ivory p-8 group hover:shadow-md transition-shadow border border-transparent hover:border-gold/20 h-full">
                <span className="text-gold mb-5 block transition-colors group-hover:text-gold-light">
                  {service.icon}
                </span>
                <h3 className="font-display text-xl text-charcoal mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="#book"
              className="inline-block px-8 py-4 bg-charcoal text-ivory text-sm tracking-widest uppercase hover:bg-gold transition-colors"
            >
              Book Your Event
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
