"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Shop", href: "#marketplace" },
  { label: "Growth Tracker", href: "#dashboard" },
  { label: "Expert Tips", href: "#dashboard" },
  { label: "Community", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(NAV_LINKS[0].label);
  const cartCount = 2;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-charcoal/5 bg-cream/70 shadow-[0_1px_0_0_rgba(212,175,55,0.15)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a
          href="#top"
          className="font-serif text-2xl tracking-tight text-charcoal"
        >
          Maison <span className="text-gold">Mère</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="relative">
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className="group relative py-2 text-sm font-medium text-charcoal-soft transition-colors hover:text-charcoal"
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                    active === link.label
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="hidden items-center gap-5 lg:flex">
          <button className="flex items-center gap-1 text-sm text-charcoal-soft transition-colors hover:text-charcoal">
            EN / USD
            <ChevronDown size={14} />
          </button>

          <div className="h-5 w-px bg-charcoal/10" />

          <button
            aria-label="Search"
            className="text-charcoal-soft transition-colors hover:text-gold"
          >
            <Search size={19} />
          </button>
          <button
            aria-label="Wishlist"
            className="text-charcoal-soft transition-colors hover:text-rose-deep"
          >
            <Heart size={19} />
          </button>
          <button
            aria-label="Cart"
            className="relative text-charcoal-soft transition-colors hover:text-gold"
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-cream"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
          <button
            aria-label="Profile"
            className="text-charcoal-soft transition-colors hover:text-charcoal"
          >
            <User size={19} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="text-charcoal lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-charcoal/5 bg-cream/95 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setMobileOpen(false);
                  }}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-charcoal transition-colors hover:bg-rose/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 border-t border-charcoal/5 px-8 py-4 text-charcoal-soft">
            <Search size={18} />
            <Heart size={18} />
            <ShoppingBag size={18} />
            <User size={18} />
          </div>
        </motion.div>
      )}
    </header>
  );
}
