"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import FAQ from "./FAQ";

function PageHero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden" style={{ background: "#faf9f7" }}>
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,84,28,0.05) 0%, transparent 65%)" }}
      />
      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.18em] mb-8" style={{ color: "#E8541C" }}>
            FAQ
          </p>
          <h1
            className="font-bold leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "#0D0D0D" }}
          >
            Questions, answered.
          </h1>
          <p className="text-lg leading-relaxed max-w-xl" style={{ color: "#777" }}>
            What we actually do, what it costs, and what happens when something goes wrong. The questions we hear before every strategy call.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BottomCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: "#faf9f7" }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-4xl font-bold mb-5" style={{ color: "#0D0D0D" }}>
            Still have questions?
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "#888" }}>
            The strategy call is free, 30 minutes, and ends with a prioritized build plan whether or not you work with us.
          </p>
          <a
            href="https://calendly.com/jacob-trivaconsulting/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#E8541C", color: "#fff", boxShadow: "0 4px 20px rgba(232,84,28,0.3)" }}
          >
            Book a Free Strategy Call <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function FAQPage() {
  return (
    <>
      <PageHero />
      <FAQ />
      <BottomCTA />
    </>
  );
}
