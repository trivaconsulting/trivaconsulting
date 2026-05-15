export const SITE_URL = "https://trivaconsulting.com";
export const SITE_NAME = "Triva";
export const SITE_LEGAL_NAME = "Triva Consulting";
export const SITE_TAGLINE = "Automation systems for short-term rental management companies";
export const SITE_DESCRIPTION =
  "Triva builds the automation systems that short-term rental (STR) management companies use to run leaner, retain owners, and scale without hiring. Done-for-you AI and automation for Guesty, Hostaway, OwnerRez, and Hospitable.";

export const FOUNDER_NAME = "Jacob Willard";
export const FOUNDER_EMAIL = "jacob@trivaconsulting.com";
export const CALENDLY_URL = "https://calendly.com/jacob-trivaconsulting/30min";

export const KEYWORDS = [
  "STR automation",
  "short-term rental automation",
  "vacation rental automation",
  "Guesty automation",
  "Hostaway automation",
  "OwnerRez automation",
  "Hospitable automation",
  "STR management software",
  "STR owner reports",
  "AI guest messaging",
  "property management automation",
  "STR consulting",
  "vacation rental consulting",
  "STR AI agent",
  "done-for-you STR automation",
];

export const SERVICES = [
  {
    slug: "owner-monthly-reports",
    name: "Owner Monthly Reports",
    description:
      "Auto-generated owner statements reconciling revenue, expenses, maintenance costs, and distributions against actual trust balances. Branded PDF, sent on schedule. Replaces 8 to 15 hours of monthly spreadsheet work.",
  },
  {
    slug: "maintenance-coordination",
    name: "Maintenance Coordination Loop",
    description:
      "Guest reports issue, vendor dispatched, follow-ups sent, invoice captured and pushed to owner statement. The full maintenance loop without a manager in the middle.",
  },
  {
    slug: "owner-acquisition-pipeline",
    name: "Owner Acquisition Pipeline",
    description:
      "Replaces the prospect spreadsheet: AI-generated market analysis per prospect, automated follow-up, fast onboarding, and a 24/7 AI chat widget for inbound owner inquiries.",
  },
  {
    slug: "ai-guest-inbox",
    name: "AI Guest Inbox",
    description:
      "Context-aware guest messaging across all OTAs. Simple questions answered instantly. Edge cases drafted for one-click human approval. Post-checkout review requests automated.",
  },
  {
    slug: "booking-integrity-monitor",
    name: "Booking Integrity Monitor",
    description:
      "Continuous cross-channel calendar verification. Catches sync gaps, reservation alterations, and booking pace anomalies before a guest shows up to a double-booked unit.",
  },
  {
    slug: "compliance-calendar",
    name: "Compliance Calendar",
    description:
      "Multi-market regulatory tracking. Permit renewals, occupancy tax deadlines, and platform requirements with alerts at 30, 14, and 3 days out.",
  },
] as const;

export const FAQS = [
  {
    q: "Do I have to switch my PMS?",
    a: "No. Triva works with whatever PMS you already run: Guesty, Hostaway, OwnerRez, Hospitable, or Lodgify. We integrate with your existing stack rather than replacing it. Switching your PMS is its own project and we are not part of it.",
  },
  {
    q: "How long does setup take?",
    a: "First systems are typically live in 2 to 3 weeks from the start of a build. Simpler workflows like cleaning dispatch or owner reports ship faster. The full automation stack takes 4 to 6 weeks depending on scope.",
  },
  {
    q: "What does Triva cost?",
    a: "Two parts: a fixed build fee scoped per system, and an optional monthly retainer for maintenance and new workflows. Most projects land between $4,000 and $20,000 to build. Retainer is month-to-month. No per-listing fees, no revenue share, no long-term contracts.",
  },
  {
    q: "What size operation does Triva work with?",
    a: "Short-term rental management companies with 10 units or more. Below 10 units the ROI on automation does not yet make sense. Sweet spot is 20 to 150 units.",
  },
  {
    q: "Will guests know they are talking to AI?",
    a: "Yes, by design. Every AI-drafted reply is configured to either be sent under a clearly disclosed assistant identity, or routed through a one-click human approval queue so a real person sends it. Trust is the product.",
  },
  {
    q: "What happens when the AI gets a message wrong?",
    a: "Two safeguards. First, anything sensitive — refunds, complaints, late check-ins, edge cases — goes to a human approval queue and never auto-sends. Second, every message has a confidence threshold and low-confidence drafts get flagged. The AI handles simple high-confidence questions like Wi-Fi, check-in time, and parking.",
  },
  {
    q: "How is Triva different from hiring a virtual assistant?",
    a: "A VA is a person doing the same task over and over. Triva builds the system that removes the task. A VA gets sick, quits, costs $1,500 to $3,000 per month per head, and scales linearly. Our systems run 24/7, scale to 10x volume without extra cost, and stay with you when staff turns over.",
  },
  {
    q: "Does Triva handle trust accounting and owner 1099s?",
    a: "Yes. Owner Monthly Reports reconcile revenue, expenses, and distributions against actual trust balances and push the data into QuickBooks or Xero. At year-end the data is structured so 1099s and owner tax packets generate cleanly.",
  },
  {
    q: "What if Airbnb or my PMS changes their rules?",
    a: "It is a retainer line item. Triva monitors platform and API changes — Airbnb pricing structure changes, Hostaway API updates, Guesty webhook changes — and patches the systems before they break for you. That is most of what the monthly retainer covers.",
  },
  {
    q: "Does Triva replace tools like Breezeway or Turno?",
    a: "Only if they are not working for you. If you are already on Turno or Breezeway, Triva automates on top of them. If you are managing cleaners in a WhatsApp group, we replace that with something better.",
  },
  {
    q: "Is this AI or just automation?",
    a: "Both, used selectively. AI classifies messages, drafts context-aware replies, generates market analyses, and summarizes maintenance threads. Deterministic automation handles dispatching cleaners, sending reports on schedule, syncing calendars, and capturing invoices.",
  },
  {
    q: "What if I want to cancel?",
    a: "Month-to-month after the initial build is complete. No long-term contracts. The systems Triva builds belong to you — they live in your accounts (Guesty, Hostaway, QuickBooks, Make, n8n) and keep running if you stop the retainer.",
  },
] as const;
