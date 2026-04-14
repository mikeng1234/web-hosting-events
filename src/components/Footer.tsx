export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ background: "#111111" }}
    >
      <p className="font-display text-xl text-ivory/80 mb-1">Host Nellie</p>
      <p className="text-warm-gray text-xs tracking-widest uppercase mb-6">
        Professional Event Host
      </p>
      <div className="flex justify-center gap-6 mb-8 text-xs tracking-widest uppercase">
        {["About", "Services", "Portfolio", "Book Now", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-warm-gray hover:text-gold transition-colors"
            >
              {item}
            </a>
          )
        )}
      </div>
      <span className="block w-12 h-px bg-gold/30 mx-auto mb-6" />
      <p className="text-warm-gray/40 text-xs">
        &copy; {new Date().getFullYear()} Host Nellie. All rights reserved.
      </p>
    </footer>
  );
}
