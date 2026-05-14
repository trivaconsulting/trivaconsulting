"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pains = [
  {
    time: "Sunday, 2pm",
    head: "Building owner reports by hand. Again.",
    body: "Three hours in a spreadsheet, copying numbers your PMS already has. Every month. Nobody asked you to do it this way.",
  },
  {
    time: "11:42 PM",
    head: "Guest needs the WiFi password.",
    body: "You've answered this twelve times this month. You wake up to three follow-ups because nobody was monitoring the inbox.",
  },
  {
    time: "Monday, 3pm",
    head: "Cleaner didn't show.",
    body: "You find out from the guest checking in. The WhatsApp thread has 47 unread messages. Nobody confirmed the job.",
  },
  {
    time: "Three weeks ago",
    head: "3-star review. Still no response.",
    body: "You saw it. You meant to reply. You didn't know what to say. It's still sitting there affecting your ranking.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="md:sticky md:top-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5" style={{ color: "#0D0D0D" }}>
              You already have
              the software.
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#888" }}>
              Guesty. Hostaway. OwnerRez. The PMS isn&apos;t broken. The workflows
              around it are. Every day you&apos;re filling the gaps manually.
            </p>
            <div
              className="inline-block px-5 py-3 rounded-xl text-sm font-medium"
              style={{ background: "rgba(232,84,28,0.06)", color: "#E8541C", border: "1px solid rgba(232,84,28,0.12)" }}
            >
              The tools exist. The systems don&apos;t. That&apos;s the gap we fill.
            </div>
          </motion.div>

          {/* Right: pain cards */}
          <div className="flex flex-col gap-4">
            {pains.map((p, i) => (
              <motion.div
                key={p.time}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="rounded-2xl p-6"
                style={{
                  background: "#fff",
                  border: "1px solid #EFEFEF",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <p className="text-xs font-mono mb-3" style={{ color: "#E8541C" }}>{p.time}</p>
                <h3 className="text-base font-semibold mb-2" style={{ color: "#1a1a1a" }}>{p.head}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
