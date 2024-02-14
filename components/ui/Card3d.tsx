import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineDesignServices } from "react-icons/md";
import { Each } from "../Each";
import { FaLaptopCode } from "react-icons/fa6";
import { GrDocumentPerformance } from "react-icons/gr";
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

type Service = {
  Icon: React.ElementType;
  Title: string;
  Desc: string;
};

const Card3d: React.FC = () => {
  
  const Services: Service[] = [
    {
      Icon: MdOutlineDesignServices,
      Title: "Ux Design",
      Desc:
        "I craft intuitive website designs that prioritize user experience, guiding visitors seamlessly toward their objectives. prioritizing user needs fosters loyalty and boosts long-term sales."
    },
    {
      Icon: FaLaptopCode,
      Title: "Web Development",
      Desc:
      "I create tailored solutions, from websites to SaaS products, designed to meet your goals. With a focus on user-friendliness and maintainability, your team retains control and flexibility."
    },
    {
      Icon: GrDocumentPerformance,
      Title: "Business Strategy",
      Desc:
         "We collaborate to define your website objectives, tailoring strategies for success. Start with a small-scale approach to attract initial customers, then seamlessly expand for sustained growth and increased leads."
    },
  ];

  const cards = useRef<(HTMLDivElement | null)[]>(Array(Services.length).fill(null).map(() => null));

  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (index, e) => {
    if (!cards.current[index]) return;

    const rect = cards.current[index]!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setHoveredCardIndex(index);
    cards.current.forEach((card, i) => {
      if (i !== index && card) {
        card.style.transform = "none";
      }
    });
    if (cards.current[index]) {
      cards.current[index]!.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
    }
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(null);
    cards.current.forEach((card) => {
      if (card) {
        card.style.transform = "none";
      }
    });
  };

  return (
    <div className="pt-12 lg:pt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-x-12">
    <Each of={Services} render={(data,index)=>
      <motion.div
      key={index}
      ref={(el) => (cards.current[index] = el)}
      onMouseMove={(e) => handleMouseMove(index, e)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d"
      }}
      whileInView={{ opacity:[0,1],translateX:[-50,0],translateY:[-50,0],transition:{duration:0.5,delay:index * 0.2}}}
    
      className="cursor-grab relative h-96 w-full rounded-xl bg-gradient-to-br from-primary dark:to-secondary to-gray-800"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d"
        }}
        className="absolute inset-4 grid rounded-xl bg-background shadow-lg"
      >
        <div className="px-4 py-8">
          <div className="flex justify-center">
            <data.Icon className="text-5xl text-primary" />
          </div>
          <div className="pt-6">
            <h5 className="text-center text-3xl">{data.Title}</h5>
            <p className="pt-3 tracking-wide text-center">{data.Desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
    }/>
    </div>
  );
};

export default Card3d;
