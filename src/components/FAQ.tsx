"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I have to switch my PMS?",
    a: "No. We work with whatever you're already running: Guesty, Hostaway, OwnerRez, Hospitable, Lodgify. We integrate with your stack, not against it. Switching your PMS is its own project and we're not part of it.",
  },
  {
    q: "How long does setup take?",
    a: "First systems are typically live in 2 to 3 weeks from the start of a build. Simpler workflows (cleaning dispatch, owner reports) ship faster. The full stack takes 4 to 6 weeks depending on scope.",
  },
  {
    q: "What does it cost?",
    a: "Two parts: a build fee (scoped per system, no surprise add-ons) and an optional monthly retainer for maintenance and new workflows. The build fee depends on what we're constructing — most projects land between $4K and $20K. Retainer is month-to-month. We give you a flat quote after the strategy call so you know what you're paying for. No per-listing fees, no revenue share.",
  },
  {
    q: "What size operation do you work with?",
    a: "STR management companies with 10 units or more. Below that, the ROI on automation doesn't make sense yet. Sweet spot is 20 to 150 units.",
  },
  {
    q: "Will guests know they're talking to AI?",
    a: "Yes — by design. Every AI-drafted reply we build is configured to either be sent under a clearly disclosed assistant identity, or routed through a one-click human approval queue so a real person sends it. Guests rejecting the experience of being deceived is the #1 complaint on Reddit about AI hosting, and we agree with them. Trust is the product.",
  },
  {
    q: "What happens when the AI gets a message wrong?",
    a: "Two safeguards. First, anything sensitive — refunds, complaints, late check-ins, weird edge cases — goes to a human approval queue, never auto-sends. Second, every message has a confidence threshold; low-confidence drafts get flagged. The AI handles simple, high-confidence questions (Wi-Fi, check-in time, parking). It does not handle the ones that can blow up.",
  },
  {
    q: "How is this different from hiring a VA?",
    a: "A VA is a person doing the same task over and over. We build the system that removes the task. A VA gets sick, quits, costs $1.5K to $3K/mo per head, and scales linearly with your portfolio. Our systems run 24/7, scale to 10x volume without extra cost, and stay with you when staff turns over. If you already have a VA, our systems make them dramatically more leveraged.",
  },
  {
    q: "Does this handle trust accounting and owner 1099s?",
    a: "Yes. Owner Monthly Reports reconcile revenue, expenses, and distributions against actual trust balances and push the data into QuickBooks or Xero. At year-end, the data is structured so 1099s and owner tax packets generate cleanly. We're not a replacement for Clearing or VRPlatform if you need full fund accounting, but we connect to them if you already use one.",
  },
  {
    q: "What if Airbnb or my PMS changes their rules?",
    a: "It's a retainer line item. We monitor platform and API changes (Airbnb pricing structure changes, Hostaway API updates, Guesty webhook changes) and patch the systems before they break for you. That's most of what the monthly retainer covers — keeping the systems alive as the platforms shift underneath them.",
  },
  {
    q: "Do you replace tools like Breezeway or Turno?",
    a: "Only if they're not working. If you're on Turno or Breezeway, we automate on top of them. If you're managing cleaners in a WhatsApp group, we replace that with something better. We audit what you have before we build anything.",
  },
  {
    q: "Is this AI or just automation?",
    a: "Both, used selectively. AI does what AI is genuinely good at: classifying messages, drafting context-aware replies, generating market analyses, summarizing maintenance threads. Deterministic automation does everything else: dispatching cleaners, sending reports on schedule, syncing calendars, capturing invoices. We don't use AI as a selling point. We use it where it works.",
  },
  {
    q: "What if I want to cancel?",
    a: "Month-to-month after the initial build is complete. No long-term contracts. The systems we build belong to you — they live in your accounts (Guesty, Hostaway, QuickBooks, Make, n8n) and keep running if you stop the retainer.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: "#fff" }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid", borderColor: open === i ? "#E0E0E0" : "#F0F0F0" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
                style={{ background: open === i ? "#F5F5F5" : "#FAFAFA" }}
              >
                <span className="text-base font-medium pr-4" style={{ color: "#0D0D0D" }}>{faq.q}</span>
                <span style={{ color: "#E8541C", flexShrink: 0 }}>
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ background: "#F5F5F5", overflow: "hidden" }}
                  >
                    <p className="px-6 pb-5 text-base leading-relaxed" style={{ color: "#666" }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
