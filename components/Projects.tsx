"use client"
import React from 'react'
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <>
    <motion.section
      whileInView={{opacity:[0,1]}}
      transition={{duration:1}}
       className='max-width padd-x padd-y'>
        <div>
        <div className='flex items-center justify-center gap-2'>
        {/* <MdRoundaboutRight className='text-2xl lg:text-3xl text-primary'/> */}
        <h2 className='text-center text-3xl lg:text-4xl text-primary font-medium'>Latest Projects</h2>
        </div>

        </div>
    </motion.section>
    </>
  )
}

export default Projects