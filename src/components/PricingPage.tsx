"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Check,
  Layers,
  Plug,
  Wrench,
  Clock,
  ShieldCheck,
  Repeat,
} from "lucide-react";

const factors = [
  {
    icon: Layers,
    title: "Scope of the system",
    body: "A monthly owner report is one build. A full owner-acquisition pipeline with CRM, market analysis, and inbound chat is another. We scope each piece independently so you only pay for what you decide to build.",
  },
  {
    icon: Plug,
    title: "Integrations involved",
    body: "Plugging into a single PMS is one thing. Tying Guesty, QuickBooks, a vendor portal, and your owner statements together is another. Number of systems and quality of their APIs are the biggest cost drivers.",
  },
  {
    icon: Wrench,
    title: "Build vs. ongoing",
    body: "Most engagements have two parts: the one-time build, and an optional monthly fee for maintenance, monitoring, and small changes. Plenty of clients take the build and run it themselves.",
  },
  {
    icon: Clock,
    title: "Timeline & priority",
    body: "Standard builds ship in 2–3 weeks. If something has to be live before a launch, a season, or a board meeting, we can compress — that affects price. Most operators don't need to.",
  },
];

const phases = [
  {
    label: "Free strategy call",
    body: "30 minutes. We map your operation, identify the highest-value system to build first, and tell you what we'd recommend — even if that recommendation is 'don't build anything yet.'",
  },
  {
    label: "Scoped proposal",
    body: "If it makes sense to move forward, we send a written proposal with exact deliverables, a fixed price, and a timeline. No retainers, no estimates, no scope creep.",
  },
  {
    label: "Build & deploy",
    body: "We build the system into your existing stack. You see progress weekly. You sign off when it works the way it should — not when we say it's done.",
  },
  {
    label: "Hand off (or stick around)",
    body: "The system is yours. You can run it in-house, or pay a flat monthly fee for us to maintain it, monitor it, and add to it. Month-to-month. Cancel anytime.",
  },
];

const alwaysIncluded = [
  "Free 30-minute strategy call before any quote",
  "Written proposal with fixed price and clear deliverables",
  "Direct access to the person building your system",
  "Source code and documentation handed over at the end",
  "No per-seat, per-user, or per-property fees",
  "No long-term contracts — month-to-month, cancel anytime",
];

const notPaying = [
  "SaaS subscriptions for software you didn't pick",
  "Platform lock-in or proprietary file formats",
  "Account management layers between you and the builder",
  "Marketing, upsells, or fake urgency",
];

function PageHero() {
  return (
    <section className="pt-24 sm:pt-32 pb-14 sm:pb-20 px-6 relative overflow-hidden" style={{ background: "#faf9f7" }}>
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
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)", color: "#0D0D0D", maxWidth: 760 }}
          >
            Priced around what we&apos;re actually building for you.
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "#777" }}>
            We don&apos;t publish tiered packages because we don&apos;t sell them. Every engagement is
            scoped to the specific systems your operation actually needs — and quoted at a fixed price
            before you commit to anything.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FactorsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 px-6" style={{ background: "#fff" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#bbb" }}>
            What drives the number
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: "#0D0D0D", maxWidth: 560 }}>
            Four things determine the price.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#777", maxWidth: 560 }}>
            Once we know these, we can give you an exact, fixed number — usually within a day of the strategy call.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {factors.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.07 * i }}
                className="p-7 rounded-2xl"
                style={{ background: "#faf9f7", border: "1px solid #EFEAE2" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(232,84,28,0.08)", color: "#E8541C" }}
                >
                  <Icon size={17} />
                </div>
                <h3 className="text-base font-bold mb-2.5" style={{ color: "#0D0D0D" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>{f.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EngagementModel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 px-6" style={{ background: "#faf9f7" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#bbb" }}>
            How an engagement runs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: "#0D0D0D", maxWidth: 560 }}>
            Free call → fixed proposal → build → it&apos;s yours.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {phases.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="grid md:grid-cols-[120px_1fr] gap-5 md:gap-10 p-6 md:p-7 rounded-2xl"
              style={{ background: "#fff", border: "1px solid #EFEAE2" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="font-mono text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#E8541C", color: "#fff" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="md:hidden text-base font-bold" style={{ color: "#0D0D0D" }}>{p.label}</span>
              </div>
              <div>
                <h3 className="hidden md:block text-base font-bold mb-2" style={{ color: "#0D0D0D" }}>{p.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludedSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 px-6" style={{ background: "#fff" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(232,84,28,0.08)", color: "#E8541C" }}
            >
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-2xl font-bold mb-5" style={{ color: "#0D0D0D" }}>What every engagement includes</h3>
            <ul className="flex flex-col gap-3.5">
              {alwaysIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#555" }}>
                  <Check size={13} className="flex-shrink-0 mt-1" style={{ color: "#E8541C" }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "#F4F0EA", color: "#888" }}
            >
              <Repeat size={18} />
            </div>
            <h3 className="text-2xl font-bold mb-5" style={{ color: "#0D0D0D" }}>What you&apos;re not paying for</h3>
            <ul className="flex flex-col gap-3.5">
              {notPaying.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#888" }}>
                  <span
                    className="flex-shrink-0 mt-1.5 w-2.5 h-px"
                    style={{ background: "#CCC" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-xs font-mono uppercase tracking-widest" style={{ color: "#bbb" }}>
              No SaaS. No seats. No lock-in.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6" style={{ background: "#faf9f7" }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-5" style={{ color: "#0D0D0D" }}>
            Want an actual number?
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "#888" }}>
            Book the strategy call. We&apos;ll scope what makes sense for your operation and send a fixed-price proposal within a day.
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

export default function PricingPage() {
  return (
    <>
      <PageHero />
      <FactorsSection />
      <EngagementModel />
      <IncludedSection />
      <BottomCTA />
    </>
  );
}
