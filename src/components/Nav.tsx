"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || mobileOpen ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.07)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/">
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
              className="md:hidden p-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: "#333" }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t px-6 pb-6 pt-4 flex flex-col gap-4" style={{ borderColor: "#f0f0f0" }}>
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-base font-medium py-1"
                style={{ color: "#555" }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="https://calendly.com/jacob-trivaconsulting/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-4 py-3 rounded-lg text-center mt-2"
              style={{ background: "#E8541C", color: "#fff" }}
            >
              Book a Strategy Call
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
