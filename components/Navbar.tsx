"use client"
import React,{useState} from 'react'
import { ModeToggle } from './modeToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion' ;
import { Button } from './ui/button'
import { Each } from './Each'
const Navbar = () => {
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const navItems = [
    {
      link:"/",
      title:"Home"
    },
    {
      link:"/about",
      title:"About"
    },
    {
      link:"/#services",
      title:"Services"
    },
    {
      link:"/portfolio",
      title:"Portfolio"
    },
    {
      link:"/contact",
      title:"Contact"
    },
  ]
  return (
   <>
   <nav>
    <div className='relative max-width padd-x py-4 flex justify-between items-center'>
    <div className='text-2xl font-bold'>
     <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">UmerAziz</span>
    </div>
    <div className='flex items-center gap-12 lg:gap-16'>
      
    <ul className='desktop'>
      <Each of={navItems} render={(list,index)=>
      <Link href={list.link}><li className={`${path === list.link && "active"}`}>{list.title}</li></Link>
      }/>
     
    </ul>
     <motion.ul
    animate={isOpen ? "":{left:0}}
    transition={{duration:0.3}}
     className='mobile z-50'>
      <Each of={navItems} render={(list,index)=>
    <motion.div
    whileInView={{opacity:[0,1],translateX:[-50,0],scale:[0.5,1.1,1]}}
    transition={{duration:0.3,delay:0.1 + index * 0.1}}>
    <Link onClick={()=>{setIsOpen(true)}} href={list.link}><li className={`${path === list.link && "active"}`}>{list.title}</li></Link>
    </motion.div>
  }/>
    
    </motion.ul>
    <div className='flex items-center gap-2'>
        <ModeToggle/>
        <div className='relative md:hidden'>
             <Button onClick={toggleMenu} variant={"outline"} size={"icon"} className='relative overflow-hidden flex items-center justify-center flex-col gap-y-1'>
              <motion.div 
              animate={ isOpen ?"":{rotate:45,width:24}}
              transition={{duration:0.3}}
              className={`w-[18px] h-[3px] bg-primary ${isOpen ? "" : "absolute top-1/2"}`}></motion.div>
  
              <motion.div 
              animate={ isOpen ?"":{rotate:-45,width:24}}
              transition={{duration:0.3}}
              className={`w-[18px] h-[3px] bg-primary ${isOpen ? "" : "absolute top-1/2"}`}></motion.div>
              <motion.div
              animate={ isOpen ?{opacity:1}:{opacity:0}}
              transition={{duration:0.3}}
               className={`w-[18px] h-[3px] bg-primary`}></motion.div>
             </Button>
        </div>
    </div>
    </div>
    </div>
   </nav>
   </>
  )
}

export default Navbar