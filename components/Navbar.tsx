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
        <div className='relative'>
             <Button variant={"outline"} size={"icon"} className='flex flex-col gap-y-1'>
              <div className='w-[18px] h-1 bg-primary'></div>
              <div className='w-[18px] h-1 bg-primary'></div>
              <div className='w-[18px] h-1 bg-primary'></div>
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