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
  Check,
  ArrowRight,
} from "lucide-react";

const systems = [
  {
    icon: FileText,
    name: "Owner Monthly Reports",
    tag: "Eliminates: 8–15 hrs/month manual close",
    description:
      "Clean, branded owner statements auto-generated from your PMS and accounting data. Revenue, expenses, maintenance costs, and distributions reconciled against actual trust balances — and emailed to owners on schedule. Stops the 'where did my money go?' calls that erode trust and cause churn.",
    outcomes: [
      "Pulls from PMS + QuickBooks/Xero",
      "Trust account reconciliation",
      "Branded PDF, no template editing",
      "Owners stop calling, owners stop leaving",
    ],
  },
  {
    icon: Wrench,
    name: "Maintenance Coordination Loop",
    tag: "Saves: $12+/door/month in labor",
    description:
      "Guest reports an issue → vendor auto-notified → follow-up reminders sent if no response → alternative vendor queued → invoice captured and pushed to owner statement automatically. The full loop runs without a manager in it until a real decision is needed.",
    outcomes: [
      "Multi-vendor dispatch with fallback",
      "Automated follow-up cadence",
      "Invoice captured → owner statement",
      "Closes the loop without manual tracking",
    ],
  },
  {
    icon: Users,
    name: "Owner Acquisition Pipeline",
    tag: "Addresses: 30–35% annual portfolio churn",
    description:
      "STR companies lose a third of their units every year — owners selling, self-managing, switching. This system replaces the spreadsheet with a full CRM pipeline: AI-generated market analysis per prospect, automated follow-up sequences, fast onboarding, and an AI chat widget for inbound owner inquiries running 24/7.",
    outcomes: [
      "Lead capture + automated follow-up",
      "Market analysis auto-generated per property",
      "Onboarding checklist automated",
      "AI chat for owner inquiries 24/7",
    ],
  },
  {
    icon: MessageSquare,
    name: "AI Guest Inbox",
    tag: "Handles: 70%+ of messages automatically",
    description:
      "Not canned replies. Context-aware AI that knows the property, the booking, and the situation. Simple questions answered immediately. Noise complaints, late check-ins, flooded bathrooms — drafted for one-click approval. Negative review responses written and ready to post.",
    outcomes: [
      "Context-aware, property-specific responses",
      "Human review queue for edge cases",
      "Unified inbox across all OTAs",
      "Post-checkout review solicitation",
    ],
  },
  {
    icon: Calendar,
    name: "Booking Integrity Monitor",
    tag: "Prevents: Double-booking liability",
    description:
      "Cross-channel calendar verification running continuously. Hostaway sync delays, Lodgify reservation alterations that didn't propagate, booking pace anomalies — caught before a guest shows up with nowhere to stay. You get an alert and context, not a problem you're already in.",
    outcomes: [
      "Continuous sync verification",
      "Conflict detection before check-in",
      "Booking pace anomaly alerts",
      "Multi-channel rate audit",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Compliance Calendar",
    tag: "Covers: Permit renewals + tax deadlines",
    description:
      "STR regulations changed in 50+ U.S. cities in the past 18 months. Permit expirations, occupancy tax deadlines, and platform-specific compliance requirements tracked automatically. Alerts sent 30, 14, and 3 days out. One missed permit renewal can shut down a property.",
    outcomes: [
      "Permit renewal reminders",
      "Occupancy tax deadline tracking",
      "Multi-market regulatory calendar",
      "Alerts 30, 14, and 3 days out",
    ],
  },
];

const packages = [
  {
    name: "Starter Ops",
    units: "15–50 units",
    price: "$1,200",
    cadence: "/mo",
    description:
      "Core automation for growing companies. Reduce manual hours and stop owner churn before it compounds.",
    includes: [
      "Owner Monthly Reports",
      "Maintenance Coordination Loop",
      "AI Guest Inbox",
      "Onboarding + team handoff",
      "30-day post-launch support",
    ],
    cta: "Start Here",
    highlight: false,
  },
  {
    name: "Growth Stack",
    units: "50–150 units",
    price: "$2,500",
    cadence: "/mo",
    description:
      "Full ops plus a working pipeline for new properties. Built for companies actively scaling their portfolio.",
    includes: [
      "Everything in Starter Ops",
      "Owner Acquisition Pipeline",
      "Booking Integrity Monitor",
      "Monthly performance review call",
      "1–2 new workflows added monthly",
    ],
    cta: "Book a Strategy Call",
    highlight: true,
  },
  {
    name: "Ops Command",
    units: "100–500 units / multi-market",
    price: "$4,500",
    cadence: "/mo",
    description:
      "Enterprise-grade automation for established operators running multiple markets or brands.",
    includes: [
      "All six systems deployed",
      "Compliance Calendar",
      "White-labeled owner portal",
      "Revenue ops reporting (ADR, RevPAR, occupancy by property)",
      "Priority support + monthly strategy call",
    ],
    cta: "Talk to Us",
    highlight: false,
  },
];

function SystemsList() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "#0D0D0D" }}>
            Six systems.
            <br />
            <span style={{ color: "#C0C0C0" }}>Built for how you actually operate.</span>
          </h2>
          <p className="text-lg" style={{ color: "#888" }}>
            Every system installs into your existing PMS, accounting tool, and workflows. We don&apos;t hand you a platform — we hand you a running operation.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {systems.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.07 * i }}
                className="rounded-2xl p-7 bg-white"
                style={{
                  border: "1px solid #EFEFEF",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div className="md:flex gap-8 items-start">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mb-4 md:mb-0"
                    style={{ background: "rgba(232,84,28,0.08)", color: "#E8541C" }}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="md:flex items-center gap-4 mb-3">
                      <h3 className="text-lg font-bold" style={{ color: "#0D0D0D" }}>{s.name}</h3>
                      <span
                        className="inline-block text-xs font-mono mt-1 md:mt-0 px-2.5 py-1 rounded-full"
                        style={{ background: "#F5F5F5", color: "#bbb" }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#777" }}>{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.outcomes.map((o) => (
                        <span
                          key={o}
                          className="text-xs px-3 py-1.5 rounded-full font-medium"
                          style={{ background: "#F7F7F7", color: "#999", border: "1px solid #EFEFEF" }}
                        >
                          {o}
                        </span>
                      ))}
                    </div>
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

function Packages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: "#FAFAFA" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0D0D0D" }}>
            Pick your scale.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#888" }}>
            Every package is a complete deployment — not a license. We build it, integrate it, and hand you the keys.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="rounded-2xl p-7 flex flex-col bg-white"
              style={{
                border: pkg.highlight ? "1.5px solid #E8541C" : "1px solid #EFEFEF",
                boxShadow: pkg.highlight
                  ? "0 8px 32px rgba(232,84,28,0.12)"
                  : "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {pkg.highlight && (
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full w-fit mb-5"
                  style={{ background: "rgba(232,84,28,0.08)", color: "#E8541C" }}
                >
                  Most popular
                </span>
              )}
              <h3 className="text-base font-bold mb-0.5" style={{ color: "#0D0D0D" }}>{pkg.name}</h3>
              <p className="text-xs mb-3 font-mono" style={{ color: "#bbb" }}>{pkg.units}</p>
              <div className="mb-3">
                <span className="text-3xl font-bold" style={{ color: "#0D0D0D" }}>{pkg.price}</span>
                <span className="text-xs ml-1" style={{ color: "#bbb" }}>{pkg.cadence}</span>
              </div>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "#999", borderBottom: "1px solid #F5F5F5", paddingBottom: "1.25rem" }}
              >
                {pkg.description}
              </p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {pkg.includes.map((item) => (
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
                  background: pkg.highlight ? "#E8541C" : "#F7F7F7",
                  color: pkg.highlight ? "#fff" : "#777",
                  boxShadow: pkg.highlight ? "0 4px 14px rgba(232,84,28,0.25)" : "none",
                }}
              >
                {pkg.cta}
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

function PageHero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <p className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: "#E8541C" }}>
            What We Build
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.07] tracking-tight mb-6" style={{ color: "#0D0D0D" }}>
            Automation systems for
            <br />
            <em className="not-italic" style={{ color: "#E8541C" }}>STR management companies.</em>
          </h1>
          <p className="text-xl leading-relaxed max-w-2xl mb-10" style={{ color: "#777" }}>
            We build the systems that eliminate your manual work, stop owner churn, and let you scale without adding headcount. Every system installs into your existing stack — no new software to learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
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
              href="#packages"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-gray-50"
              style={{ color: "#555", border: "1px solid #e5e5e5" }}
            >
              See packages
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
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#0D0D0D" }}>
            Not sure where to start?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#888" }}>
            Most clients start with a 30-minute strategy call. We map your operation, find the highest-value leak, and tell you exactly what to build first — useful whether or not you work with us.
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
      <div id="systems">
        <SystemsList />
      </div>
      <div id="packages">
        <Packages />
      </div>
      <BottomCTA />
    </>
  );
}
