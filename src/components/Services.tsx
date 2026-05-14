"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, FileText, Bot, Star, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Users,
    name: "Cleaning Dispatch",
    tag: "Replaces: WhatsApp group",
    description:
      "Booking confirmed → cleaners auto-notified. Checklists, photo submissions, and escalation built in. If the clean isn't confirmed before checkin, you're alerted before the guest arrives.",
    outcomes: ["Triggered on every booking event", "Photo check-in required", "Escalation before checkin"],
  },
  {
    icon: FileText,
    name: "Owner Report Pipeline",
    tag: "Replaces: 8–15 hrs/month manual work",
    description:
      "Revenue, occupancy, expenses, maintenance notes — pulled from your PMS and accounting tool, formatted, branded, and emailed to owners automatically every month. They stop calling because they already have the answer.",
    outcomes: ["Pulls from PMS + QuickBooks", "Branded and readable", "Sends itself on schedule"],
  },
  {
    icon: Bot,
    name: "AI Guest Inbox",
    tag: "Replaces: Late-night manual responses",
    description:
      "Every message classified in under a minute. Simple questions answered automatically in your voice. Complex ones drafted and waiting for your one-click approval. Guests get a fast response. You get to sleep.",
    outcomes: ["All OTAs unified", "Drafts reviewed before sending", "Handles 70%+ automatically"],
  },
  {
    icon: Star,
    name: "Review Monitor + Response",
    tag: "Replaces: Reviews you forgot about",
    description:
      "Unified feed across Airbnb, VRBO, Booking.com, and Google. Post-checkout review requests sent automatically. Responses drafted and ready to post. Alerts when a property drops below your threshold.",
    outcomes: ["All platforms in one feed", "Auto-request post-checkout", "Rating threshold alerts"],
  },
  {
    icon: MessageSquare,
    name: "Owner Acquisition CRM",
    tag: "Replaces: Spreadsheet of cold leads",
    description:
      "Full GoHighLevel pipeline for signing new property owners. Automated follow-up sequences, intake forms, a discovery call funnel, and an AI chat widget on your site — running while you're at the property.",
    outcomes: ["GoHighLevel configured for you", "Email + SMS sequences", "AI chat for owner inquiries"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="services" className="py-28 px-6" style={{ background: "#FAFAFA" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-xl mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#E8541C" }}>
            The Triva Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "#0D0D0D" }}>
            Five systems.
            <br />
            <span style={{ color: "#C0C0C0" }}>Built and running in weeks.</span>
          </h2>
          <p className="text-lg" style={{ color: "#888" }}>
            We don&apos;t hand you a platform and a tutorial. We build each one into your existing stack and hand you the keys.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 * i }}
                className="rounded-2xl p-7 bg-white group"
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
