import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FAQPage from "@/components/FAQPage";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumb } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "FAQ — STR Automation Questions, Answered",
  description:
    "Common questions about Triva's automation systems for short-term rental managers: pricing, setup time, PMS compatibility (Guesty, Hostaway, OwnerRez), AI transparency, trust accounting, and cancellation.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — STR Automation Questions, Answered | Triva",
    description:
      "Pricing, setup, AI transparency, trust accounting, PMS compatibility, and more — the questions we hear before every Triva strategy call.",
    url: `${SITE_URL}/faq`,
    type: "website",
  },
};

export default function FAQ() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema,
          breadcrumb([
            { name: "Home", url: SITE_URL },
            { name: "FAQ", url: `${SITE_URL}/faq` },
          ]),
        ]}
      />
      <Nav />
      <main>
        <FAQPage />
      </main>
      <Footer />
    </>
  );
}
