"use client";

import { useState } from "react";

const tools = [
  { name: "Guesty",       domain: "guesty.com" },
  { name: "Hostaway",     domain: "hostaway.com" },
  { name: "OwnerRez",     domain: "ownerrez.com" },
  { name: "Hospitable",   domain: "hospitable.com" },
  { name: "PriceLabs",    domain: "pricelabs.co" },
  { name: "Breezeway",    domain: "breezeway.io" },
  { name: "Turno",        domain: "turno.com" },
  { name: "GoHighLevel",  domain: "gohighlevel.com" },
];

function LogoItem({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="text-sm font-semibold whitespace-nowrap tracking-wide"
        style={{ color: "#bbb" }}
      >
        {name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://logos.apistemic.com/${domain}`}
      alt={name}
      onError={() => setFailed(true)}
      style={{
        height: 30,
        width: "auto",
        maxWidth: 130,
        objectFit: "contain",
        filter: "grayscale(100%)",
        opacity: 0.45,
      }}
    />
  );
}

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
            <LogoItem key={i} name={t.name} domain={t.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
