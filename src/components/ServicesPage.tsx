"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Wrench,
  Users,
  MessageSquare,
  Calendar,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const systems = [
  {
    icon: FileText,
    name: "Owner Monthly Reports",
    gap: "Fills the gap Guesty's reporting leaves",
    description:
      "Revenue, expenses, maintenance costs, and distributions reconciled against actual trust balances, auto-generated and emailed to owners monthly. Stops the calls that kill trust.",
    outcomes: ["PMS + QuickBooks/Xero", "Trust account reconciliation", "Branded PDF, sent on schedule"],
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
      "STR companies lose 30 to 35% of their portfolio annually. This replaces the spreadsheet: AI-generated market analysis per prospect, automated follow-up, fast onboarding, and a 24/7 AI chat widget for inbound owner inquiries.",
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

function ProcessStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 px-6 border-b" style={{ borderColor: "#F0F0F0", background: "#faf9f7" }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 * i }}
          >
            <p className="text-xs font-mono mb-2" style={{ color: "#E8541C" }}>{step.number}</p>
            <h3 className="text-base font-bold mb-2" style={{ color: "#0D0D0D" }}>{step.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "#888" }}>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SystemsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: "#faf9f7" }}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "#bbb" }}
        >
          Example systems we&apos;ve already built
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="text-base mb-10 max-w-2xl"
          style={{ color: "#999" }}
        >
          These aren&apos;t templates or packages — they&apos;re real systems deployed for real operators. Your build starts from scratch, specific to your stack and your problems.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {systems.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.06 * i }}
                className="rounded-2xl p-6 bg-white flex flex-col"
                style={{
                  border: "1px solid #EFEFEF",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: "rgba(232,84,28,0.08)", color: "#E8541C" }}
                >
                  <Icon size={18} />
                </div>

                <h3 className="text-base font-bold mb-1.5" style={{ color: "#0D0D0D" }}>{s.name}</h3>

                <p
                  className="text-xs font-mono mb-3 pb-3"
                  style={{ color: "#C0C0C0", borderBottom: "1px solid #F5F5F5" }}
                >
                  {s.gap}
                </p>

                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#777" }}>
                  {s.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {s.outcomes.map((o) => (
                    <span
                      key={o}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: "#F7F7F7", color: "#aaa", border: "1px solid #EFEFEF" }}
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PageHero() {
  return (
    <section className="pt-32 pb-0 px-6" style={{ background: "#faf9f7" }}>
      <div className="max-w-5xl mx-auto pb-16 border-b" style={{ borderColor: "#F0F0F0" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.07] tracking-tight mb-6" style={{ color: "#0D0D0D" }}>
            Built for your operation.
            <br />
            <em className="not-italic" style={{ color: "#E8541C" }}>Not anyone else&apos;s.</em>
          </h1>
          <p className="text-xl leading-relaxed max-w-2xl mb-6" style={{ color: "#777" }}>
            We don&apos;t sell packages. We audit your operation, identify the systems that will move the needle, and build them into the tools you already use: Guesty, Hostaway, Hospitable, QuickBooks, whatever your stack is.
          </p>
          <p className="text-base mb-10 font-medium" style={{ color: "#aaa" }}>
            Starts with a free strategy call. No pitch. Just a map of what to build first.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://calendly.com/jacob-trivaconsulting/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#E8541C", color: "#fff", boxShadow: "0 4px 14px rgba(232,84,28,0.3)" }}
            >
              Book Your Free Strategy Call <ArrowRight size={15} />
            </a>
          </div>
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
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#0D0D0D" }}>
            Not sure what you need?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#888" }}>
            That&apos;s exactly what the strategy call is for. We&apos;ll ask the right questions, find the biggest leak in your operation, and hand you a prioritized build plan, whether or not you work with us.
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
        <SystemsGrid />
      </div>
      <BottomCTA />
    </>
  );
}
