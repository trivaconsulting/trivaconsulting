import {
  SITE_URL,
  SITE_NAME,
  SITE_LEGAL_NAME,
  SITE_DESCRIPTION,
  FOUNDER_NAME,
  FOUNDER_EMAIL,
  SERVICES,
  FAQS,
} from "./site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-black.png`,
    width: 512,
    height: 512,
  },
  description: SITE_DESCRIPTION,
  email: FOUNDER_EMAIL,
  founder: {
    "@type": "Person",
    name: FOUNDER_NAME,
  },
  knowsAbout: [
    "Short-term rental automation",
    "Vacation rental management",
    "Property management systems",
    "Guesty",
    "Hostaway",
    "OwnerRez",
    "Hospitable",
    "AI guest messaging",
    "Trust accounting for short-term rentals",
    "Owner reporting automation",
    "Cleaning dispatch automation",
    "STR compliance and regulation",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: "Business process automation consulting for short-term rental property managers",
  slogan: "We build it. You run your business.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: `${SITE_NAME} — STR Automation Consulting`,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "Automation consulting for short-term rental management companies",
  audience: {
    "@type": "BusinessAudience",
    name: "Short-term rental property management companies",
    audienceType: "STR property managers with 10+ units",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "4000",
    highPrice: "20000",
    offerCount: SERVICES.length,
    description: "Fixed-price build engagements plus optional monthly retainer",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Triva Automation Systems",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faq#faqpage`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export const breadcrumb = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});
