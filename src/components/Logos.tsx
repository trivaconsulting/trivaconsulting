export default function Logos() {
  const tools = [
    "Guesty", "Hostaway", "OwnerRez", "Hospitable", "PriceLabs", "Breezeway", "Turno", "GoHighLevel",
  ];

  return (
    <section className="py-12 px-6" style={{ background: "#FAFAFA", borderTop: "1px solid #F0F0F0", borderBottom: "1px solid #F0F0F0" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-center mb-7" style={{ color: "#ccc" }}>
          We work with your existing tools
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {tools.map((t) => (
            <span key={t} className="text-sm font-semibold" style={{ color: "#ccc" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
