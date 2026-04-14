// background_color — matches site cream (#F2EBE0)
// text_color       — site charcoal (#1C1C1C)
// primary_color    — site gold (#C4A76B) — affects highlighted dates & CTA button
const CALENDLY_URL =
  "https://calendly.com/hostnellieandevents/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=F2EBE0&text_color=1C1C1C&primary_color=C4A76B";

export default function BookNow() {
  return (
    <section id="book" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.25em] uppercase text-xs mb-4">
            Ready to Book?
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
            Let&apos;s Plan Your Event
          </h2>
          <span className="divider-gold" />
          <p className="text-warm-gray max-w-xl mx-auto">
            Pick a time that works for you and let&apos;s talk about making
            your event extraordinary.
          </p>
        </div>

        {/* Direct iframe — more reliable than script injection on mobile */}
        <iframe
          src={CALENDLY_URL}
          width="100%"
          height="900"
          frameBorder="0"
          title="Book a session with Host Nellie"
          style={{ border: "none", display: "block" }}
        />
      </div>
    </section>
  );
}
