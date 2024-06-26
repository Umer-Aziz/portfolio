"use client"
import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"; 
import { FiSend , FiDownload } from "react-icons/fi";
import Spline from "@splinetool/react-spline";
import AnimatedText from "../AnimatedText";
import { Each } from "../Each";
import SocialShare from "../SocialShare";
import Link from "next/link";


const Hero = () => {

  let description = "I craft interactive and user-friendly experiences on the web, transforming ideas into functional and visually appealing websites and applications.".split(" ");

   
  return (
    <>
     <section className="max-width padd-x padd-y grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center md:items-start">
        <h2 className="text-primary text-lg font-medium uppercase tracking-wider">
        <Typewriter
  options={{
    strings: ['Web Developer', 'Software Engineer'],
    autoStart: true,
    loop: true,
  }}
/></h2>
        <AnimatedText/>
        <motion.p whileInView={{opacity:[0,1]}}
        transition={{duration:0.7}}
        className="md:max-w-sm lg:max-w-md mt-2 tracking-wide opacity-0 text-center md:text-left">
           <Each of={description} render={(letter,index)=>
          <motion.span
          whileInView={{ transform:[
              "scale3d(1,1,1)",
              "scale3d(1.4,.55,1)",
              "scale3d(1.75,1.25,1)",
              "scale3d(1.25,.85,1)",
              "scale3d(.9,1.05,1)",
              "scale3d(1,1,1)",
          ] ,transition:{
              duration:1 , delay: 0.7 + index * 0.1
          },
          opacity:[0,1]
       }}
         viewport={{once:true}}
           className='inline-block'>{letter === "  " ? "\u00A0" : letter + "\u00A0"}</motion.span> 
        }/>
          </motion.p>
        <div className="mt-6 flex items-center gap-x-4"> 
          <motion.div
           whileInView={{opacity:[0,1]}}
           transition={{duration:1}}
           className="opacity-0"
          ><Link href={"/contact"} ><Button className="flex items-center gap-1">
             <span>Contact me</span> <FiSend/></Button></Link>
            </motion.div>
            <motion.div
           whileInView={{opacity:[0,1]}}
           transition={{duration:1}}
           className="opacity-0"
            >
              <a href="/download/resume.pdf" download={"resume.pdf"}>
          <Button variant={"secondary"} className="flex items-center gap-1">
             <span>Download CV</span> <FiDownload className="mb-1"/></Button>
             </a>

             </motion.div>
        </div>
       <SocialShare/>
        </div>
        <div className="w-full flex justify-center">
      {/* Render the Spline Viewer component */}
     <div className="-z-10">
      <Spline
      scene="https://prod.spline.design/acrmXt2ReTonUgDF/scene.splinecode"  />
     </div>
    </div>
      </section>
    </>
  )
}

export default Hero