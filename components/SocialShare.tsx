"use client"
import { Each } from './Each'
import { FaSquareXTwitter  , FaGithub , FaLinkedin , FaStackOverflow } from "react-icons/fa6";
import { motion } from 'framer-motion'; 

const SocialShare = () => {
    const socialIcons = [
        {
          path:"https://twitter.com/umeraziz_00",
          icon:FaSquareXTwitter
        },
        {
          path:"https://www.linkedin.com/in/umer-aziz-b13b841b2/",
          icon:FaLinkedin
        },
        {
          path:"https://github.com/Umer-Aziz",
          icon:FaGithub
        },
        {
          path:"https://stackoverflow.com/users/14506857/umer-aziz",
          icon:FaStackOverflow
        },
      ]
  return (
    <>
     {/* Social Share  */}
     <div className="mt-8 flex gap-4 items-center text-xl md:text-2xl">
          <Each of={socialIcons} render={(item,index)=>
          <motion.a 
          whileInView={{opacity:[0,1],scale:[0.5,1.3,1]}}
          transition={{duration:1,delay:0.3 + index * 0.1}}
          viewport={{once:true}}
          href={item.path} target='_blank' className="opacity-0"><item.icon className="hover:text-primary hover:scale-110 duration-200"/></motion.a>
          }/>    
        </div>
    </>
  )
}

export default SocialShare