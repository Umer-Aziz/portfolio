"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa6'
import Card3d from './Card3d'
const Services = () => {
  return (
    <>
      <motion.section
      whileInView={{opacity:[0,1]}}
      transition={{duration:1}}
    id='about' className='max-width padd-x padd-y'>
        <div className='flex items-center justify-center gap-2'>
        <FaCode className='text-2xl lg:text-3xl text-primary mb-1'/>
        <h2 className='text-center text-3xl lg:text-4xl text-primary font-medium'>Offerings</h2>
        </div>
        <Card3d/>
    </motion.section>
    </>
  )
}

export default Services