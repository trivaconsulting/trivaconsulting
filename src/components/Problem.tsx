"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pains = [
  {
    time: "Sunday, 2pm",
    label: "Owner Reporting",
    head: "Building owner reports by hand. Again.",
    body: "Three hours in a spreadsheet, copying numbers your PMS already has. Every month. Nobody asked you to do it this way.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6M5 21h14a2 2 0 002-2V7l-5-5H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    time: "11:42 PM",
    label: "Guest Comms",
    head: "Guest needs the WiFi password.",
    body: "You've answered this twelve times this month. You wake up to three follow-ups because nobody was monitoring the inbox.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    time: "Monday, 3pm",
    label: "Cleaning Ops",
    head: "Cleaner didn't show.",
    body: "You find out from the guest checking in. The WhatsApp thread has 47 unread messages. Nobody confirmed the job.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
  },
  {
    time: "Three weeks ago",
    label: "Review Management",
    head: "3-star review. Still no response.",
    body: "You saw it. You meant to reply. You didn't know what to say. It's still sitting there affecting your ranking.",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#E8541C" }}>
            The problem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "#0D0D0D" }}>
            You already have
            <br />the software.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#777" }}>
            Guesty. Hostaway. OwnerRez. The PMS isn&apos;t broken.
            The workflows around it are. Every day you&apos;re filling the gaps manually.
          </p>
        </motion.div>

        {/* 4-column pain cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {pains.map((p, i) => (
            <motion.div
              key={p.time}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                background: "#fff",
                border: "1px solid #EAEAEA",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              {/* Icon + label row */}
              <div className="flex items-center gap-2.5 mb-5">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0"
                  style={{ background: "rgba(232,84,28,0.08)", color: "#E8541C" }}
                >
                  {p.icon}
                </span>
                <span className="text-xs font-semibold" style={{ color: "#aaa" }}>
                  {p.label}
                </span>
              </div>

              {/* Body */}
              <h3 className="text-base font-bold leading-snug mb-2.5" style={{ color: "#111" }}>
                {p.head}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#888" }}>
                {p.body}
              </p>

              {/* Timestamp footer */}
              <div
                className="mt-5 pt-4 text-xs font-mono"
                style={{ color: "#E8541C", borderTop: "1px solid #F2F2F2" }}
              >
                {p.time}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "#fff",
            border: "1px solid rgba(232,84,28,0.18)",
          }}
        >
          <p className="text-sm font-medium text-center sm:text-left" style={{ color: "#555" }}>
            The tools exist. The systems don&apos;t.{" "}
            <span style={{ color: "#E8541C" }}>That&apos;s the gap we fill.</span>
          </p>
          <a
            href="https://calendly.com/jacob-trivaconsulting/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "#E8541C", color: "#fff", boxShadow: "0 4px 12px rgba(232,84,28,0.25)" }}
          >
            Fix the workflows →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
