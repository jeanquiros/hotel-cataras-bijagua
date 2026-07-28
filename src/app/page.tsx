import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BungalowsPreview from "@/components/BungalowsPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BungalowsPreview />
      </main>
      <Footer />
    </>
  );
}
