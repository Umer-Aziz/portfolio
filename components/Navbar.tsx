import React from 'react'
import { ModeToggle } from './modeToggle'

const Navbar = () => {
  return (
   <>
   <nav>
    <div className='padd-x py-4 border flex justify-between items-center'>
    <div className='text-3xl font-bold'>
     <span className="text-primary">Umer</span>
     <span className="text-yellow-400">Aziz</span>
    </div>
    <ul></ul>
    <div>
        <ModeToggle/>
    </div>
    </div>
   </nav>
   </>
  )
}

export default Navbar