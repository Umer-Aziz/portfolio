"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { LiaGraduationCapSolid } from "react-icons/lia";
import { GiSandsOfTime } from "react-icons/gi";
import { Each } from '../Each';

const Experience = () => {
    const experience = [
        {
            title: "Bs , Software engineering",
            subtitle: "Must university",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, animi minus? Aut iusto tempore ab quo hic. Dolor temporibus eum delectus odio dolore nihil?",
            tags: ['html', 'css', 'next.js'],
            icon: LiaGraduationCapSolid,
            date: "2019 - 2023"
        },
        {
            title: "Bs , Software engineering",
            subtitle: "Must university",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, animi minus? Aut iusto tempore ab quo hic. Dolor temporibus eum delectus odio dolore nihil?",
            tags: ['html', 'css', 'React.js'],
            icon: LiaGraduationCapSolid,
            date: "May - 2023"
        },
        {
            title: "Bs , Electrical Engineering",
            subtitle: "Must university",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, animi minus? Aut iusto tempore ab quo hic. Dolor temporibus eum delectus odio dolore nihil?",
            tags: ['html', 'css', 'React.js'],
            icon: LiaGraduationCapSolid,
            date: "Jan - 2022"
        },
    ]
    return (
        <>
            <motion.section whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                id='reviews' className='max-width padd-x padd-y'>
                <div>
                    <div className='flex justify-center'>
                        <h4 className='text-4xl lg:text-5xl text-primary border-b-2 pb-1 border-primary inline-block'>Experience</h4>
                    </div>
                    <div className='relative mt-8 md:mt-16 lg:mt-20 xl:mt-24'>
                        <div className='absolute left-4 md:left-1/2 h-full w-0.5 bg-primary'></div>
                         {/* Timeline Img  */}
                         <div className='absolute top-full md:left-1/2 -ml-1 md:-ml-5 lg:-ml-6 w-10 h-10 lg:w-12 lg:h-12 bg-secondary rounded-full grid place-content-center'>
                                        <GiSandsOfTime className='text-primary text-2xl lg:text-3xl' />
                                    </div>
                        <div className='p-8 grid gap-16'>

                            <Each of={experience} render={(item, index) =>
                                <div className='relative'>
                                    {/* Timeline card content */}
                                    <div className={`relative bg-secondary rounded ml-6 md:ml-0 p-6 w-full md:w-[43%] lg:w-[44%] xl:w-[45%] bg-opacity-85 ${index % 2 === 1 &&  "md:float-right"}`}>
                                        <h2 className='uppercase text-xl font-medium'>{item.title}</h2>
                                        <h3 className='text-primary font-medium capitalize'>{item.subtitle}</h3>
                                        <p className='mt-2'>{item.description}</p>
                                        <div className='Tag mt-3 flex items-center gap-3'>
                                            {/* Loop through tags */}
                                            {item.tags.map((tag:string, index:number) => (
                                                <span key={index} className='px-2 bg-primary rounded-2xl text-sm text-white'>{tag}</span>
                                            ))}
                                        </div>
                                        {/* shape  */}
                                        <div className={`absolute top-6 -z-10 rotate-45 bg-secondary w-8 h-8 ${index % 2 === 1 ? "-left-2":"-left-2 md:left-auto md:-right-2"}`}></div>
                                    </div>

                                    {/* Timeline Img  */}
                                    <div className='absolute top-4 -left-4 md:top-5 md:left-1/2 -ml-5 lg:-ml-6 w-10 h-10 lg:w-12 lg:h-12 bg-secondary rounded-full grid place-content-center'>
                                        <item.icon className='text-primary text-2xl lg:text-3xl' />
                                    </div>

                                    <div className={`md:absolute md:top-7 ${index % 2 === 1 ? "mt-4 md:mt-0 md:right-[55%]":"mt-4 md:mt-0 md:left-[55%]"}`}>
                                        <p className='text-xl font-medium uppercase'>{item.date}</p>
                                    </div>
                                </div>
                            } />

                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Experience