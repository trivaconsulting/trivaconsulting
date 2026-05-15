"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const desktopCards = [
  { icon: "✅", title: "Cleaner dispatched", sub: "Unit 4B · right now", style: { top: -14, left: -22, transform: "rotate(-3deg)", minWidth: 195, zIndex: 12 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "🚨", title: "Leak reported", sub: "Unit 7 · urgent", style: { top: 18, left: "30%", transform: "rotate(2deg)", minWidth: 182, zIndex: 14 }, bg: "rgba(220,38,38,0.08)" },
  { icon: "📅", title: "New booking in", sub: "Check-in Friday", style: { top: -8, right: -18, transform: "rotate(2.5deg)", minWidth: 190, zIndex: 11 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "💬", title: "Guest asking", sub: "Early check-in · 11am", style: { top: 90, left: "8%", transform: "rotate(-2deg)", minWidth: 188, zIndex: 13 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "📈", title: "Rates updated", sub: "+18% this weekend", style: { top: 110, right: "4%", transform: "rotate(-3deg)", minWidth: 185, zIndex: 10 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "⏰", title: "Late checkout", sub: "Unit 9 · rescheduling", style: { top: 210, left: "22%", transform: "rotate(3deg)", minWidth: 192, zIndex: 15 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "🔧", title: "Fix needed", sub: "HVAC · Unit 2A", style: { top: 260, left: -26, transform: "rotate(-1.5deg)", minWidth: 185, zIndex: 9 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "👤", title: "Owner asking", sub: "Unit 12 · wants update", style: { top: 295, right: "6%", transform: "rotate(2deg)", minWidth: 188, zIndex: 12 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "⭐", title: "Review request", sub: "Post-checkout · auto", style: { bottom: 60, left: "10%", transform: "rotate(-2.5deg)", minWidth: 185, zIndex: 11 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "📊", title: "Owner report due", sub: "7 owners · this week", style: { bottom: -16, right: -20, transform: "rotate(1.5deg)", minWidth: 195, zIndex: 10 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "🔑", title: "Lockbox reset", sub: "Unit 3 · guest locked out", style: { top: 52, left: "47%", transform: "rotate(-4.5deg)", minWidth: 178, zIndex: 16 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "📞", title: "Vendor callback", sub: "Plumber · Unit 11", style: { top: 178, left: -14, transform: "rotate(5deg)", minWidth: 182, zIndex: 8 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "🗓️", title: "Calendar gap", sub: "3 nights · no booking", style: { top: 148, left: "52%", transform: "rotate(-3.5deg)", minWidth: 176, zIndex: 13 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "💰", title: "Payout pending", sub: "$3,200 · 6 owners", style: { top: 338, left: "36%", transform: "rotate(4deg)", minWidth: 180, zIndex: 14 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "🏠", title: "Owner message", sub: "Re: pool fence", style: { bottom: -12, left: "54%", transform: "rotate(-4deg)", minWidth: 174, zIndex: 11 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "🌡️", title: "AC complaint", sub: "Unit 5 · too warm", style: { bottom: 95, right: -16, transform: "rotate(-3deg)", minWidth: 176, zIndex: 10 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "💳", title: "Charge failed", sub: "Guest · Unit 3", style: { top: 168, right: -22, transform: "rotate(3.5deg)", minWidth: 180, zIndex: 9 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "📍", title: "Check-in issue", sub: "Wrong address sent", style: { top: 315, left: "14%", transform: "rotate(2deg)", minWidth: 178, zIndex: 13 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "🧹", title: "Deep clean overdue", sub: "Unit 6 · flagged", style: { top: 235, right: "7%", transform: "rotate(-1.5deg)", minWidth: 182, zIndex: 11 }, bg: "rgba(232,84,28,0.08)" },
  { icon: "📋", title: "Inspection due", sub: "Unit 8 · this week", style: { top: 395, left: -18, transform: "rotate(-2.5deg)", minWidth: 178, zIndex: 8 }, bg: "rgba(232,84,28,0.08)" },
];

const mobileMarqueeCards = [
  { icon: "🚨", title: "Leak reported", sub: "Unit 7 · urgent", bg: "rgba(220,38,38,0.08)" },
  { icon: "💬", title: "Guest asking", sub: "Early check-in", bg: "rgba(232,84,28,0.08)" },
  { icon: "✅", title: "Cleaner dispatched", sub: "Unit 4B", bg: "rgba(232,84,28,0.08)" },
  { icon: "📅", title: "New booking", sub: "Check-in Friday", bg: "rgba(232,84,28,0.08)" },
  { icon: "📊", title: "Owner report due", sub: "7 owners", bg: "rgba(232,84,28,0.08)" },
  { icon: "🔧", title: "HVAC fix needed", sub: "Unit 2A", bg: "rgba(232,84,28,0.08)" },
  { icon: "⭐", title: "Review request", sub: "Auto-sent", bg: "rgba(232,84,28,0.08)" },
  { icon: "💰", title: "Payout pending", sub: "$3,200", bg: "rgba(232,84,28,0.08)" },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row md:items-center px-6 pt-24 pb-12 md:pb-6 overflow-hidden md:min-h-[88vh]">
      {/* Subtle top-right blob */}
      <div
        className="absolute -top-40 -right-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,84,28,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-16 md:items-center">
        {/* Left: copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-[2.25rem] leading-[1.08] sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5"
            style={{ color: "#0D0D0D" }}
          >
            Stop running your STR business from a{" "}
            <em className="not-italic" style={{ color: "#E8541C" }}>WhatsApp group.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-base sm:text-lg leading-relaxed mb-8 md:mb-9"
            style={{ color: "#777" }}
          >
            Triva builds the automation systems that STR management companies use
            to run leaner, retain owners, and scale without hiring. We build it.
            You run your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="flex flex-col sm:flex-row gap-3 mb-10 md:mb-12"
          >
            <a
              href="https://calendly.com/jacob-trivaconsulting/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#E8541C", color: "#fff", boxShadow: "0 4px 14px rgba(232,84,28,0.3)" }}
            >
              Book a Free Strategy Call <ArrowRight size={15} />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-gray-50"
              style={{ color: "#555", border: "1px solid #e5e5e5" }}
            >
              See what we build
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-3 sm:flex sm:gap-8 pt-6 md:pt-8"
            style={{ borderTop: "1px solid #f0f0f0" }}
          >
            {[
              { value: "2–3 wks", label: "First system live" },
              { value: "10+ hrs", label: "Saved monthly, day one" },
              { value: "10+", label: "Units to get started" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg sm:text-xl font-bold" style={{ color: "#0D0D0D" }}>{s.value}</div>
                <div className="text-[11px] sm:text-xs mt-0.5 leading-tight" style={{ color: "#aaa" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile visual: property photo with 4 floating cards + scrolling marquee below */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:hidden mt-4"
        >
          <div className="relative rounded-2xl overflow-hidden mx-auto" style={{ maxWidth: 420, boxShadow: "0 12px 40px rgba(0,0,0,0.12)", border: "1px solid rgba(232,84,28,0.2)" }}>
            <Image
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80&auto=format&fit=crop"
              alt="Short-term rental property"
              width={500}
              height={340}
              sizes="(max-width: 768px) 100vw, 500px"
              className="w-full h-[280px] object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)" }} />

            {/* 4 representative floating cards positioned for mobile */}
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 0.5 }}
              className="absolute bg-white rounded-xl px-3 py-2 flex items-center gap-2"
              style={{ top: 12, left: 10, transform: "rotate(-3deg)", boxShadow: "0 6px 18px rgba(0,0,0,0.12)", border: "1px solid #ebebeb" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0" style={{ background: "rgba(220,38,38,0.1)" }}>🚨</div>
              <div><p className="text-[11px] font-semibold leading-tight" style={{ color: "#1a1a1a" }}>Leak reported</p><p className="text-[10px]" style={{ color: "#aaa" }}>Unit 7 · urgent</p></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 0.7 }}
              className="absolute bg-white rounded-xl px-3 py-2 flex items-center gap-2"
              style={{ top: 28, right: 10, transform: "rotate(2.5deg)", boxShadow: "0 6px 18px rgba(0,0,0,0.12)", border: "1px solid #ebebeb" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0" style={{ background: "rgba(232,84,28,0.1)" }}>💬</div>
              <div><p className="text-[11px] font-semibold leading-tight" style={{ color: "#1a1a1a" }}>Guest asking</p><p className="text-[10px]" style={{ color: "#aaa" }}>Early check-in</p></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 0.9 }}
              className="absolute bg-white rounded-xl px-3 py-2 flex items-center gap-2"
              style={{ bottom: 60, left: 14, transform: "rotate(3deg)", boxShadow: "0 6px 18px rgba(0,0,0,0.12)", border: "1px solid #ebebeb" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0" style={{ background: "rgba(232,84,28,0.1)" }}>📅</div>
              <div><p className="text-[11px] font-semibold leading-tight" style={{ color: "#1a1a1a" }}>New booking</p><p className="text-[10px]" style={{ color: "#aaa" }}>Check-in Friday</p></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 1.1 }}
              className="absolute bg-white rounded-xl px-3 py-2 flex items-center gap-2"
              style={{ bottom: 16, right: 14, transform: "rotate(-2deg)", boxShadow: "0 6px 18px rgba(0,0,0,0.12)", border: "1px solid #ebebeb" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0" style={{ background: "rgba(232,84,28,0.1)" }}>📊</div>
              <div><p className="text-[11px] font-semibold leading-tight" style={{ color: "#1a1a1a" }}>Report due</p><p className="text-[10px]" style={{ color: "#aaa" }}>7 owners</p></div>
            </motion.div>
          </div>

          {/* Scrolling marquee of notifications below the image — captures the "chaos" */}
          <div
            className="mt-5 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <style>{`
              @keyframes hero-marquee {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .hero-marquee-inner {
                animation: hero-marquee 40s linear infinite;
              }
            `}</style>
            <div className="hero-marquee-inner flex gap-2.5 w-max">
              {[...mobileMarqueeCards, ...mobileMarqueeCards, ...mobileMarqueeCards].map((c, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-white rounded-xl px-3 py-2 flex items-center gap-2"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #ebebeb", minWidth: 170 }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0" style={{ background: c.bg }}>{c.icon}</div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold leading-tight truncate" style={{ color: "#1a1a1a" }}>{c.title}</p>
                    <p className="text-[10px] truncate" style={{ color: "#aaa" }}>{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-[11px] mt-4 font-mono uppercase tracking-widest" style={{ color: "#bbb" }}>
            …and 47 more open tabs.
          </p>
        </motion.div>

        {/* Desktop: property photo with floating cards */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:block relative"
        >
          <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.12)", border: "1px solid rgba(232,84,28,0.22)" }}>
            <Image
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=85&auto=format&fit=crop"
              alt="Short-term rental property"
              width={700}
              height={520}
              sizes="(max-width: 768px) 100vw, 700px"
              className="w-full h-[480px] object-cover"
              priority
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-32"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)" }}
            />
          </div>

          {desktopCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.5 + i * 0.2 }}
              className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{ ...c.style, boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb" }}
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: c.bg }}>{c.icon}</div>
              <div>
                <p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>{c.title}</p>
                <p className="text-[11px]" style={{ color: "#aaa" }}>{c.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
