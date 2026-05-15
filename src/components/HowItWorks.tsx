"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    name: "Strategy Audit",
    tag: "30 min · Free",
    tagColor: true,
    description:
      "We learn your operation: your PMS, your team, where time is leaking. We map which systems to build and in what order. No obligation. Most people find it useful regardless.",
  },
  {
    number: "02",
    name: "Foundation Build",
    tag: "2 to 3 weeks",
    tagColor: false,
    description:
      "We build and configure your automation stack. You don't touch anything until it's live. We work directly with your tools, then hand you the keys with a full team walkthrough.",
  },
  {
    number: "03",
    name: "Systems Retainer",
    tag: "Ongoing",
    tagColor: false,
    description:
      "We maintain everything, add new workflows monthly, and scale your systems as your portfolio grows. 40 units or 120, the systems grow with you.",
  },
];

// Smooth C1-continuous path — control points are generous (120-180px from anchors)
// so direction changes are wide and lazy, never sharp. Horizontal tangents at every
// peak and valley mean zero kinks. Spacing between features is deliberately unequal
// so it reads organic rather than periodic.
const FLOW_PATH = [
  "M -80 390",
  "C 100 390, 80 700, 200 700",   // wide flat entry → smooth arc down to valley 1
  "C 340 700, 400 330, 530 330",  // wide departure, wide approach → smooth rise to peak
  "C 640 330, 680 680, 760 680",  // wide departure from peak → smooth drop to valley 2
  "C 840 680, 1000 430, 1100 430", // smooth lazy exit curve
].join(" ");

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative py-28 px-6 bg-white overflow-hidden"
    >
      {/* Flowing orange line — spans the full section, behind everything */}
      <svg
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 750"
        preserveAspectRatio="none"
        fill="none"
        style={{ zIndex: 0 }}
      >
        {/* Outer glow */}
        <motion.path
          d={FLOW_PATH}
          stroke="#E8541C"
          strokeWidth="55"
          strokeLinecap="round"
          opacity={0.05}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.1 }}
        />
        {/* Mid glow */}
        <motion.path
          d={FLOW_PATH}
          stroke="#E8541C"
          strokeWidth="28"
          strokeLinecap="round"
          opacity={0.08}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.1 }}
        />
        {/* Main thick line */}
        <motion.path
          d={FLOW_PATH}
          stroke="#E8541C"
          strokeWidth="14"
          strokeLinecap="round"
          opacity={0.55}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.1 }}
        />
      </svg>

      {/* Content — sits above the path */}
      <div className="max-w-5xl mx-auto relative" style={{ zIndex: 1 }}>

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5" style={{ color: "#0D0D0D" }}>
            We&apos;re not a vendor.{" "}
            <span style={{ color: "#E8541C" }}>We&apos;re your systems team.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "#888" }}>
            Every engagement starts with understanding your operation, then we build,
            deploy, and run the systems ourselves. You never have to touch it.
          </p>
        </motion.div>

        {/* Desktop: 3-col cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.18 }}
            >
              <div
                className="font-black font-mono mb-3 leading-none select-none"
                style={{ fontSize: "3.5rem", color: "#E8541C" }}
              >
                {step.number}
              </div>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "#fff",
                  border: "1px solid #EFEFEF",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <h3 className="text-base font-bold" style={{ color: "#0D0D0D" }}>
                    {step.name}
                  </h3>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full"
                    style={
                      step.tagColor
                        ? { background: "rgba(232,84,28,0.1)", color: "#E8541C" }
                        : { background: "#F5F5F5", color: "#bbb" }
                    }
                  >
                    {step.tag}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="flex flex-col md:hidden">
          {steps.map((step, i) => (
            <div key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.15 }}
              >
                <div
                  className="font-black font-mono mb-3 leading-none select-none"
                  style={{ fontSize: "2.5rem", color: "#E8541C" }}
                >
                  {step.number}
                </div>
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "#fff",
                    border: "1px solid #EFEFEF",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="text-base font-bold" style={{ color: "#0D0D0D" }}>
                      {step.name}
                    </h3>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-full"
                      style={
                        step.tagColor
                          ? { background: "rgba(232,84,28,0.1)", color: "#E8541C" }
                          : { background: "#F5F5F5", color: "#bbb" }
                      }
                    >
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {i < steps.length - 1 && (
                <div className="flex pl-7 py-1">
                  <svg viewBox="0 0 20 40" width="20" height="40" fill="none">
                    <motion.path
                      d="M 10 2 C 2 12, 18 28, 10 38"
                      stroke="#E8541C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="4 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={inView ? { pathLength: 1, opacity: 0.6 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
