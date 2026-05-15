"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || mobileOpen ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" aria-label="Triva home">
          <Image src="/logo-black.png" alt="Triva" width={96} height={32} className="h-7 w-auto" priority />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: "#999" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#111")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#999")}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://calendly.com/jacob-trivaconsulting/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            style={{ background: "#E8541C", color: "#fff" }}
          >
            Book a Strategy Call
          </a>
          <button
            className="md:hidden p-3 -mr-3 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{ color: "#333" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t px-6 pb-6 pt-2 flex flex-col"
            style={{ borderColor: "#f0f0f0", background: "rgba(255,255,255,0.98)" }}
          >
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-base font-medium py-4 border-b transition-colors"
                style={{ color: "#333", borderColor: "#f5f5f5" }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="https://calendly.com/jacob-trivaconsulting/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold px-4 py-4 rounded-lg text-center mt-5 inline-flex items-center justify-center"
              style={{ background: "#E8541C", color: "#fff", boxShadow: "0 4px 14px rgba(232,84,28,0.3)" }}
              onClick={() => setMobileOpen(false)}
            >
              Book a Strategy Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
