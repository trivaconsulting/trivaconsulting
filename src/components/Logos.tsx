"use client";

import Image from "next/image";

const tools = [
  { name: "Guesty",       src: "/logos/guesty.svg",       w: 100, h: 30 },
  { name: "Hostaway",     src: "/logos/hostaway.svg",     w: 130, h: 30 },
  { name: "OwnerRez",     src: "/logos/ownerrez.png",     w: 130, h: 21 },
  { name: "Hospitable",   src: "/logos/hospitable.svg",   w: 140, h: 30 },
  { name: "PriceLabs",    src: "/logos/pricelabs.svg",    w: 120, h: 30 },
  { name: "Breezeway",    src: "/logos/breezeway.svg",    w: 140, h: 30 },
  { name: "Turno",        src: "/logos/turno.svg",        w: 90,  h: 30 },
  { name: "GoHighLevel",  src: "/logos/gohighlevel.png",  w: 130, h: 28 },
];

export default function Logos() {
  const items = [...tools, ...tools, ...tools, ...tools, ...tools, ...tools];

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
          animation: scroll-left 55s linear infinite;
        }
        .marquee-inner:hover {
          animation-play-state: paused;
        }
      `}</style>

      <p className="text-xs font-semibold uppercase tracking-widest text-center mb-8" style={{ color: "#ccc" }}>
        Works with your existing stack
      </p>

      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee-inner flex items-center gap-16 w-max">
          {items.map((t, i) => (
            <Image
              key={i}
              src={t.src}
              alt={t.name}
              width={t.w}
              height={t.h}
              style={{
                width: "auto",
                height: t.h,
                maxWidth: 140,
                objectFit: "contain",
                filter: "brightness(0)",
                opacity: 1,
              }}
              unoptimized
            />
          ))}
        </div>
      </div>
    </section>
  );
}
