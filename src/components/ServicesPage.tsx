"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FileText,
  Wrench,
  Users,
  MessageSquare,
  Calendar,
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";

const systems = [
  {
    icon: FileText,
    name: "Owner Monthly Reports",
    gap: "Fills the gap Guesty's reporting leaves",
    description:
      "Revenue, expenses, maintenance costs, and distributions reconciled against actual trust balances, auto-generated and emailed to owners monthly. Stops the calls that kill trust.",
    outcomes: ["PMS + QuickBooks/Xero sync", "Trust account reconciliation", "Branded PDF, sent on schedule"],
  },
  {
    icon: Wrench,
    name: "Maintenance Coordination Loop",
    gap: "Goes where Breezeway stops",
    description:
      "Guest reports issue → vendor dispatched → follow-ups sent automatically → invoice captured and pushed to owner statement. The full loop, without a manager in the middle.",
    outcomes: ["Multi-vendor dispatch + fallback", "Auto follow-up cadence", "Invoice → owner statement"],
  },
  {
    icon: Users,
    name: "Owner Acquisition Pipeline",
    gap: "The CRM Guesty and Hostaway don't include",
    description:
      "STR companies lose 30–35% of their portfolio annually. This replaces the spreadsheet: AI-generated market analysis per prospect, automated follow-up, fast onboarding, and a 24/7 AI chat widget for inbound owner inquiries.",
    outcomes: ["Lead capture + follow-up sequences", "Market analysis auto-generated", "Onboarding checklist automated"],
  },
  {
    icon: MessageSquare,
    name: "AI Guest Inbox",
    gap: "Context-aware, not Hospitable-style templates",
    description:
      "Knows the property, the booking, and the situation. Simple questions answered instantly. Noise complaints, late check-ins, edge cases drafted for one-click approval. Negative reviews written and ready to post.",
    outcomes: ["Unified inbox across all OTAs", "Human review queue for edge cases", "Post-checkout review requests"],
  },
  {
    icon: Calendar,
    name: "Booking Integrity Monitor",
    gap: "Catches what Hostaway's 30-min sync misses",
    description:
      "Cross-channel calendar verification running continuously. Sync gaps, reservation alterations that didn't propagate, booking pace anomalies caught before a guest shows up with nowhere to stay.",
    outcomes: ["Continuous sync verification", "Conflict detection before check-in", "Booking pace anomaly alerts"],
  },
  {
    icon: ShieldCheck,
    name: "Compliance Calendar",
    gap: "What no PMS tracks",
    description:
      "STR laws changed in 50+ U.S. cities in the past 18 months. Permit expirations, occupancy tax deadlines, and platform requirements tracked automatically. Alerts at 30, 14, and 3 days out.",
    outcomes: ["Permit renewal reminders", "Occupancy tax deadline tracking", "Multi-market regulatory calendar"],
  },
];

const steps = [
  {
    number: "01",
    title: "Free Strategy Call",
    description: "We map your operation, find the highest-value bottleneck, and tell you exactly what to build first. Useful whether or not you work with us.",
  },
  {
    number: "02",
    title: "Custom Build",
    description: "We build the system into your existing stack: Guesty, Hostaway, QuickBooks, whatever you use. No new software to learn.",
  },
  {
    number: "03",
    title: "It's Yours",
    description: "You run it. Month-to-month. No lock-in. The systems belong to you.",
  },
];

function PageHero() {
  return (
    <section className="pt-24 sm:pt-32 pb-14 sm:pb-24 px-6 relative overflow-hidden" style={{ background: "#faf9f7" }}>
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,84,28,0.05) 0%, transparent 65%)" }}
      />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="font-bold leading-[1.05] tracking-tight mb-7"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)", color: "#0D0D0D", maxWidth: 720 }}
          >
            The back office your PMS was never going to build.
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "#777" }}>
            Custom automation that plugs into Guesty, Hostaway, QuickBooks, and whatever else you run. We build it, maintain it, and hand you the keys.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const progressPct =
    steps.length > 1 ? (activeIndex / (steps.length - 1)) * 100 : 0;

  return (
    <section ref={ref} className="py-12 sm:py-16 px-6" style={{ background: "#fff", borderBottom: "1px solid #EFEFEF" }}>
      <div className="max-w-5xl mx-auto">
        <div className="relative flex flex-col md:flex-row gap-10 md:gap-0">
          <div
            className="hidden md:block absolute"
            style={{ top: 20, left: "16.6667%", right: "16.6667%", height: 1, background: "#F0F0F0" }}
          />
          <div
            className="hidden md:block absolute"
            style={{
              top: 20,
              left: "16.6667%",
              width: `calc(66.6667% * ${progressPct / 100})`,
              height: 1,
              background: "#E8541C",
              transition: "width 0.4s ease",
            }}
          />
          {steps.map((step, i) => {
            const isActive = i <= activeIndex;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.13 * i }}
                className="flex-1 md:px-8 relative z-10 md:text-center"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={isActive}
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold mb-5 flex-shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8541C]/40 md:mx-auto"
                  style={{
                    background: isActive ? "#E8541C" : "#fff",
                    color: isActive ? "#fff" : "#ccc",
                    border: isActive ? "none" : "1px solid #E8E8E8",
                    transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  {step.number}
                </button>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#0D0D0D" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#999" }}>{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SystemsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="systems" className="py-16 sm:py-24 px-6" style={{ background: "#faf9f7" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#bbb" }}>
            Examples of past work
          </p>
          <h2 className="text-4xl font-bold leading-tight mb-4" style={{ color: "#0D0D0D", maxWidth: 560 }}>
            A few systems we&apos;ve built. Not the limit of what we do.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#777", maxWidth: 560 }}>
            These are real builds from past engagements — picked because each one fills a specific operational gap. Your stack and bottlenecks are different. We build whatever the highest-value system is for your operation.
          </p>
        </motion.div>

        <div style={{ borderTop: "1px solid #EBEBEB" }}>
          {systems.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.42, delay: 0.07 * i }}
                className="py-8 sm:py-10 grid md:grid-cols-2 gap-6 md:gap-16"
                style={{ borderBottom: "1px solid #EBEBEB" }}
              >
                {/* Left col */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(232,84,28,0.08)", color: "#E8541C" }}
                      >
                        <Icon size={16} />
                      </div>
                      <h3 className="text-base font-bold" style={{ color: "#0D0D0D" }}>{s.name}</h3>
                    </div>
                    <span
                      className="inline-block text-xs font-mono px-2.5 py-1 rounded"
                      style={{ background: "rgba(232,84,28,0.07)", color: "#C04010" }}
                    >
                      {s.gap}
                    </span>
                  </div>
                </div>

                {/* Right col */}
                <div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#666" }}>{s.description}</p>
                  <div className="flex flex-col gap-2">
                    {s.outcomes.map((o) => (
                      <div key={o} className="flex items-start gap-2.5">
                        <Check size={12} className="mt-0.5 flex-shrink-0" style={{ color: "#E8541C" }} />
                        <span className="text-xs leading-relaxed" style={{ color: "#888" }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6" style={{ background: "#fff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-5" style={{ color: "#0D0D0D" }}>
            Not sure what you need?
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "#888" }}>
            That&apos;s exactly what the strategy call is for. We&apos;ll find the biggest leak in your operation and hand you a prioritized build plan — whether or not you work with us.
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

export default function ServicesPage() {
  return (
    <>
      <PageHero />
      <ProcessStrip />
      <div id="systems">
        <SystemsSection />
      </div>
      <BottomCTA />
    </>
  );
}
