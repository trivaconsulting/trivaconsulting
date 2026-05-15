import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesPage from "@/components/ServicesPage";
import JsonLd from "@/components/JsonLd";
import { professionalServiceSchema, breadcrumb } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "What We Build — STR Automation Systems",
  description:
    "Six automation systems Triva builds for short-term rental management companies: owner monthly reports, maintenance coordination, owner acquisition pipeline, AI guest inbox, booking integrity monitor, and compliance calendar.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "What We Build — STR Automation Systems | Triva",
    description:
      "Six automation systems for STR property managers, built on top of Guesty, Hostaway, OwnerRez, and Hospitable.",
    url: `${SITE_URL}/services`,
    type: "website",
  },
};

export default function Services() {
  return (
    <>
      <JsonLd
        data={[
          professionalServiceSchema,
          breadcrumb([
            { name: "Home", url: SITE_URL },
            { name: "What We Build", url: `${SITE_URL}/services` },
          ]),
        ]}
      />
      <Nav />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
