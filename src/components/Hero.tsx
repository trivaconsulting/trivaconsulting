"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const notifications = [
  { emoji: "✅", text: "Cleaner dispatched — Unit 4B · 11:02am" },
  { emoji: "📊", text: "Owner report sent — March summary" },
  { emoji: "💬", text: "Guest reply drafted — awaiting approval" },
  { emoji: "⭐", text: "Review requested — Sarah T. checked out" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-20 overflow-hidden bg-white">
      {/* Subtle top-right blob */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,84,28,0.06) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-7"
            style={{ background: "rgba(232,84,28,0.07)", color: "#E8541C", border: "1px solid rgba(232,84,28,0.15)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#E8541C" }} />
            Built for STR management companies
          </motion.div>

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
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "#E8541C", color: "#fff", boxShadow: "0 4px 14px rgba(232,84,28,0.3)" }}
            >
              Book a Free Strategy Call <ArrowRight size={15} />
            </a>
            <a
              href="#services"
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
              { value: "2–3 wks", label: "First system live" },
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

        {/* Right — system visual */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex flex-col gap-3"
        >
          <div
            className="rounded-2xl p-5 mb-1"
            style={{ background: "#F7F7F7", border: "1px solid #EDEDED" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#bbb" }}>
              Your systems, running right now
            </p>
            <div className="flex flex-col gap-2.5">
              {notifications.map((n, i) => (
                <motion.div
                  key={n.text}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                  className="flex items-center gap-3 rounded-xl px-4 py-3.5 bg-white"
                  style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f0f0f0" }}
                >
                  <span className="text-base">{n.emoji}</span>
                  <span className="text-sm" style={{ color: "#444" }}>{n.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mini stat card */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Owner reports sent", value: "Auto", sub: "every 1st of the month" },
              { label: "Guest response time", value: "< 2 min", sub: "vs 4 hrs industry avg" },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-xl p-4 bg-white"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f0f0f0" }}
              >
                <div className="text-xs mb-2" style={{ color: "#bbb" }}>{c.label}</div>
                <div className="text-xl font-bold mb-0.5" style={{ color: "#E8541C" }}>{c.value}</div>
                <div className="text-xs" style={{ color: "#ccc" }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
