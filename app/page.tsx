import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons"; 
import { FiSend , FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <>
    <main>
      <div className="max-width padd-x">
      <section className="min-h-[80vh] grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col py-12 md:py-24">
        <h2 className="text-primary text-lg font-medium uppercase tracking-wider">Web Developer</h2>
        <h1 className="text-4xl md:text-6xl font-medium tracking-wide">Hello,My Name is <br /><span className="text-primary">Umer Aziz.</span></h1>
        <p className="max-w-md mt-2 tracking-wide">Crafts interactive and user-friendly experiences on the web. Transforms ideas into functional and visually appealing websites and applications.</p>
        <div className="mt-6 md:mt-8 flex items-center gap-x-4">
          
          <Button className="flex items-center gap-1">
             <span>Contact me</span> <FiSend/></Button>
          
          <Button variant={"secondary"} className="flex items-center gap-1">
             <span>Download CV</span> <FiDownload className="mb-1"/></Button>
        </div>
        </div>
        <div></div>
      </section>
      </div>
    </main>
    </>
  );
}
