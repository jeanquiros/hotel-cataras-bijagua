import Header from "@/components/Header";
import BungalowsDetail from "@/components/BungalowsDetail";
import Footer from "@/components/Footer";

export default function BungalowsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="h-24" />
        <BungalowsDetail />
      </main>
      <Footer />
    </>
  );
}
