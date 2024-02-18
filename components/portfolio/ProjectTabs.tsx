import React, { useState } from 'react';
import { PiGithubLogoBold } from "react-icons/pi";
import { MdOutlineLink } from 'react-icons/md';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/legacy/image';

const ProjectTabs = () => {
    const [selectedTab, setSelectedTab] = useState("all");

    const ProjectData = [
     
        {
           Tag:"Next.js",
           Image:"/img/1.png",
           Title:"Virtual University",
           Desc:"A dynamic online learning platform for personalized skill enhancement.",
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
         Tag:"React.js",
         Image:"/img/portfolio/admin.png",
         Title:"Admin Panel UI",
         Desc:"Admin panel design developed by using React.js Material-ui",
         DemoLink:"https://github.com/Umer-Aziz/React_adminpanel",
         CodeLink:"https://github.com/Umer-Aziz/React_adminpanel",
      },
      {
        Tag:"React.js",
        Image:"/img/3.png",
        Title:"Online Learning Platform",
        Desc:"A flexible online learning platform for personalized skill growth.",
        DemoLink:"/#",
        CodeLink:"/#",
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
      {
        Tag:"Node.js",
        Image:"/img/portfolio/portfolio.png",
        Title:"Developer Portfolio",
        Desc:"Developer portfolio website using html , css and Node.js",
        DemoLink:"https://nice-puce-rooster-wrap.cyclic.app/",
        CodeLink:"https://github.com/Umer-Aziz/portfolio-website",
     },
      {
        Tag:"Node.js",
        Image:"/img/2.png",
        Title:"Pizza Ordering Website",
        Desc:"pizza ordering website with payment method using Mongodb & Node,js",
        DemoLink:"https://github.com/Umer-Aziz/pizzabuzz",
        CodeLink:"https://github.com/Umer-Aziz/pizzabuzz",
     },
       ]
    const filteredProjects = selectedTab === "all" ? ProjectData : ProjectData.filter(project => project.Tag === selectedTab);

    return (
        <div>
            <Tabs defaultValue="all">
                <div className='flex justify-center'>
                    <TabsList>
                        <TabsTrigger value="all" onClick={() => setSelectedTab("all")}>All Projects</TabsTrigger>
                        <TabsTrigger value="React.js" onClick={() => setSelectedTab("React.js")}>React.js</TabsTrigger>
                        <TabsTrigger value="Next.js" onClick={() => setSelectedTab("Next.js")}>Next.js</TabsTrigger>
                        <TabsTrigger value="Node.js" onClick={() => setSelectedTab("Node.js")}>Node.js</TabsTrigger>
                    </TabsList>
                </div>
                <div className='mt-12 md:mt-16'>
                    <TabsContent value={selectedTab}>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {filteredProjects.map((data, index) => (
                                <div key={index} className='cursor-pointer relative rounded-md md:rounded-lg shadow-md hover:shadow-primary border group hover:border-primary duration-200'>
                                    <span className='absolute top-3 left-2 bg-primary px-2 rounded-xl text-white'>{data.Tag}</span>
                                    <div className={`pt-12 px-10 dark:bg-[url(/img/project-bg-dark.png)] bg-[url(/img/project-bg-light.png)] bg-center`}>
                                        <Image layout='responsive' width={500} height={500} className='block w-full h-full object-cover bg-contain rounded-t-xl' src={data.Image} alt="project" />
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
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
};

export default ProjectTabs;
