import React, { useRef, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiGithubLogoBold } from "react-icons/pi";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { MdOutlineLink } from 'react-icons/md';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide className='relative rounded-md md:rounded-lg border'>
            <span className='absolute top-2.5 left-2 bg-primary px-1 py-0.5 rounded-lg text-white'>React.js</span>
            <div className='pt-12 px-10 bg-center' style={{backgroundImage:"url(/img/project-bg-dark.png)"}}>
                <img src="/img/1.png" alt="project" />
            </div>
            <div className='p-4 space-y-1'>
                <h6 className='text-lg md:text-xl font-medium text-primary'>Blog Website</h6>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>

            {/* // Refrence Link  */}
            <div className='absolute inset-0 grid place-content-center'>
            <div className='flex items-center justify-center gap-2 -translate-y-4'>
                <div className='bg-[#292524] p-3 rounded-full text-white'>
                <MdOutlineLink className='text-xl'/>
                </div>
                <div className='bg-[#292524] bg-secondary p-3 rounded-full text-white'>
                <PiGithubLogoBold className='text-xl'/>
                </div>
            </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
}
