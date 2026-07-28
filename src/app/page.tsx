import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Suites from "@/components/Suites";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Suites />
        <Experiences />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
