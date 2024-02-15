"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { GoProjectSymlink } from "react-icons/go";
import ProjectTabs from '@/components/portfolio/ProjectTabs';
import Banner from '@/components/Banner';

const page = () => {
    return (
        <>
            <main className='min-h-screen'>
                <motion.div className='padd-x padd-y max-width'
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 1 }}>
                    <section>
                        <div className='flex items-center justify-center gap-2'>
                            <GoProjectSymlink className='text-2xl lg:text-3xl text-primary mb-0.5' />
                            <h2 className='text-center text-3xl lg:text-4xl text-primary font-medium'>My Projects</h2>
                        </div>
                        <div className='mt-12 md:mt-16 min-h-[50vh]'>
                            <ProjectTabs/>
                        </div>
                    </section>
                </motion.div>
                <Banner/>
            </main>
        </>
    )
}

export default page