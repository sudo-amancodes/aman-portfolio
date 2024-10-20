"use client";

import { FaHtml5, FaCss3, FaJs, FaPython, FaJava, FaReact, FaFigma, FaNodeJs, FaFlask } from "react-icons/fa";

import { SiDjango, SiNextdotjs, SiTailwindcss } from "react-icons/si";

// about data
const about = {
    title: "About Me",
    description: "I am a full stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies, including HTML, CSS, JavaScript, Python, Java, React, Node.js, and Flask. I am also familiar with Django, Tailwind CSS, and Figma.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Aman Waghchoure",
        },
        {
            fieldName: "Phone",
            fieldValue: "980-222-4230",
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ years",
        },
        {
            fieldName: "Email",
            fieldValue: "amanwaghchoure2004@gmail.com",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi, Marathi",
        },
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'I have worked on a variety of projects, including websites, web applications, and mobile apps. I have experience with both front-end and back-end development, and I am comfortable working with a variety of technologies.',
    items: [
        {
            company: "UNC Charlotte",
            position: "Machine Learning Researcher",
            duration: "August 2024 - Present",
        },
        {
            company: "Wells Fargo",
            position: "Software Engineer Intern",
            duration: "June 2024 - August 2024",
        },
        {
            company: "Scale AI",
            position: "AI Software Solutions",
            duration: "December 2023 - May 2024",
        },
        {
            company: "Lynkway LLC",
            position: "Software Engineer",
            duration: "January 2022 - December 2023",
        },
    ],
};

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: 'I am obtaining a Bachelor of Science in Computer Science from the University of North Carolina at Charlotte. I have taken courses in a variety of topics, including data structures, algorithms, machine learning, and artificial intelligence.',
    items: [
        {
            institution: "UNC Charlotte",
            degree: "Bachelor of Science in Computer Science",
            duration: "August 2021 - December 2024",
        },
        {
            institution: "UNC Charlotte",
            degree: "Master of Science in Computer Science",
            duration: "January 2024 - May 2025",
        },
        {
            institution: "FreeCodeCamp",
            degree: "Responsive Web Development",
            duration: "October 2023",
        },
    ],
};

const skills = {
    title: 'My skills',
    description: 'I have experience with a variety of technologies, including HTML, CSS, JavaScript, Python, Java, React, Node.js, and Flask. I am also familiar with Django, Tailwind CSS, and Figma.',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5',
        },
        {
            icon: <FaCss3 />,
            name: 'css 3',
        },
        {
            icon: <FaJs />,
            name: 'javascript',
        },
        {
            icon: <FaReact />,
            name: 'react.js',
        },
        {
            icon: <SiNextdotjs />,
            name: 'next.js',
        },
        {
            icon: <SiTailwindcss />,
            name: 'tailwind.css',
        },
        {
            icon: <FaNodeJs />,
            name: 'node.js',
        },
        {
            icon: <FaFigma />,
            name: 'figma',
        },
        {
            icon: <FaPython />,
            name: 'python',
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto py-10">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Us</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">
                                {experience.title}
                            </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map((item, index) => {
                                    return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                        <div className="flex items-center gap-3">
                                            {/* dot */}
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                            <p className="text-white/60">{item.company}</p>
                                        </div>
                                    </li>
                                    );
                                })}
                            </ul>
                        </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* education */}
                    <TabsContent value="education" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">
                                {education.title}
                            </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {education.items.map((item, index) => {
                                    return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                        <div className="flex items-center gap-3">
                                            {/* dot */}
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                            <p className="text-white/60">{item.institution}</p>
                                        </div>
                                    </li>
                                    );
                                })}
                            </ul>
                        </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                            {skills.skillList.map((skill, index) => {
                                return <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="capitalize">
                                            {skill.name}
                                        </p>
                                    </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </li>;
                            })}
                        </ul>
                                </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* about */}
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">
                                {about.title}
                            </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-l ">{item.fieldValue}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    </div>

                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
