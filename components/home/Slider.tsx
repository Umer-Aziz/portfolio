"use client" 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiGithubLogoBold } from "react-icons/pi";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { MdOutlineLink } from 'react-icons/md';

export default function Slider() {
    const SliderData = [
     {
        Tag:"React.js",
        Image:"/img/1.png",
        Title:"Blog Website",
        Desc:"Lorem ipsum dolor sit, amet consec adipisicing elit osfwa.",
        DemoLink:"/#",
        CodeLink:"/#",
     },
     {
        Tag:"Next.js",
        Image:"/img/2.png",
        Title:"Dashboard Design",
        Desc:"Lorem ipsum dolor sit, amet consec adipisicing elit osfwa.",
        DemoLink:"/#",
        CodeLink:"/#",
     },
     {
        Tag:"React.js",
        Image:"/img/3.png",
        Title:"Dashboard Design",
        Desc:"Lorem ipsum dolor sit, amet consec adipisicing elit osfwa.",
        DemoLink:"/#",
        CodeLink:"/#",
     },
     {
        Tag:"React.js",
        Image:"/img/4.png",
        Title:"Dashboard Design",
        Desc:"Lorem ipsum dolor sit, amet consec adipisicing elit osfwa.",
        DemoLink:"/#",
        CodeLink:"/#",
     },
    ]
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter:true
          }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        modules={[Pagination,Autoplay]}
        className="w-full h-full !pb-8"
      > 
    {SliderData.map((data,index)=>{
        return(
            <SwiperSlide key={index} className='relative rounded-md md:rounded-lg shadow-md hover:shadow-primary border group hover:border-primary duration-200'>
            <span className='absolute top-3 left-2 bg-primary px-2 rounded-xl text-white'>{data.Tag}</span>
            <div className={`pt-12 px-10 dark:bg-[url(/img/project-bg-dark.png)] bg-[url(/img/project-bg-light.png)]
             bg-center`}>
                <img className='block w-full h-full object-cover' src={data.Image} alt="project" />
            </div>
            <div className='p-4 space-y-1'>
                <h6 className='text-lg lg:text-xl font-medium text-primary'>{data.Title}</h6>
                <p>{data.Desc}</p>
            </div>
    
            {/* // Refrence Link  */}
            <div className='absolute inset-0 grid place-content-center scale-0 group-hover:scale-100 duration-200'>
            <div className='flex items-center justify-center gap-2 -translate-y-4'>
                <div className='bg-[#292524] p-3 rounded-full text-white hover:text-primary duration-150'>
                <a href={data.DemoLink} target='_blank'>
                <MdOutlineLink className='text-xl'/>
                </a>
                </div>
                <div className='bg-[#292524] p-3 rounded-full text-white hover:text-primary duration-150'>
                <a href={data.CodeLink} target='_blank'>
                <PiGithubLogoBold className='text-xl'/>
                </a>
                </div>
            </div>
            </div>
    
        </SwiperSlide>
        )
    })}
    
      </Swiper>
    </>
  );
}