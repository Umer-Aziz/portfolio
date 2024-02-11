import { motion , useAnimationControls } from 'framer-motion'
import React, { useState } from 'react'

const AnimatedText = () => {
    const Sentence = "Hello,My Name is".split("");
    const text = "Umer Aziz.".split("");

  return (
    <>
   
       <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide">
            {Sentence.map((letter,index)=>{
                return(
                    <motion.span
                    whileHover={{ transform:[
                        "scale3d(1,1,1)",
                        "scale3d(1.4,.55,1)",
                        "scale3d(1.75,1.25,1)",
                        "scale3d(1.25,.85,1)",
                        "scale3d(.9,1.05,1)",
                        "scale3d(1,1,1)",
                    ] ,transition:{
                        duration:0.7
                    }
                 }}
                 animate={{ transform:[
                    "scale3d(1,1,1)",
                    "scale3d(1.4,.55,1)",
                    "scale3d(1.75,1.25,1)",
                    "scale3d(1.25,.85,1)",
                    "scale3d(.9,1.05,1)",
                    "scale3d(1,1,1)",
                ] ,transition:{
                    duration:1 , delay: 1 + index * 0.1
                },
                opacity:[0,1]
             }}
                   
                     className='inline-block' key={index} >{letter === " " ? "\u00A0" : letter}</motion.span> 
                )
            })}<br />
            {text.map((letter,index)=>{
                return(
                    <motion.span
                    whileHover={{ transform:[
                        "scale3d(1,1,1)",
                        "scale3d(1.4,.55,1)",
                        "scale3d(1.75,1.25,1)",
                        "scale3d(1.25,.85,1)",
                        "scale3d(.9,1.05,1)",
                        "scale3d(1,1,1)",
                    ] ,transition:{
                        duration:0.7
                    }
                 }}
                    animate={{ transform:[
                        "scale3d(1,1,1)",
                        "scale3d(1.4,.55,1)",
                        "scale3d(1.75,1.25,1)",
                        "scale3d(1.25,.85,1)",
                        "scale3d(.9,1.05,1)",
                        "scale3d(1,1,1)",
                    ] ,transition:{
                        duration:1 , delay: 2 + index * 0.1
                    },
                    opacity:[0,1]
                 }}
                   
                     className='inline-block text-primary' key={index} >{letter === " " ? "\u00A0" : letter}</motion.span> 
                )
            })}
            </h1>
    </>
  )
}

export default AnimatedText