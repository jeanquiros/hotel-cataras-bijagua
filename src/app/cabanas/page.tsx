import Header from "@/components/Header";
import CabanasDetail from "@/components/CabanasDetail";
import Footer from "@/components/Footer";

export default function CabanasPage() {
  return (
    <>
      <Header />
      <main>
        <div className="h-24" />
        <CabanasDetail />
      </main>
      <Footer />
    </>
  );
}
