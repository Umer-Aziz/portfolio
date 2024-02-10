"use client"
import React,{useState} from 'react'
import { ModeToggle } from './modeToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion' ;
import { Button } from './ui/button'
const Navbar = () => {
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);
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
      link:"/portfolio",
      title:"Portfolio"
    },
    {
      link:"/services",
      title:"Services"
    },
    {
      link:"/contact",
      title:"Contact"
    },
  ]
  return (
   <>
   <nav>
    <div className='padd-x py-4 flex justify-between items-center'>
    <div className='text-2xl font-bold'>
     <span className="text-primary">Umer</span>
     <span className="text-yellow-400">Aziz</span>
    </div>
    <div className='flex items-center gap-16'>
    <ul>
      {navItems.map((list,index)=>{
        return(
          <Link key={index} href={list.link}><li className={`${path === list.link && "active"}`}>{list.title}</li></Link>
        )
      })}
    </ul>
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
              animate={ isOpen ?{scale:[0,1],opacity:1}:{opacity:0}}
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