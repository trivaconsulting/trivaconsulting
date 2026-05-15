"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/site";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pt-3 pb-[max(env(safe-area-inset-bottom),12px)]"
          style={{
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderTop: "1px solid #EEE",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.06)",
          }}
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm"
            style={{
              background: "#E8541C",
              color: "#fff",
              boxShadow: "0 4px 14px rgba(232,84,28,0.35)",
            }}
          >
            Book a Free Strategy Call <ArrowRight size={15} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
