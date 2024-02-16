"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { LiaGraduationCapSolid } from "react-icons/lia";

const Experience = () => {
  
  return (
    <>
    <motion.section  whileInView={{opacity:[0,1]}}
      transition={{duration:1}}
    id='reviews' className='max-width padd-x padd-y'>
        <div>
            <div className='flex justify-center'>
            <h4 className='text-4xl lg:text-5xl text-primary border-b-2 pb-1 border-primary inline-block'>Experience</h4>
            </div>
           <div className='relative mt-8 md:mt-16 min-h-96'>
             <div className='absolute left-1/2 h-full w-0.5 bg-primary'></div>
             <div className='p-8 grid gap-16'>

             <div className='relative'>

                {/* Timeline card content */}
                      <div className='relative bg-secondary rounded p-6 w-[45%] bg-opacity-85'>
                           <h2 className='uppercase text-2xl'>Bs , Software Engineering</h2>
                           <h3 className='text-primary font-semibold'>Must University</h3>
                           <p className='mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, animi minus? Aut iusto tempore ab quo hic. Dolor temporibus eum delectus odio dolore nihil?</p>
                           <div className='Tag mt-3 flex items-center gap-3'>
                             <span className='px-2 bg-primary rounded-2xl text-sm'>Html</span>
                             <span className='px-2 bg-primary rounded-2xl text-sm'>Next.js</span>
                           </div>
                           {/* shape  */}
                           <div className='absolute top-6 -z-10 -right-2 rotate-45 bg-secondary w-8 h-8'></div>
                      </div>

                      {/* Timeline Img  */}
                      <div className='absolute top-[16px] left-1/2 -ml-6 w-12 h-12 bg-secondary rounded-full grid place-content-center'>
                        <LiaGraduationCapSolid className='text-primary text-3xl'/>
                      </div>

                      <div className='absolute left-[55%] top-7'>
                        <p className='text-xl font-medium uppercase'>2019 -2023</p>
                      </div>
             </div>
           
           
             <div className='relative'>

                {/* Timeline card content */}
                      <div className='relative bg-secondary float-right rounded p-6 w-[45%] bg-opacity-85'>
                           <h2 className='uppercase text-2xl'>Bs , Software Engineering</h2>
                           <h3 className='text-primary font-semibold'>Must University</h3>
                           <p className='mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, animi minus? Aut iusto tempore ab quo hic. Dolor temporibus eum delectus odio dolore nihil?</p>
                           <div className='Tag mt-3 flex items-center gap-3'>
                             <span className='px-2 bg-primary rounded-2xl text-sm'>Html</span>
                             <span className='px-2 bg-primary rounded-2xl text-sm'>Next.js</span>
                           </div>
                           {/* shape  */}
                           <div className='absolute top-6 -z-10 -left-2 rotate-45 bg-secondary w-8 h-8'></div>
                      </div>

                      {/* Timeline Img  */}
                      <div className='absolute top-[16px] left-1/2 -ml-6 w-12 h-12 bg-secondary rounded-full grid place-content-center'>
                        <LiaGraduationCapSolid className='text-primary text-3xl'/>
                      </div>

                      <div className='absolute right-[55%] top-7'>
                        <p className='text-xl font-medium uppercase'>2019 -2023</p>
                      </div>
             </div>

             </div>
           </div>
        </div>
    </motion.section>
    </>
  )
}

export default Experience