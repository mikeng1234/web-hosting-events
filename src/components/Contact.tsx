import { SlideLeft, SlideRight } from "@/components/ui/Motion";

const contactInfo = [
  { label: "Email", value: "Hostnellieandevents@gmail.com", href: "mailto:Hostnellieandevents@gmail.com" },
  { label: "Viber / WhatsApp", value: "+63 992 618 6313", href: "tel:+639926186313" },
  { label: "Instagram", value: "@hostnellie", href: "https://instagram.com/hostnellie" },
  { label: "Facebook", value: "Host Nellie & Events", href: "https://www.facebook.com/HostNellie" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-ivory">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <SlideLeft>
            <p className="text-gold tracking-[0.25em] uppercase text-xs mb-4">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-6">
              Let&apos;s talk about<br />your event
            </h2>
            <span className="divider-gold" style={{ margin: "0 0 1.5rem" }} />
            <p className="text-warm-gray leading-relaxed mb-8">
              Whether you&apos;re planning a wedding, a corporate event, or something in between — reach out and let&apos;s see how Nellie can make it extraordinary.
            </p>
            <ul className="space-y-5">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex gap-4 items-start">
                  <span className="text-gold text-xs tracking-widest uppercase w-32 pt-0.5 shrink-0">{item.label}</span>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-charcoal hover:text-gold transition-colors text-sm"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </SlideLeft>

          <SlideRight delay={0.15}>
            <div className="bg-cream p-8 border-l-2 border-gold">
              <p className="font-display text-2xl text-charcoal mb-4">Prefer to book directly?</p>
              <p className="text-warm-gray text-sm leading-relaxed mb-6">
                Use the booking calendar above to reserve a consultation slot. Nellie typically responds within 24 hours.
              </p>
              <a
                href="#book"
                className="inline-block px-6 py-3 bg-gold text-ivory text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
              >
                Open Calendar
              </a>
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
