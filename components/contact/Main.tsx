"use client"
import { MdOutlineMailOutline, MdOutlineHome } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

import { motion } from 'framer-motion'; 
import { Each } from '@/components/Each';
import Image from 'next/legacy/image';
import ContactForm from "@/components/contact/ContactForm";

const Main = () => {
    
    let text = "Let's Work Together.".split("");
  return (
    <>
    <main>
            <div className='padd-x padd-y max-width'>
                    <section className='grid gap-8 md:grid-cols-2'>
                        <div className='max-w-72'>
                            <div className='text-primary flex items-center gap-3'>
                                <div className='w-6 h-0.5 border-t-2 border-primary'></div>
                                <span>Say hello 👋</span>
                            </div>
                            <h1 className='text-5xl mt-3 mb-4'>
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
                 duration:1 , delay: index * 0.05
             },
             opacity:[0,1]
          }}                
                  className='inline-block opacity-0'>{letter === " " ? "\u00A0" : letter}</motion.span> 
                }/>
                            </h1>
                            <p className='tracking-wide'>Have a sweet project in mind or just want to say hi ? Feel free to send me a message.</p>
                        </div>
                        <div>
                            <Image layout='responsive' priority={true} width={800} height={500} className='w-full h-full' src="/img/contact.svg" alt="contact" />
                        </div>
                    </section>
                    <section className='mt-16 lg:mt-20 grid gap-8 md:grid-cols-2'>
                        <div className='flex flex-col gap-y-4 md:gap-y-6 xl:gap-y-8'>
                            <div className='flex items-center gap-3'>
                                <MdOutlineMailOutline className='text-primary  text-xl xl:text-2xl' />
                                <h4 className='xl:text-lg'>umeraziz682@gmail.com</h4>
                            </div>
                            <div className='flex items-center gap-3'>
                                <MdOutlineHome className='text-primary  text-xl xl:text-2xl mb-1' />
                                <h4 className='xl:text-lg'>New Mirpur City , Pakistan</h4>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaWhatsapp className='text-primary  text-xl xl:text-2xl' />
                                <h4 className='xl:text-lg'>+92 308 9752092</h4>
                            </div>
                        </div>
                        <div>
                       <ContactForm/>
                        </div>
                    </section>
                </div>
            </main>
    </>
  )
}

export default Main