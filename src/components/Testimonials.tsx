// Replace these with real testimonials when available
const testimonials = [
  {
    id: 1,
    quote:
      "Nellie made our wedding feel like it was being held together by magic. Every transition was seamless, every guest was smiling. We didn't have to worry about a single thing.",
    name: "Maria & Jose",
    event: "Wedding — Batangas, 2024",
  },
  {
    id: 2,
    quote:
      "We've worked with many MCs for our annual awards night, but Nellie brought a level of professionalism and warmth that our team still talks about months later.",
    name: "Carla Reyes",
    event: "Corporate Awards Night — BGC, 2023",
  },
  {
    id: 3,
    quote:
      "My daughter's debut was absolutely perfect. Nellie kept the program flowing while still letting every moment feel special. I couldn't have asked for more.",
    name: "Tita Belen",
    event: "Debut — Quezon City, 2023",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24"
      style={{ background: "linear-gradient(135deg, #1C1C1C 0%, #2C2520 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.25em] uppercase text-xs mb-4">
            Kind Words
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory leading-tight">
            What Clients Say
          </h2>
          <span className="divider-gold" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white/5 border border-white/10 p-8 flex flex-col"
            >
              {/* Quote mark */}
              <span className="font-display text-5xl text-gold/30 leading-none mb-4">
                &ldquo;
              </span>
              <p className="text-cream/80 text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-ivory font-medium text-sm">{t.name}</p>
                <p className="text-gold/60 text-xs tracking-wide mt-1">
                  {t.event}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-cream/20 text-xs tracking-widest uppercase mt-10">
          Placeholder testimonials — replace with real client quotes
        </p>
      </div>
    </section>
  );
}
