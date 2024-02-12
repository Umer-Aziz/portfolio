import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineDesignServices } from "react-icons/md";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Card3d = () => {

    const ref = useRef(null);

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
  
    const handleMouseMove = (e) => {
      if (!ref.current) return;
  
      const rect = ref.current.getBoundingClientRect();
  
      const width = rect.width;
      const height = rect.height;
  
      const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
      const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
  
      const rY = mouseX / width - HALF_ROTATION_RANGE;
      const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
  
      setRotateX(rX);
      setRotateY(rY);
    };
  
    const handleMouseLeave = () => {
      if (!ref.current) return;
      setRotateX(0);
      setRotateY(0);
    };

  return (
    <div className='pt-12 lg:pt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-x-12'>     
        <div>
        <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-primary dark:to-secondary to-gray-800"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid rounded-xl bg-background shadow-lg"
      >
      <div className="px-4 py-8">
        <div className="flex justify-center">
        <MdOutlineDesignServices className="text-5xl text-primary"/>
        </div>
        <div className="pt-6">
        <h5 className="text-center text-3xl">UX Design</h5>
        <p className="pt-3 tracking-wide text-center">
        I craft intuitive website designs that prioritize user experience, guiding visitors seamlessly toward their objectives.
         prioritizing user needs fosters loyalty and boosts long-term sales.
        </p>
        </div>
      </div>

      </div>
    </motion.div>
        </div>
        
        </div>
  
  );
};


export default Card3d;