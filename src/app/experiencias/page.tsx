import Header from "@/components/Header";
import ExperienciasGallery from "@/components/ExperienciasGallery";
import Footer from "@/components/Footer";

export default function ExperienciasPage() {
  return (
    <>
      <Header />
      <main>
        <div className="h-24" />
        <ExperienciasGallery />
      </main>
      <Footer />
    </>
  );
}
