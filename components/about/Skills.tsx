"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { MdOutlineSettings } from "react-icons/md";
import { FaCheck, FaFigma } from "react-icons/fa6";
import { CgIfDesign } from "react-icons/cg";
import { LiaToolsSolid } from "react-icons/lia";
import { TbBulb } from "react-icons/tb";
import { SiAntdesign , SiMaterialdesign , SiChakraui , SiRadixui} from "react-icons/si";
import { Each } from '../Each';
const Skills = () => {
    const skills = ["html","css","Tailwind","js","Ts","React.js","Next.js","Mongodb","node.js"];
    const tools = ["Git + Github","Chrome DevTools","Command Line","Grunt + Gulp","Postman"];
    const knowledge = ["CSS Detangling","ECMAScript 6","Usability","SEO","Hosting"];
  return (
    <>
    <motion.section  whileInView={{opacity:[0,1]}}
      transition={{duration:1}}
    id='reviews' className='max-width padd-x padd-y'>
        <div>
            <h4 className='text-4xl lg:text-5xl text-primary border-b-2 pb-1 border-primary inline-block'>Skills</h4>
             <div className='mt-8 md:mt-16 lg:mt-20 xl:mt-24 grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12'>

                 {/* Development  */}
                <div>
                    <div className='flex items-center gap-3 text-2xl font-medium md:font-semibold lg:font-bold uppercase'>
                        <MdOutlineSettings className='text-primary'/>
                    <h5>Development</h5>
                    </div>
                    <div className='mt-4 md:mt-8 flex flex-wrap items-center gap-4'>
                    <Each of={skills} render={(text,index)=>
                        <div className='w-[100px] h-[100px] grid place-content-center border-2 border-secondary rounded-full
                         cursor-pointer shadow-md hover:shadow-primary hover:border-primary hover:text-primary duration-200'>
                        <h6 className='uppercase text-center'>{text}</h6>
                        </div>
                    }/>
                    </div>
                </div>

                {/* Design  */}
                <div className='xl:col-span-2 xl:pl-16'>
                <div className='flex items-center gap-3 text-2xl font-medium md:font-semibold lg:font-bold uppercase'>
                        <CgIfDesign className='text-primary'/>
                    <h5>UI Design</h5>
                    </div>
                    <div className='mt-6 md:mt-8 text-3xl md:text-4xl flex items-center justify-center md:justify-start gap-8'>
                      <FaFigma/>
                      <SiAntdesign/>
                      <SiChakraui/>
                      <SiRadixui/>
                      <SiMaterialdesign/>
                    </div>

                    {/* Tools & Knowledge  */}
                    <div className='mt-8 lg:mt-16 grid grid-cols-2'>
                       <div>
                       <div className='flex items-center gap-3 text-2xl font-medium md:font-semibold lg:font-bold uppercase'>
                        <LiaToolsSolid className='text-primary'/>
                    <h5>Tools</h5>
                    </div>
                    <div className='mt-4 md:mt-8'>
                    <ul className='grid gap-2'>
                        <Each of={tools} render={(item,index)=>
                         <li className='flex items-center gap-2 capitalize'>
                         <FaCheck className='text-primary'/>
                     <p>{item}</p>
                     </li>
                        }/>
                    </ul>
                    </div>
                       </div>

                       <div>
                       <div className='flex items-center gap-3 text-2xl font-medium md:font-semibold lg:font-bold uppercase'>
                        <TbBulb className='mb-1 text-primary'/>
                    <h5>KNOWLEDGE</h5>
                    </div>
                    <div className='mt-4 md:mt-8'>
                    <ul className='grid gap-2'>
                        <Each of={knowledge} render={(item,index)=>
                         <li className='flex items-center gap-2 capitalize'>
                         <FaCheck className='text-primary'/>
                     <p>{item}</p>
                     </li>
                        }/>
                    </ul>
                    </div>
                       </div>


                    </div>
                </div>
             </div>
        </div>
    </motion.section>
    </>
  )
}

export default Skills