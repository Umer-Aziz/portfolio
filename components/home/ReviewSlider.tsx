"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export default function ReviewSlider() {
    const SliderData = [
        {
            Image: "/img/avatar-3.png",
            Title: "Daniel Harris",
            fallback:"DH",
            subTitle:"SkyStudio Co Founder",
            Desc:"As co-founder, I highly commend Mr. Umer for his exceptional dedication, expertise, and collaborative spirit. With his keen attention to detail and proactive problem-solving approach, he significantly elevates our team dynamic."
        }, 
        {
            Image: "/img/abbir.jpg",
            Title: "Abbir Ali",
            fallback:"AB",
            subTitle:"Intern colleague",
            Desc: "Working with Umer was fantastic! Their expertise in React.js and dedication to quality made them invaluable. Efficient, skilled, and a pleasure to collaborate with – highly recommend for any project!"    
        }, 
        {
            Image: "/img/avatar-5.png",
            Title: "Kurram Shazad",
            fallback:"MH",
            subTitle:"President SES",
            Desc: "Working alongside Mr Umer has been a privilege.Their dedication and leadership have greatly enhanced our society. Their commitment to fostering growth has been instrumental in achieving our goals."    
        }, 
        {
            Image: "/img/avatar-4.png",
            Title: "Ekta Mirpuri",
            fallback:"EM",
            subTitle:"Upwork Client", 
            Desc: "I have had an absolute great experience working with Umer! He is prompt, timely, gives good suggestions and gets the job done excellently with any assistance required otherwise as well! Couldn't recommend him more highly than this!."    
        },  
        {
            Image: "/img/avatar-6.png",
            Title: "RushFone",
            fallback:"MA",
            subTitle:"Upwork Client",
            Desc: "Umer did the task perfectly and efficiently, exceeding our expectations. Now the site looks highly professional and polished. Thank you for completing the task quickly. Highly recommend for future projects!"    
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
                    delay: 10000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true
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
                }}
                modules={[Pagination, Autoplay]}
                className="w-full h-full !pb-8"
            >
                {SliderData.map((data, index) => {
                    return (
                        <SwiperSlide key={index} className='relative rounded-md md:rounded-lg'>
                            <Card className='shadow-md hover:shadow-primary group hover:border-primary duration-200'>
                                <CardHeader>
                                    <div className='flex items-center gap-3'>
                                    <Avatar>
                                        <AvatarImage src={data.Image} alt="user" />
                                        <AvatarFallback>{data.fallback}</AvatarFallback>
                                    </Avatar>
                                    <div className='mt-1'>
                                        <CardTitle>{data.Title}</CardTitle>
                                        <CardDescription>{data.subTitle}</CardDescription>
                                    </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p>{data.Desc}</p>
                                </CardContent>
                               
                            </Card>


                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </>
    );
}
