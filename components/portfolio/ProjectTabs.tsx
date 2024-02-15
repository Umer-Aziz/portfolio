import React, { useState } from 'react';
import { PiGithubLogoBold } from "react-icons/pi";
import { MdOutlineLink } from 'react-icons/md';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectTabs = () => {
    const [selectedTab, setSelectedTab] = useState("all");

    const ProjectData = [
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
            Tag:"fullstack",
            Image:"/img/4.png",
            Title:"Dashboard Design",
            Desc:"Lorem ipsum dolor sit, amet consec adipisicing elit osfwa.",
            DemoLink:"/#",
            CodeLink:"/#",
        },
    ];

    const filteredProjects = selectedTab === "all" ? ProjectData : ProjectData.filter(project => project.Tag === selectedTab);

    return (
        <div>
            <Tabs defaultValue="all">
                <div className='flex justify-center'>
                    <TabsList>
                        <TabsTrigger value="all" onClick={() => setSelectedTab("all")}>All Projects</TabsTrigger>
                        <TabsTrigger value="React.js" onClick={() => setSelectedTab("React.js")}>React.js</TabsTrigger>
                        <TabsTrigger value="Next.js" onClick={() => setSelectedTab("Next.js")}>Next.js</TabsTrigger>
                        <TabsTrigger value="fullstack" onClick={() => setSelectedTab("fullstack")}>FullStack</TabsTrigger>
                    </TabsList>
                </div>
                <div className='mt-12 md:mt-16'>
                    <TabsContent value={selectedTab}>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {filteredProjects.map((data, index) => (
                                <div key={index} className='cursor-pointer relative rounded-md md:rounded-lg shadow-md hover:shadow-primary border group hover:border-primary duration-200'>
                                    <span className='absolute top-3 left-2 bg-primary px-2 rounded-xl text-white'>{data.Tag}</span>
                                    <div className={`pt-12 px-10 dark:bg-[url(/img/project-bg-dark.png)] bg-[url(/img/project-bg-light.png)] bg-center`}>
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
