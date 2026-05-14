"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center px-6 pt-24 pb-6 overflow-hidden" style={{ minHeight: "88vh" }}>
      {/* Subtle top-right blob */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,84,28,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-5xl lg:text-6xl font-bold leading-[1.07] tracking-tight mb-5"
            style={{ color: "#0D0D0D" }}
          >
            Stop running your
            <br />STR business from a{" "}
            <em className="not-italic" style={{ color: "#E8541C" }}>WhatsApp group.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-lg leading-relaxed mb-9"
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
            className="flex flex-col sm:flex-row gap-3 mb-12"
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
            className="flex gap-8 pt-8"
            style={{ borderTop: "1px solid #f0f0f0" }}
          >
            {[
              { value: "2 to 3 wks", label: "First system live" },
              { value: "10+ hrs", label: "Saved monthly, day one" },
              { value: "10+", label: "Units to get started" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-bold" style={{ color: "#0D0D0D" }}>{s.value}</div>
                <div className="text-xs mt-0.5" style={{ color: "#aaa" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: property photo with floating cards */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:block relative"
        >
          {/* Main photo */}
          <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.12)", border: "1px solid rgba(232,84,28,0.22)" }}>
            <Image
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=85&auto=format&fit=crop"
              alt="Short-term rental property"
              width={700}
              height={520}
              className="w-full h-[480px] object-cover"
              priority
            />
            {/* Subtle dark gradient at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)" }}
            />
          </div>

          {/* 1 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 0.5 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: -14, left: -22, transform: "rotate(-3deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 195, zIndex: 12 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>✅</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Cleaner dispatched</p><p className="text-[11px]" style={{ color: "#aaa" }}>Unit 4B · right now</p></div>
          </motion.div>

          {/* 2 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 0.7 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 18, left: "30%", transform: "rotate(2deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 182, zIndex: 14 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(220,38,38,0.08)" }}>🚨</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Leak reported</p><p className="text-[11px]" style={{ color: "#aaa" }}>Unit 7 · urgent</p></div>
          </motion.div>

          {/* 3 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 0.9 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: -8, right: -18, transform: "rotate(2.5deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 190, zIndex: 11 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>📅</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>New booking in</p><p className="text-[11px]" style={{ color: "#aaa" }}>Check-in Friday</p></div>
          </motion.div>

          {/* 4 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 1.1 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 90, left: "8%", transform: "rotate(-2deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 188, zIndex: 13 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>💬</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Guest asking</p><p className="text-[11px]" style={{ color: "#aaa" }}>Early check-in · 11am</p></div>
          </motion.div>

          {/* 5 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 1.3 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 110, right: "4%", transform: "rotate(-3deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 185, zIndex: 10 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>📈</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Rates updated</p><p className="text-[11px]" style={{ color: "#aaa" }}>+18% this weekend</p></div>
          </motion.div>

          {/* 6 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 1.5 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 210, left: "22%", transform: "rotate(3deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 192, zIndex: 15 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>⏰</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Late checkout</p><p className="text-[11px]" style={{ color: "#aaa" }}>Unit 9 · rescheduling</p></div>
          </motion.div>

          {/* 7 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 1.7 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 260, left: -26, transform: "rotate(-1.5deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 185, zIndex: 9 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>🔧</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Fix needed</p><p className="text-[11px]" style={{ color: "#aaa" }}>HVAC · Unit 2A</p></div>
          </motion.div>

          {/* 8 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 1.9 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 295, right: "6%", transform: "rotate(2deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 188, zIndex: 12 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>👤</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Owner asking</p><p className="text-[11px]" style={{ color: "#aaa" }}>Unit 12 · wants update</p></div>
          </motion.div>

          {/* 9 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 2.1 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ bottom: 60, left: "10%", transform: "rotate(-2.5deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 185, zIndex: 11 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>⭐</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Review request</p><p className="text-[11px]" style={{ color: "#aaa" }}>Post-checkout · auto</p></div>
          </motion.div>

          {/* 10 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 2.3 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ bottom: -16, right: -20, transform: "rotate(1.5deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 195, zIndex: 10 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>📊</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Owner report due</p><p className="text-[11px]" style={{ color: "#aaa" }}>7 owners · this week</p></div>
          </motion.div>

          {/* 11 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 2.5 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 52, left: "47%", transform: "rotate(-4.5deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 178, zIndex: 16 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>🔑</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Lockbox reset</p><p className="text-[11px]" style={{ color: "#aaa" }}>Unit 3 · guest locked out</p></div>
          </motion.div>

          {/* 12 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 2.7 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 178, left: -14, transform: "rotate(5deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 182, zIndex: 8 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>📞</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Vendor callback</p><p className="text-[11px]" style={{ color: "#aaa" }}>Plumber · Unit 11</p></div>
          </motion.div>

          {/* 13 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 2.9 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 148, left: "52%", transform: "rotate(-3.5deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 176, zIndex: 13 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>🗓️</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Calendar gap</p><p className="text-[11px]" style={{ color: "#aaa" }}>3 nights · no booking</p></div>
          </motion.div>

          {/* 14 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 3.1 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 338, left: "36%", transform: "rotate(4deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 180, zIndex: 14 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>💰</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Payout pending</p><p className="text-[11px]" style={{ color: "#aaa" }}>$3,200 · 6 owners</p></div>
          </motion.div>

          {/* 15 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 3.3 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ bottom: -12, left: "54%", transform: "rotate(-4deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 174, zIndex: 11 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>🏠</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Owner message</p><p className="text-[11px]" style={{ color: "#aaa" }}>Re: pool fence</p></div>
          </motion.div>

          {/* 16 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 3.5 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 168, right: -22, transform: "rotate(3.5deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 180, zIndex: 9 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>💳</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Charge failed</p><p className="text-[11px]" style={{ color: "#aaa" }}>Guest · Unit 3</p></div>
          </motion.div>

          {/* 17 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 3.7 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 315, left: "14%", transform: "rotate(2deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 178, zIndex: 13 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>📍</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Check-in issue</p><p className="text-[11px]" style={{ color: "#aaa" }}>Wrong address sent</p></div>
          </motion.div>

          {/* 18 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 3.9 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ bottom: 95, right: -16, transform: "rotate(-3deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 176, zIndex: 10 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>🌡️</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>AC complaint</p><p className="text-[11px]" style={{ color: "#aaa" }}>Unit 5 · too warm</p></div>
          </motion.div>

          {/* 19 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 4.1 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 235, right: "7%", transform: "rotate(-1.5deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 182, zIndex: 11 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>🧹</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Deep clean overdue</p><p className="text-[11px]" style={{ color: "#aaa" }}>Unit 6 · flagged</p></div>
          </motion.div>

          {/* 20 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 4.3 }}
            className="absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{ top: 395, left: -18, transform: "rotate(-2.5deg)", boxShadow: "0 3px 0 rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.14), 0 16px 36px rgba(0,0,0,0.08)", border: "1px solid #ebebeb", minWidth: 178, zIndex: 8 }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(232,84,28,0.08)" }}>📋</div>
            <div><p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Inspection due</p><p className="text-[11px]" style={{ color: "#aaa" }}>Unit 8 · this week</p></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
