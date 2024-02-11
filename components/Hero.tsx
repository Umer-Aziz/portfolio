"use client"
import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";
import { FiSend , FiDownload } from "react-icons/fi";
import Spline from "@splinetool/react-spline";
import { FaSquareXTwitter ,FaSquareFacebook , FaGithub , FaLinkedin , FaStackOverflow } from "react-icons/fa6";


const Hero = () => {
    const socialIcons = [
        {
          path:"/",
          icon:FaSquareFacebook
        },
        {
          path:"/",
          icon:FaSquareXTwitter
        },
        {
          path:"/",
          icon:FaLinkedin
        },
        {
          path:"/",
          icon:FaGithub
        },
        {
          path:"/",
          icon:FaStackOverflow
        },
      ]
  return (
    <>
     <section className="max-width padd-x padd-y min-h-[80vh] grid md:grid-cols-2 gap-8">
        <div className="flex flex-col">
        <h2 className="text-primary text-lg font-medium uppercase tracking-wider">
        <Typewriter
  options={{
    strings: ['Web Developer', 'Software Engineer'],
    autoStart: true,
    loop: true,
  }}
/></h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide">Hello,My Name is <br /><span className="text-primary">Umer Aziz.</span></h1>
        <p className="md:max-w-sm lg:max-w-md mt-2 tracking-wide">
        I craft interactive and user-friendly experiences on the web, transforming ideas into functional and visually appealing websites and applications.
          </p>
        <div className="mt-6 lg:mt-8 flex items-center gap-x-4">
          
          <Button className="flex items-center gap-1">
             <span>Contact me</span> <FiSend/></Button>
          
          <Button variant={"secondary"} className="flex items-center gap-1">
             <span>Download CV</span> <FiDownload className="mb-1"/></Button>
        </div>
        {/* Social Share  */}
        <div className="mt-6 lg:mt-8 flex gap-4 items-center text-xl">
          {socialIcons.map((item,index)=>{
            return (
              <a key={index} href={item.path}><item.icon className="hover:text-primary hover:scale-110 duration-200"/></a>
            )
          })}
        </div>
        </div>
        <div className="w-full  flex justify-center">
      {/* Render the Spline Viewer component */}
     <div>
      <Spline
      scene="https://prod.spline.design/acrmXt2ReTonUgDF/scene.splinecode"  />
     </div>
    </div>
      </section>
    </>
  )
}

export default Hero