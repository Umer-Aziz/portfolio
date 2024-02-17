"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { LiaGraduationCapSolid , LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GoCodeReview } from "react-icons/go";
import { GiSandsOfTime } from "react-icons/gi";
import { FaLaptopCode , FaCodeMerge} from "react-icons/fa6";

import { Each } from '../Each';

const Experience = () => {
    const experience = [
        {
            title: "Bs , Software engineering",
            subtitle: "Must university",
            description: "Graduated with a Bachelor of Science in Software Engineering, specializing in web development. Proficient in HTML, CSS, JavaScript, React, Node.js, and building responsive, user-friendly web applications. Degree received in Sep 2023.",
            tags: ['html', 'css', 'javascript',"Php","C#"],
            icon: LiaGraduationCapSolid,
            date: "Sep 2019 - 2023"
        },
        {
            title: "Student Assistant",
            subtitle: "Software Engineering Society (SES) MUST",
            description: "Skilled Student Assistant in Software Engineering Society, adept in communication, event management, and teaching. Specializes in coding events and supporting junior students' learning.",
            tags: ['Organization', 'Problem-solving',"Technical proficiency"],
            icon: LiaChalkboardTeacherSolid,
            date: "Dec 2019 - Oct 2021"
        },
        {
            title: "Web Developer - Intern",
            subtitle: "Digidolph",
            description: "Web development intern specializing in the MERN stack, proficient in React.js. Contributed to building dynamic web applications, collaborating within cross-functional teams.",
            tags: ['html', 'css', ,"Tailwind css",'React.js',"Node.js"],
            icon: GoCodeReview,
            date: "Aug / Oct - 2022"
        },
        {
            title: "Web Developer - Contract",
            subtitle: "Newday",
            description: "Contract-based web developer adept at transforming Figma designs into responsive websites using Tailwind CSS. Skilled in API implementation and collaborating with clients to deliver high-quality solutions efficiently.",
            tags: ['html', 'css', ,"Tailwind css",'javascript',"php","Wordpress"],
            icon: FaLaptopCode,
            date: "Dec 2021 - July 2022"
        },
        {
            title: "Web Developer",
            subtitle: "Upwork / Freelance",
            description: "Freelance web developer providing Figma/PSD to responsive website conversion, frontend development, and comprehensive API and backend development to deliver comprehensive solutions tailored to clients' needs.",
            tags: ["Tailwind css",'React.js',"Next.js","Wordpress","shopify"],
            icon: FaCodeMerge,
            date: "March 2021 - Present"
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
                    <div className='relative my-8 md:mt-16 lg:mt-20 xl:mt-24'>
                        <div className='absolute left-4 md:left-1/2 h-full w-0.5 bg-primary'></div>
                         {/* Timeline Img  */}
                         <motion.div 
                          whileInView={{opacity:[0,1],scale:[0.5,1.5,1]}}
                          transition={{duration:0.5}}
                         className='absolute top-full md:left-1/2 -ml-1 md:-ml-5 lg:-ml-6 w-10 h-10 lg:w-12 lg:h-12 bg-secondary rounded-full grid place-content-center'>
                                        <GiSandsOfTime className='text-primary text-2xl lg:text-3xl' />
                                    </motion.div>
                        <div className='p-8 grid gap-16'>

                            <Each of={experience} render={(item, index) =>
                                <div className='relative'>
                                    {/* Timeline card content */}
                                    <motion.div
                                     whileInView={{opacity:[0,1],translateX:[-70,30,0]}}
                                     transition={{duration:0.7}}
                                     className={`relative bg-secondary rounded ml-6 md:ml-0 p-6 w-full md:w-[43%] lg:w-[44%] xl:w-[45%] bg-opacity-85 ${index % 2 === 1 &&  "md:float-right"}`}>
                                        <h2 className='uppercase text-xl font-medium'>{item.title}</h2>
                                        <h3 className='text-primary font-medium capitalize'>{item.subtitle}</h3>
                                        <p className='mt-2'>{item.description}</p>
                                        <div className='Tag mt-3 flex flex-wrap items-center gap-3'>
                                            {/* Loop through tags */}
                                            {item.tags.map((tag:string, index:number) => (
                                                <span key={index} className='px-2 bg-primary rounded-2xl text-sm text-white'>{tag}</span>
                                            ))}
                                        </div>
                                        {/* shape  */}
                                        <div className={`absolute top-6 -z-10 rotate-45 bg-secondary w-8 h-8 ${index % 2 === 1 ? "-left-2":"-left-2 md:left-auto md:-right-2"}`}></div>
                                    </motion.div>

                                    {/* Timeline Img  */}
                                    <motion.div 
                                    whileInView={{opacity:[0,1],scale:[0.5,1.5,1]}}
                                    transition={{duration:0.7}}
                                    className='absolute shadow top-4 -left-4 md:top-5 md:left-1/2 -ml-5 lg:-ml-6 w-10 h-10 lg:w-12 lg:h-12 bg-secondary rounded-full grid place-content-center'>
                                        <item.icon className='text-primary text-2xl lg:text-3xl' />
                                    </motion.div>

                                    <motion.div
                                     whileInView={{opacity:[0,1],translateX:[50,-20,0]}}
                                     transition={{duration:0.7}}
                                     className={`md:absolute md:top-7 ${index % 2 === 1 ? "mt-4 md:mt-0 md:right-[55%]":"mt-4 md:mt-0 md:left-[55%]"}`}>
                                        <p className='text-xl font-medium uppercase'>{item.date}</p>
                                    </motion.div>
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