"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-20 overflow-hidden bg-white">
      {/* Subtle top-right blob */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,84,28,0.05) 0%, transparent 65%)" }}
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
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

        {/* Right — property photo with floating cards */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:block relative"
        >
          {/* Main photo */}
          <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.12)" }}>
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

          {/* Floating card — top left */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute -left-6 top-8 bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1)", border: "1px solid #f0f0f0", minWidth: 220 }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
              style={{ background: "rgba(232,84,28,0.08)" }}
            >
              ✅
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Cleaner dispatched</p>
              <p className="text-xs" style={{ color: "#aaa" }}>Unit 4B · auto-triggered</p>
            </div>
          </motion.div>

          {/* Floating card — bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute -right-6 bottom-10 bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1)", border: "1px solid #f0f0f0", minWidth: 220 }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
              style={{ background: "rgba(232,84,28,0.08)" }}
            >
              📊
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Owner report sent</p>
              <p className="text-xs" style={{ color: "#aaa" }}>March summary · 7 owners</p>
            </div>
          </motion.div>

          {/* Floating card — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="absolute left-4 bottom-6 bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1)", border: "1px solid #f0f0f0", minWidth: 200 }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
              style={{ background: "rgba(232,84,28,0.08)" }}
            >
              ⭐
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>Review requested</p>
              <p className="text-xs" style={{ color: "#aaa" }}>Post-checkout · auto-sent</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
