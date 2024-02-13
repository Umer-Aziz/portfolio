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
        <div className='flex flex-col gap-12 xl:gap-0 xl:grid xl:grid-cols-2'>

        <div className='flex flex-col justify-center items-center xl:items-start max-w-96 mx-auto xl:mx-0 gap-3 md:gap-4'>
        <div className='flex items-center gap-2'>
        <GrProjects className='text-2xl lg:text-3xl text-primary'/>
        <h2 className='text-center text-3xl lg:text-4xl text-primary font-medium'>Latest Projects</h2>
        </div>
          <div className='flex flex-col items-center xl:items-start'>
          <p className='text-center xl:text-left'>Dive into My showcase of captivating projects, crafted with creativity and precision.</p>
           <Button className='mt-3 md:mt-4'>All Projects</Button>
          </div>
        </div>

        <div className='rounded-md md:rounded-lg'>
          <Slider/>
        </div>
        </div>
    </motion.section>
    </>
  )
}

export default Projects