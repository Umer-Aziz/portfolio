"use client"
import { motion } from 'framer-motion'
import { BackgroundBeams } from './ui/background-beams'
import SocialShare from './SocialShare'

const Footer = () => {
  return (
    <>
    <motion.section
      whileInView={{opacity:[0,1]}}
      transition={{duration:1}}
    id='footer' className='pt-12 lg:pt-16 grid gap-8 xl:gap-x-12'>
        <div className=" padd-x bg-neutral-900 dark:bg-opacity-50">
        <div className="w-full relative antialiased text-white">
      <div className="max-w-2xl mx-auto flex flex-col items-center p-4">
         <p className='mt-4 z-10 text-center text-sm'>I CRAFT DIGITAL EXPERIENCES WITH CREATIVE FLAIR</p>
         <div className='-translate-y-4 z-10'>
            <SocialShare/>
         </div>
         <p className='text-sm'>&copy; All right reserved by umeraziz - 2024</p>
      </div>
      <BackgroundBeams />
    </div>
        </div>
       
    </motion.section>
    </>
  )
}

export default Footer