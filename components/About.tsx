"use client"
import React from 'react';
import { motion } from "framer-motion";
import { MdRoundaboutRight , MdOutlineMailOutline, MdOutlineHome } from "react-icons/md";
import { FaRegUser , FaWhatsapp } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { IoLanguage } from "react-icons/io5";
import { Each } from './Each';
const About = () => {
    let text = "I BUILD INNOVATIVE THINGS FOR THE WEB".split("");
  return (
    <>
    <motion.section
      whileInView={{opacity:[0,1]}}
      transition={{duration:2}}
    id='about' className='max-width padd-x padd-y'>
      
        <div className='flex items-center justify-center gap-2'>
        <MdRoundaboutRight className='text-2xl lg:text-3xl text-primary'/>
        <h2 className='text-center text-3xl lg:text-4xl text-primary font-medium'>About me</h2>
        </div>
        <div className="pt-12 lg:pt-16 grid md:grid-cols-2 gap-16">
        <div>
            <img className='w-11/12 max-h-96' src={"/img/about.svg"} alt='about'/>
        </div>
        <div>
            <h3 className='text-2xl xl:text-3xl uppercase font-medium'>
                <Each of={text} render={(letter,index)=>
                 <motion.span
              whileInView={{ transform:[
                 "scale3d(1,1,1)",
                 "scale3d(1.4,.55,1)",
                 "scale3d(1.75,1.25,1)",
                 "scale3d(1.25,.85,1)",
                 "scale3d(.9,1.05,1)",
                 "scale3d(1,1,1)",
             ] ,transition:{
                 duration:1 , delay: index * 0.02
             },
             opacity:[0,1]
          }}
          viewport={{once:true}}
                
                  className='inline-block opacity-0'>{letter === " " ? "\u00A0" : letter}</motion.span> 
                }/>
            </h3>
            <p className='mt-2 xl:mt-4 tracking-wide'>Explore my skills and projects, where technology meets creativity in perfect harmony, crafting innovative solutions for tomorrow's challenges.</p>
            <div className='mt-6 xl:mt-8 grid gap-3 md:gap-4'>
                <div className='grid gap-3 lg:grid-cols-2'>
                    <div className='flex items-center gap-3'>
                    <FaRegUser className='text-primary  text-xl xl:text-2xl mb-1'/>
                    <h4 className='xl:text-lg'>Umer Aziz</h4>
                    </div>
                    <div className='flex items-center gap-3'>
                    <FaWhatsapp className='text-primary  text-xl xl:text-2xl'/>
                    <h4 className='xl:text-lg'>+92 308 9752092</h4>
                    </div>
                </div>
                <div className='grid gap-3 lg:grid-cols-2'>
                <div className='flex items-center gap-3'>
                    <MdOutlineMailOutline className='text-primary  text-xl xl:text-2xl'/>
                    <h4 className='xl:text-lg'>umeraziz682@gmail.com</h4>
                    </div>
                    <div className='flex items-center  gap-3'>
                    <MdOutlineHome className='text-primary  text-xl xl:text-2xl mb-1'/>
                    <h4 className='xl:text-lg'>New Mirpur City , Pakistan</h4>
                    </div>
                </div>
                <div className='grid gap-3 lg:grid-cols-2'>
                <div className='flex items-center gap-3'>
                    <PiStudent className='text-primary  text-xl xl:text-2xl mb-1'/>
                    <h4 className='xl:text-lg'>Bs, Software Engineering</h4>
                    </div>
                </div>
            </div>
            <div className='mt-8 grid gap-3'>
                <div className='flex items-center gap-3'>
                    <IoLanguage className='text-primary  text-xl xl:text-2xl mb-1'/>
                    <h4 className='text-lg xl:text-xl text-primary'>Language Skills</h4>
                    </div>
                    <p> English , Urdu , Hindi </p>
                </div>
        </div>
        </div>

    </motion.section>
    </>
  )
}

export default About