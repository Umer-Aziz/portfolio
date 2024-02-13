import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
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
      </div>
    </main>
    </>
  );
}
