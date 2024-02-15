"use client"
import React from 'react'
import { motion } from 'framer-motion' 
import { Button } from './ui/button'
import { RiChatSmile2Line } from "react-icons/ri";

const Banner = () => {
  return (
    <>
    <motion.section
      whileInView={{opacity:[0,1]}}
      transition={{duration:1}}
    id='reviews' className='max-width padd-x padd-y'>
        <div className="flex flex-col items-center">
            <div className='mb-2 xl:mb-3 flex items-center gap-x-2'>
                 <RiChatSmile2Line className='text-2xl text-primary mb-0.5'/>
                <h6 className='text-primary text-xl tracking-wider font-medium'>What’s Next?</h6>
                </div>
                <h4 className='text-4xl xl:text-5xl mb-4 xl:mb-6 font-semibold'>Get In Touch</h4>
                <p className='max-w-xl text-lg text-center tracking-wider'>As I'm always looking for new opportunities, my inbox is always open. Schedule a call to discuss how I can help you to meet your goals. Let's connect!</p>
                <a href="/contact"><Button className='mt-8 animate-bounce'>Say Hello</Button></a>
        </div>
    </motion.section>
    </>
  )
}

export default Banner