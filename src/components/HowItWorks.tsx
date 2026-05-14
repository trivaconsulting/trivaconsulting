"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    name: "Strategy Audit",
    tag: "30 min · Free",
    description:
      "We learn your operation: your PMS, your team, where time is leaking. We map which systems to build and in what order. No obligation. Most people find it useful regardless.",
  },
  {
    number: "02",
    name: "Foundation Build",
    tag: "2 to 3 weeks",
    description:
      "We build and configure your automation stack. You don't touch anything until it's live. We work directly with your tools, then hand you the keys with a full team walkthrough.",
  },
  {
    number: "03",
    name: "Systems Retainer",
    tag: "Ongoing",
    description:
      "We maintain everything, add new workflows monthly, and scale your systems as your portfolio grows. 40 units or 120, the systems grow with you.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="how-it-works" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5" style={{ color: "#0D0D0D" }}>
              We&apos;re not a vendor.
              <br />
              <span style={{ color: "#E8541C" }}>We&apos;re your systems team.</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#888" }}>
              Every engagement starts with understanding your operation, then we build,
              deploy, and run the systems ourselves. You never have to touch it.
            </p>
          </motion.div>

          {/* Right: steps */}
          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className="flex gap-5 items-start rounded-2xl p-6"
                style={{
                  background: "#fff",
                  border: "1px solid #EFEFEF",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold"
                  style={{
                    background: i === 0 ? "#E8541C" : "#F5F5F5",
                    color: i === 0 ? "#fff" : "#ccc",
                  }}
                >
                  {step.number}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-bold" style={{ color: "#0D0D0D" }}>{step.name}</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ background: "#F5F5F5", color: "#bbb" }}>
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#888" }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
