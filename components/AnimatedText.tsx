import { motion } from 'framer-motion'
import React from 'react'
import { Each } from './Each';

const AnimatedText = () => {
    const Sentence = "Hello,My Name is".split("");
    const text = "Umer Aziz.".split("");

  return (
    <>
   
       <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide">
        <Each of={Sentence} render={(letter,index) =>
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
     whileInView={{ transform:[
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(1.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
    ] ,transition:{
        duration:1 , delay: 0.7 + index * 0.1
    },
    opacity:[0,1]
 }}
 viewport={{once:true}}
       
         className='inline-block opacity-0'>{letter === " " ? "\u00A0" : letter}</motion.span> 
        }/>
        <br />
        <Each of={text} render={(letter,index)=>
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
          whileInView={{ transform:[
              "scale3d(1,1,1)",
              "scale3d(1.4,.55,1)",
              "scale3d(1.75,1.25,1)",
              "scale3d(1.25,.85,1)",
              "scale3d(.9,1.05,1)",
              "scale3d(1,1,1)",
          ] ,transition:{
              duration:1 , delay: 0.7 + index * 0.1
          },
          opacity:[0,1]
       }}
           className='inline-block text-primary opacity-0'>{letter === " " ? "\u00A0" : letter}</motion.span> 
        }/>
            </h1>
    </>
  )
}

export default AnimatedText