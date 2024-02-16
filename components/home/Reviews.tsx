"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { MdOutlineReviews } from 'react-icons/md'
import ReviewSlider from './ReviewSlider'
const Reviews = () => {
  return (
    <>
      <motion.section
      whileInView={{opacity:[0,1]}}
      transition={{duration:1}}
    id='reviews' className='max-width padd-x padd-y'>
        <div className='flex items-center justify-center gap-2'>
        <MdOutlineReviews className='text-2xl lg:text-3xl text-primary'/>
        <h2 className='text-center text-3xl lg:text-4xl text-primary font-medium'>Reviews</h2>
        </div>
        <div className="pt-12 lg:pt-16 grid gap-8 xl:gap-x-12">
            <ReviewSlider/>
        </div>

    </motion.section>
    </>
  )
}

export default Reviews