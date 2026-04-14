"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal shadow-md">
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between py-3">
        {/* Brand */}
        <a
          href="#hero"
          className="font-display text-lg tracking-wide text-ivory hover:text-gold transition-colors"
        >
          Host Nellie
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-widest uppercase text-cream/70 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#book"
              className="text-xs tracking-widest uppercase px-5 py-2 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 min-h-[44px] min-w-[44px]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-[1.5px] bg-ivory transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ivory transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ivory transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="bg-charcoal border-t border-white/10 px-6 py-5 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-xs tracking-widest uppercase text-cream/70 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={closeMenu}
            className="text-xs tracking-widest uppercase px-5 py-3 border border-gold text-gold text-center hover:bg-gold hover:text-charcoal transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
