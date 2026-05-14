"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I have to switch my PMS?",
    a: "No. We work with whatever you're already running — Guesty, Hostaway, OwnerRez, Hospitable. We integrate with your stack, not against it. Switching your PMS is its own project and we're not part of it.",
  },
  {
    q: "How long does setup take?",
    a: "First systems are typically live in 2–3 weeks from the start of a build. Some simpler workflows (cleaning dispatch, owner reports) are faster. The full stack takes 4–6 weeks depending on scope.",
  },
  {
    q: "What size operation do you work with?",
    a: "We work with STR management companies running 10 units or more. Below that, the ROI on automation doesn't make sense yet. Sweet spot is 20–150 units.",
  },
  {
    q: "Is this AI?",
    a: "Some of it. The guest inbox uses AI to classify and draft messages. The owner reports and cleaning dispatch are workflow automation — no AI required, they just work. We use AI where it genuinely helps, not as a selling point.",
  },
  {
    q: "What if I want to cancel?",
    a: "Month-to-month after the initial build is complete. No long-term contracts. The systems we build belong to you — they live in your accounts and keep running if you stop the retainer.",
  },
  {
    q: "Do you replace my existing tools like Breezeway or Turno?",
    a: "Only if they're not working. If you're on Turno or Breezeway, we'll automate on top of them. If you're managing cleaners in a WhatsApp group, we'll replace that with something better. We evaluate what you have before we build anything.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: "#fff" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#E8541C" }}>
            FAQ
          </p>
          <h2 className="text-4xl font-bold" style={{ color: "#0D0D0D" }}>Common questions.</h2>
        </motion.div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.07 * i }}
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
