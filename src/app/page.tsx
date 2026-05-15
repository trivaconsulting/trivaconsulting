import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { professionalServiceSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={professionalServiceSchema} />
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Problem />
        <HowItWorks />
        <div aria-hidden className="h-32 bg-white" />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
