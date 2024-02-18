"use client";
import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FiMessageSquare } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { TiArrowRight } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";



const ContactForm: React.FC = () => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
const [focusedInput, setFocusedInput] = useState<string | null>(null);

const handleInputFocus = (inputName: string) => {
    setFocusedInput(inputName);
};

const handleInputBlur = () => {
    setFocusedInput(null);
};
  return (
    <>
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
    </>
  )
}

export default ContactForm