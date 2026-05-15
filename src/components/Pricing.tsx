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

const steps = [
  { label: "You get a custom systems map", sub: "Built around your stack, not a generic template" },
  { label: "We scope the build together", sub: "Clear deliverables, fixed price, no scope creep" },
  { label: "You decide — no pressure", sub: "The audit is useful whether or not you work with us" },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="pricing"
      className="py-16 sm:py-24 px-6"
      style={{
        background: "linear-gradient(135deg, #FFF0E9 0%, #FFE4D4 50%, #FFDCC8 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Left — headline + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-7"
              style={{ background: "rgba(232,84,28,0.14)", color: "#C94E18" }}
            >
              Free · No obligation
            </span>
            <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-bold leading-tight mb-5" style={{ color: "#1A0A04" }}>
              Most STR operators have the same problems.{" "}
              <span style={{ color: "#E8541C" }}>The ones who fix them first win.</span>
            </h2>
            <p className="text-base leading-relaxed mb-9" style={{ color: "#7A3A20" }}>
              Book a free 30-minute call. We&apos;ll show you exactly where your operation is leaking time
              and money — whether you work with us or not.
            </p>
            <a
              href="https://calendly.com/jacob-trivaconsulting/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#E8541C",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(232,84,28,0.35)",
              }}
            >
              Book Your Free AI Audit <ArrowRight size={15} />
            </a>
            <p className="mt-4 text-xs" style={{ color: "#B06040" }}>
              No pitch. No obligation. 30 minutes.
            </p>
          </motion.div>

          {/* Right — white card with checklist + steps */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="rounded-2xl p-6 sm:p-8 flex flex-col gap-7 sm:gap-8"
            style={{
              background: "#fff",
              boxShadow: "0 8px 40px rgba(232,84,28,0.12)",
            }}
          >
            {/* Checklist */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#bbb" }}>
                What&apos;s included
              </p>
              <ul className="flex flex-col gap-3.5">
                {auditIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#555" }}>
                    <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#E8541C" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderTop: "1px solid #F2F2F2" }} />

            {/* Steps */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#bbb" }}>
                What happens after
              </p>
              <div className="flex flex-col gap-5">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ background: "rgba(232,84,28,0.08)", color: "#E8541C" }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#111" }}>{s.label}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#aaa" }}>{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
