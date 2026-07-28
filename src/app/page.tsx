import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CabanasPreview from "@/components/CabanasPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CabanasPreview />
      </main>
      <Footer />
    </>
  );
}
