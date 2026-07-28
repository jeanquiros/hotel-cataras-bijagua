import Header from "@/components/Header";
import Suites from "@/components/Suites";
import Footer from "@/components/Footer";

export default function SuitesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="h-24" />
        <Suites />
      </main>
      <Footer />
    </>
  );
}
