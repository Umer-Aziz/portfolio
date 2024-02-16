"use client"
import { motion } from 'framer-motion';
import Banner from '@/components/Banner';
import About from '@/components/home/About';
import Skills from '@/components/about/Skills';

const page = () => {
    return (
        <>
            <main>
                <motion.div className=''
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 1 }}>
                       <About/>
                       <Skills/>
                </motion.div>
                <Banner/>
            </main>
        </>
    )
}

export default page