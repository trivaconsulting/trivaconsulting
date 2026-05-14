import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesPage from "@/components/ServicesPage";

export const metadata = {
  title: "What We Build | Triva",
  description:
    "Six automation systems built for STR property management companies — owner reports, maintenance loops, guest inbox, acquisition pipelines, and more.",
};

export default function Services() {
  return (
    <>
      <Nav />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
