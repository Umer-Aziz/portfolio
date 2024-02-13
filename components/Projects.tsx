"use client"
import React from 'react'
import { motion } from "framer-motion";
import { GrProjects } from "react-icons/gr";
import { Button } from './ui/button';
import Slider from './Slider';
const Projects = () => {
  return (
    <>
    <motion.section
      whileInView={{opacity:[0,1]}}
      transition={{duration:1}}
       className='max-width padd-x padd-y'>
        <div className='grid md:grid-cols-2'>
        <div className='flex flex-col max-w-96 gap-3 md:gap-4'>
        <div className='flex items-center gap-2'>
        <GrProjects className='text-2xl lg:text-3xl text-primary'/>
        <h2 className='text-center text-3xl lg:text-4xl text-primary font-medium'>Latest Projects</h2>
        </div>
          <div>
          <p>Dive into My showcase of captivating projects, crafted with creativity and precision.</p>
           <Button className='mt-3 md:mt-4'>All Projects</Button>
          </div>
        </div>
        <div className=''>
          <Slider/>
        </div>
        </div>
    </motion.section>
    </>
  )
}

export default Projects