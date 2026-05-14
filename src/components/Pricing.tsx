"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const auditIncludes = [
  "Full walkthrough of your operation — PMS, team structure, current tools",
  "Custom systems map showing exactly where time and money are leaking",
  "Priority list of what to build first, based on your portfolio size",
  "Scoped proposal with an exact price — before any commitment",
];

const afterAudit = [
  { label: "You get a custom systems map", sub: "Built around your stack, not a generic template" },
  { label: "We scope the build together", sub: "Clear deliverables, fixed price, no scope creep" },
  { label: "You decide — no pressure", sub: "The audit is useful whether or not you work with us" },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="pricing" className="py-28 px-6" style={{ background: "#FAFAFA" }}>
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0D0D0D" }}>
            Pricing is scoped<br className="hidden md:block" /> to your operation.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#888" }}>
            Every STR business is different. We look at yours first — then we give you an exact number. No tiers, no guessing.
          </p>
        </motion.div>

        {/* Audit card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl p-8 md:p-10 bg-white mb-6"
          style={{
            border: "1.5px solid #E8541C",
            boxShadow: "0 8px 40px rgba(232,84,28,0.10)",
          }}
        >
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6"
            style={{ background: "rgba(232,84,28,0.08)", color: "#E8541C" }}
          >
            Free · No obligation
          </span>
          <h3 className="text-2xl font-bold mb-3" style={{ color: "#0D0D0D" }}>
            Start with a free AI audit.
          </h3>
          <p className="text-sm leading-relaxed mb-7" style={{ color: "#999" }}>
            Book a 30-minute call. We dig into your operation, find the automation gaps, and build a custom systems plan — at no cost. By the end, you&apos;ll know exactly what to build and what it will cost.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {auditIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "#555" }}>
                <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#E8541C" }} />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://calendly.com/jacob-trivaconsulting/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "#E8541C",
              color: "#fff",
              boxShadow: "0 4px 16px rgba(232,84,28,0.30)",
            }}
          >
            Book Your Free AI Audit
            <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* What happens after */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl p-6 md:p-8 bg-white mb-8"
          style={{ border: "1px solid #EFEFEF", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#bbb" }}>
            What happens on the call
          </p>
          <div className="flex flex-col gap-5">
            {afterAudit.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ background: "rgba(232,84,28,0.08)", color: "#E8541C" }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#0D0D0D" }}>{item.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#aaa" }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center text-sm"
          style={{ color: "#ccc" }}
        >
          After your audit, you&apos;ll know the exact scope and cost — before any commitment. Systems belong to you. No lock-ins.
        </motion.p>

      </div>
    </section>
  );
}
