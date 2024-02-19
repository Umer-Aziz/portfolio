"use client"
import { motion } from 'framer-motion';
import Banner from '@/components/Banner';
import About from '@/components/home/About';
import Skills from '@/components/about/Skills';
import Experience from '@/components/about/Experience';
const Main = () => {
  return (
    <>
    <main>
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 1 }}>
                       <About/>
                       <Skills/>
                       <Experience/>
                </motion.div>
                <Banner/>
            </main>
    </>
  )
}

export default Main