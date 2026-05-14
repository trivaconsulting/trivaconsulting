import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FAQPage from "@/components/FAQPage";

export const metadata = {
  title: "FAQ | Triva",
  description:
    "Common questions about Triva's AI automation systems for short-term rental property managers: pricing, setup time, AI transparency, trust accounting, and more.",
};

export default function FAQ() {
  return (
    <>
      <Nav />
      <main>
        <FAQPage />
      </main>
      <Footer />
    </>
  );
}
