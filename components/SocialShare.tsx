"use client"
import { Each } from './Each'
import { FaSquareXTwitter ,FaSquareFacebook , FaGithub , FaLinkedin , FaStackOverflow } from "react-icons/fa6";
import { motion } from 'framer-motion'; 

const SocialShare = () => {
    const socialIcons = [
        {
          path:"/",
          icon:FaSquareFacebook
        },
        {
          path:"/",
          icon:FaSquareXTwitter
        },
        {
          path:"/",
          icon:FaLinkedin
        },
        {
          path:"/",
          icon:FaGithub
        },
        {
          path:"/",
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
          transition={{duration:1,delay:0.5 + index * 0.2}}
          // viewport={{once:true}}
          href={item.path} className="opacity-0"><item.icon className="hover:text-primary hover:scale-110 duration-200"/></motion.a>
          }/>    
        </div>
    </>
  )
}

export default SocialShare