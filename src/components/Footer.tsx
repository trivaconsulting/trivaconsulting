import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t px-6 py-10" style={{ borderColor: "#EBEBEB", background: "#fff" }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/logo-black.png"
          alt="Triva"
          width={80}
          height={28}
          className="h-7 w-auto opacity-50"
        />
        <div className="flex gap-8">
          <a href="#services" className="text-sm transition-colors hover:text-[#0D0D0D]" style={{ color: "#bbb" }}>
            Services
          </a>
          <a href="#how-it-works" className="text-sm transition-colors hover:text-[#0D0D0D]" style={{ color: "#bbb" }}>
            How It Works
          </a>
          <a href="#pricing" className="text-sm transition-colors hover:text-[#0D0D0D]" style={{ color: "#bbb" }}>
            Pricing
          </a>
          <a href="#contact" className="text-sm transition-colors hover:text-[#0D0D0D]" style={{ color: "#bbb" }}>
            Contact
          </a>
        </div>
        <p className="text-xs" style={{ color: "#ddd" }}>
          © {new Date().getFullYear()} Triva. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
