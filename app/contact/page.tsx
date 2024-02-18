"use client"
import React, { useState } from 'react'
import { MdOutlineMailOutline, MdOutlineHome } from "react-icons/md";
import { FaRegUser, FaWhatsapp } from "react-icons/fa6";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FiMessageSquare } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { TiArrowRight } from "react-icons/ti";
import { motion } from 'framer-motion'; 
import { Each } from '@/components/Each';
import Image from 'next/legacy/image';

const page = () => {

    let text = "Let's Work Together.".split("");

    const [focusedInput, setFocusedInput] = useState<string | null>(null);

    const handleInputFocus = (inputName: string) => {
        setFocusedInput(inputName);
    };

    const handleInputBlur = () => {
        setFocusedInput(null);
    };


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
                        <form action="">
            <div className='flex flex-col gap-y-4 md:gap-y-6 xl:gapy-8'>
                <div className='relative'>
                    <Input
                        type="text"
                        placeholder="Name"
                        onFocus={() => handleInputFocus('name')}
                        onBlur={handleInputBlur}
                    />
                    <FaRegUser className={`absolute top-3 right-3 z-50 bg-background ${focusedInput === 'name' ? 'text-primary' : ''}`} />
                </div>
                <div className='relative'>
                    <Input 
                        type="email" 
                        placeholder="Email"
                        onFocus={() => handleInputFocus('email')}
                        onBlur={handleInputBlur}
                    />
                    <MdOutlineMailOutline className={`absolute text-lg top-3 right-3 z-50 bg-background ${focusedInput === 'email' ? 'text-primary' : ''}`} />
                </div>
                <div className='relative'>
                    <Textarea 
                        placeholder="Type your message here." 
                        className='min-h-40 resize-none' 
                        onFocus={() => handleInputFocus('message')}
                        onBlur={handleInputBlur}
                    />
                    <FiMessageSquare className={`absolute top-3 text-lg right-3 z-50 bg-background ${focusedInput === 'message' ? 'text-primary' : ''}`} />
                </div>
                <div>
                    <Button type='submit' className='flex items-center gap-1 group'><span>Let's Talk</span> <TiArrowRight className='text-xl group-hover:-rotate-45 duration-200 -translate-y-[1px]'/></Button>
                </div>
            </div>
        </form>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default page