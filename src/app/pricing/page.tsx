import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingPage from "@/components/PricingPage";
import JsonLd from "@/components/JsonLd";
import { professionalServiceSchema, breadcrumb } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Pricing — Fixed-Price STR Automation Builds",
  description:
    "How Triva prices engagements: free 30-minute strategy call, fixed-price builds typically $4K–$20K, optional month-to-month retainer. No per-listing fees, no revenue share, no long-term contracts.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Fixed-Price STR Automation Builds | Triva",
    description:
      "Free strategy call, fixed-price proposals, no SaaS lock-in, no per-seat fees, no long-term contracts.",
    url: `${SITE_URL}/pricing`,
    type: "website",
  },
};

export default function Pricing() {
  return (
    <>
      <JsonLd
        data={[
          professionalServiceSchema,
          breadcrumb([
            { name: "Home", url: SITE_URL },
            { name: "Pricing", url: `${SITE_URL}/pricing` },
          ]),
        ]}
      />
      <Nav />
      <main>
        <PricingPage />
      </main>
      <Footer />
    </>
  );
}
