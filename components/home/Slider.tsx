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
import Image from 'next/legacy/image';

export default function Slider() {
    const SliderData = [
     
     {
        Tag:"React.js",
        Image:"/img/3.png",
        Title:"Online Learning Platform",
        Desc:"A versatile online learning hub for personalized skill development.",
        DemoLink:"/#",
        CodeLink:"/#",
     },
     {
      Tag:"Node.js",
      Image:"/img/portfolio/image-converter.png",
      Title:"Image converter app",
      Desc:"Convert an image from png to jpg , jpeg , webp and other format.",
      DemoLink:"https://hilarious-mite-wig.cyclic.app/",
      CodeLink:"https://github.com/Umer-Aziz/images-converter",
   },
   {
      Tag:"Next.js",
      Image:"/img/portfolio/zaancorp.png",
      Title:"Dashboard Design",
      Desc:"Design of Workflow of a corporation Like Todos , using Next.js",
      DemoLink:"https://zaancorp-test.vercel.app/",
      CodeLink:"https://github.com/Umer-Aziz/zaancorp",
   },
   {
    Tag:"React.js",
    Image:"/img/4.png",
    Title:"Online Courses Academy",
    Desc:"A versatile online learning hub for personalized skill development.",
    DemoLink:"/#",
    CodeLink:"/#",
 },
   {
      Tag:"Next.js",
      Image:"/img/portfolio/temp-mail.png",
      Title:"Temp Mail Website",
      Desc:"Temp Mail provides temporary, free, disposable email address.",
      DemoLink:"https://temp-mail-sepia.vercel.app/",
      CodeLink:"https://github.com/Umer-Aziz/temp-mail",
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
                <Image layout='responsive' width={500} height={500} className='block w-full h-full min-h-52 object-cover bg-contain rounded-t-lg' src={data.Image} alt="project" />
            </div>
            <div className='p-4 space-y-1'>
                <h6 className='text-lg lg:text-xl font-medium text-primary'>{data.Title}</h6>
                <p>{data.Desc}</p>
            </div>
    
            {/* // Refrence Link  */}
            <div className='absolute inset-0 grid place-content-center scale-0 group-hover:scale-100 duration-200'>
            <div className='flex items-center justify-center gap-2 -translate-y-4'>
                <a href={data.DemoLink} target='_blank'>
                <div className='bg-[#292524] p-3 rounded-full text-white hover:text-primary duration-150'>
                <MdOutlineLink className='text-xl'/>
                </div>
                </a>
                <a href={data.CodeLink} target='_blank'>
                <div className='bg-[#292524] p-3 rounded-full text-white hover:text-primary duration-150'>
                <PiGithubLogoBold className='text-xl'/>
                </div>
                </a>
            </div>
            </div>
    
        </SwiperSlide>
        )
    })}
    
      </Swiper>
    </>
  );
}
