"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Strategy Audit",
    price: "$2,500",
    cadence: "one-time",
    description: "We map your operation, find the leaks, and hand you a prioritized systems plan — useful whether or not you work with us.",
    includes: [
      "Full operational walkthrough",
      "Custom systems map",
      "Prioritized build plan",
      "30-day Q&A support",
    ],
    cta: "Book an Audit",
    highlight: false,
  },
  {
    name: "Foundation Build",
    price: "$5K–$15K",
    cadence: "one-time · scoped",
    description: "We build and deploy your automation stack, scoped to your operation and what you need first.",
    includes: [
      "Everything in the Audit",
      "Up to 3 systems built + deployed",
      "Full PMS + tool integration",
      "Team handoff walkthrough",
      "30 days post-launch support",
    ],
    cta: "Start a Build",
    highlight: true,
  },
  {
    name: "Systems Retainer",
    price: "$2K–$5K",
    cadence: "per month",
    description: "We maintain, expand, and optimize your systems. New workflows added monthly as your portfolio grows.",
    includes: [
      "All active systems maintained",
      "1–2 new workflows per month",
      "Performance monitoring",
      "Priority support",
      "Monthly ops review call",
    ],
    cta: "Get on Retainer",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="pricing" className="py-28 px-6" style={{ background: "#FAFAFA" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0D0D0D" }}>
            Transparent. Scoped. No surprises.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#888" }}>
            Most clients start with the Audit, then move into a Build. The retainer keeps systems running and expanding as you grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="rounded-2xl p-7 flex flex-col bg-white"
              style={{
                border: tier.highlight ? "1.5px solid #E8541C" : "1px solid #EFEFEF",
                boxShadow: tier.highlight
                  ? "0 8px 32px rgba(232,84,28,0.12)"
                  : "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {tier.highlight && (
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full w-fit mb-5"
                  style={{ background: "rgba(232,84,28,0.08)", color: "#E8541C" }}
                >
                  Most popular
                </span>
              )}
              <h3 className="text-base font-bold mb-1" style={{ color: "#0D0D0D" }}>{tier.name}</h3>
              <div className="mb-3">
                <span className="text-3xl font-bold" style={{ color: "#0D0D0D" }}>{tier.price}</span>
                <span className="text-xs ml-2" style={{ color: "#bbb" }}>{tier.cadence}</span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#999", borderBottom: "1px solid #F5F5F5", paddingBottom: "1.25rem" }}>
                {tier.description}
              </p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "#666" }}>
                    <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#E8541C" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/jacob-trivaconsulting/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: tier.highlight ? "#E8541C" : "#F7F7F7",
                  color: tier.highlight ? "#fff" : "#777",
                  boxShadow: tier.highlight ? "0 4px 14px rgba(232,84,28,0.25)" : "none",
                }}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-sm"
          style={{ color: "#ccc" }}
        >
          Month-to-month after the initial build. Systems belong to you. No lock-ins.
        </motion.p>
      </div>
    </section>
  );
}
