import { FadeUp, Stagger, StaggerItem } from "@/components/ui/Motion";

const services = [
  {
    title: "Weddings",
    description:
      "From ceremony to reception, Nellie guides your wedding program with elegance and heart — keeping every moment on time while letting the emotion breathe.",
    icon: "💍",
  },
  {
    title: "Corporate Events",
    description:
      "Product launches, annual galas, award nights, and conferences. Professional, polished, and adaptable to any brand voice.",
    icon: "🏢",
  },
  {
    title: "Birthdays & Milestones",
    description:
      "Debuts, sweet sixteens, anniversaries, and retirement parties. Celebrating life's big moments with the energy they deserve.",
    icon: "🎂",
  },
  {
    title: "Private Gatherings",
    description:
      "Intimate dinners, reunions, and social events where a great host sets the tone and keeps conversation flowing all evening.",
    icon: "✨",
  },
  {
    title: "Religious Ceremonies",
    description:
      "Baptisms, confirmations, and community celebrations handled with reverence and warmth.",
    icon: "🕊️",
  },
  {
    title: "Custom Events",
    description:
      "Have something unique in mind? Nellie works with your vision to craft a hosting experience that fits your event perfectly.",
    icon: "🎭",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.25em] uppercase text-xs mb-4">
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
                <span className="text-3xl mb-4 block">{service.icon}</span>
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
