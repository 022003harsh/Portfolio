import React from 'react'
import { PROJECT_DETAIL } from '@/constants'
import { AnimatedTooltip2 } from '../ui/animated-tool2'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import Link from 'next/link';

const techbard = [
  {
    id: 1,
    name: "ReactJS",
    image: "GrReactjs",
    link: "https://linkedin.com/in/harsh-raj-898340217"
  },
  {
    id: 2,
    name: "Tailwind",
    image: "SiTailwindcss",
    link: "https://github.com/022003harsh"
  },
  {
    id: 3,
    name: "ExpressJS",
    image: "SiExpress",
    link: "https://x.com/Harsh_Raj2222?t=3h1bnfzxtOfSjrxsLh1Cnw&s=08"
  },
  {
    id: 4,
    name: "MongoDB",
    image: "SiMongodb",
    link: "https://www.instagram.com/harsh_rj002/"
  },
];

const mlsa = [
  {
    id: 1,
    name: "NextJS",
    image: "FaLinkedinIn",
    link: "https://linkedin.com/in/harsh-raj-898340217"
  },
  {
    id: 2,
    name: "Tailwind",
    image: "SiTailwindcss",
    link: "https://github.com/022003harsh"
  },
  {
    id: 3,
    name: "Framer Motion",
    image: "TbBrandFramerMotion",
    link: "https://x.com/Harsh_Raj2222?t=3h1bnfzxtOfSjrxsLh1Cnw&s=08"
  },
  {
    id: 4,
    name: "TypeScript",
    image: "SiTypescript",
    link: "https://x.com/Harsh_Raj2222?t=3h1bnfzxtOfSjrxsLh1Cnw&s=08"
  },

];const kiitfest = [
  {
    id: 1,
    name: "NextJS",
    image: "FaLinkedinIn",
    link: "https://linkedin.com/in/harsh-raj-898340217"
  },
  {
    id: 2,
    name: "Tailwind",
    image: "SiTailwindcss",
    link: "https://github.com/022003harsh"
  },
  {
    id: 3,
    name: "Prisma",
    image: "FaXTwitter",
    link: "https://x.com/Harsh_Raj2222?t=3h1bnfzxtOfSjrxsLh1Cnw&s=08"
  },
  {
    id: 4,
    name: "Framer Motion",
    image: "TbBrandFramerMotion",
    link: "https://x.com/Harsh_Raj2222?t=3h1bnfzxtOfSjrxsLh1Cnw&s=08"
  },
  
];const kritarth = [
  {
    id: 1,
    name: "ReactJS",
    image: "GrReactjs",
    link: "https://linkedin.com/in/harsh-raj-898340217"
  },
  {
    id: 2,
    name: "Github",
    image: "FaGithub",
    link: "https://github.com/022003harsh"
  },
  {
    id: 3,
    name: "Tailwind",
    image: "SiTailwindcss",
    link: "https://x.com/Harsh_Raj2222?t=3h1bnfzxtOfSjrxsLh1Cnw&s=08"
  },
];


const Projects = () => {
  return (
    <div className="w-full h-full rounded-3xl p-6 gap-4 xl:gap-10 flex flex-col justify-between  bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="flex flex-col cursor-default">
      <p className='mb-3 text-base font-semibold font-edu-sa' data-aos="fade-in">Projects</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3' data-aos="fade-in">
        {PROJECT_DETAIL.map((item,key)=>(
            <div key={item.id} className='flex flex-col min-h-28 bg-slate-900 gap-0.5 shadow-[0_1px_4px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_1px_10px_rgba(8,_112,_184,_0.7)] hover:scale-[98%] duration-200 transition-all p-1 px-2 mb-1 rounded-lg'>
                <div className='flex flex-col justify-between p-1 h-full'>
                  <div className='text-[14px] text-[#ece8e8]  font-semibold font-edu-sa'>{item.name}</div>
                  <div></div>
                  <div className='text-xs text-[#716f6f]  font-semibold'>TechStacks</div>
                  <div className='flex justify-between items-center'>
                  <div className='flex flex-row mr-2 md:mr-3 items-center'>
                  {item.techstack === "techbard" ? <AnimatedTooltip2 items={techbard} /> : null}
                  {item.techstack === "mlsa" ? <AnimatedTooltip2 items={mlsa} /> : null}
                  {item.techstack === "kiitfest" ? <AnimatedTooltip2 items={kiitfest} /> : null}
                  {item.techstack === "kritarth" ? <AnimatedTooltip2 items={kritarth} /> : null}
                  </div>
                  <div className='flex gap-0.5 md:gap-1'>
                  <Link href={item.github}>
                  <div className="object-cover cursor-pointer hover:scale-105 !m-0 !p-0 object-top rounded-full h-6 md:h-8 w-6 md:w-8 border-2 border-white relative transition duration-200 bg-slate-800 flex items-center justify-center">
                        <FaGithub/>
                  </div>
                  </Link>
                  <Link href={item.github}>
                  <div className="object-cover cursor-pointer hover:scale-105 !m-0 !p-0 object-top rounded-full h-6 md:h-8 w-6 md:w-8 border-2 border-white relative transition duration-200 bg-slate-800 flex items-center justify-center">
                  <FaLink/>
                </div>
                </Link>

                  </div>
                  
                  </div>
                  
                </div>


            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
