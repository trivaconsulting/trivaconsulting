"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="rounded-3xl px-10 py-20 md:py-28 text-center relative overflow-hidden"
          style={{ background: "#0D0D0D" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,84,28,0.18) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5" style={{ color: "#fff" }}>
              Most STR operators have the same problems.{" "}
              <span style={{ color: "#E8541C" }}>The ones who fix them first win.</span>
            </h2>
            <p className="text-lg mb-10" style={{ color: "#555" }}>
              Book a free 30-minute strategy call. We&apos;ll show you exactly
              where your operation is leaking time and money — whether you work with us or not.
            </p>
            <a
              href="https://calendly.com/jacob-trivaconsulting/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ background: "#E8541C", color: "#fff", boxShadow: "0 4px 20px rgba(232,84,28,0.35)" }}
            >
              Book a Free Strategy Call <ArrowRight size={16} />
            </a>
            <p className="mt-5 text-sm" style={{ color: "#333" }}>
              No pitch. No obligation. 30 minutes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
