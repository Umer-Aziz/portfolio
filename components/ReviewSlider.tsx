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
            Image: "https://github.com/shadcn.png",
            Title: "Thomas Shelby",
            subTitle:"Actor",
            Desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, assumenda beatae? Facere, asperiores quam! A cupiditate ut animi dignissimos consequuntur adipisci sed reprehenderit sunt?"    
        },  
        {
            Image: "https://github.com/shadcn.png",
            Title: "Thomas Shelby",
            subTitle:"Actor",
            Desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, assumenda beatae? Facere, asperiores quam! A cupiditate ut animi dignissimos consequuntur adipisci sed reprehenderit sunt?"    
        },  
        {
            Image: "https://github.com/shadcn.png",
            Title: "Thomas Shelby",
            subTitle:"Actor",
            Desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, assumenda beatae? Facere, asperiores quam! A cupiditate ut animi dignissimos consequuntur adipisci sed reprehenderit sunt?"    
        },  
        {
            Image: "https://github.com/shadcn.png",
            Title: "Thomas Shelby",
            subTitle:"Actor",
            Desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, assumenda beatae? Facere, asperiores quam! A cupiditate ut animi dignissimos consequuntur adipisci sed reprehenderit sunt?"    
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
                                        <AvatarFallback>CN</AvatarFallback>
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
