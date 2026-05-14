"use client";

export default function Logos() {
  const tools = [
    "Guesty", "Hostaway", "OwnerRez", "Hospitable",
    "PriceLabs", "Breezeway", "Turno", "GoHighLevel",
  ];

  const items = [...tools, ...tools];

  return (
    <section
      className="py-10 overflow-hidden"
      style={{ background: "#FAFAFA", borderTop: "1px solid #F0F0F0", borderBottom: "1px solid #F0F0F0" }}
    >
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: scroll-left 24s linear infinite;
        }
        .marquee-inner:hover {
          animation-play-state: paused;
        }
      `}</style>

      <p className="text-xs font-semibold uppercase tracking-widest text-center mb-7" style={{ color: "#ccc" }}>
        Works with your existing stack
      </p>

      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="marquee-inner flex gap-3 w-max">
          {items.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap"
              style={{ border: "1px solid #EFEFEF", color: "#888", background: "#fff" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#E8541C", opacity: 0.5 }}
              />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
