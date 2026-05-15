import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import MobileCTA from "@/components/MobileCTA";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  KEYWORDS,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Triva — Automation Systems for STR Management Companies",
    template: "%s | Triva",
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: "Jacob Willard", url: SITE_URL }],
  creator: "Triva Consulting",
  publisher: "Triva Consulting",
  category: "Business automation consulting",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Triva — Automation Systems for STR Management Companies",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/logo-black.png",
        width: 1200,
        height: 630,
        alt: "Triva — STR automation consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triva — Automation Systems for STR Management Companies",
    description: SITE_DESCRIPTION,
    images: ["/logo-black.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#E8541C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [organizationSchema, websiteSchema],
          }}
        />
        {children}
        <MobileCTA />
      </body>
    </html>
  );
}
