import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

export default function Home() {
  
  return (
    <>
    <main>
      <div>
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <Reviews/>
        <Banner/>
        <Footer/>
      </div>
    </main>
    </>
  );
}
