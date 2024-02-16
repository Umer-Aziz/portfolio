import About from "@/components/home/About";
import Banner from "@/components/Banner";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Reviews from "@/components/home/Reviews";
import Services from "@/components/home/Services";

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
      </div>
    </main>
    </>
  );
}
