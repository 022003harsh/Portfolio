import React from 'react'
import {GiPaperArrow} from 'react-icons/gi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {BiLogoReact} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {LiaNodeJs} from 'react-icons/lia'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import { Link } from 'react-router-dom'
import resume from '../../../assets/resume.pdf'


const CTcard = ({image,title1,title2,links,socials1,socials2,download}) => {
  return (<>
   <div className='flex flex-col justify-between items-center group w-full h-full rounded-[10px] sm:rounded-[30px] blackwhite p-2 sm:p-7 border border-black hover:border-[#363636] transition-all duration-500 gap-2 sm:gap-0'>
      { image && <img src={image} alt="" className='text-white h-[60px]'/>}
      {socials1 && 
        <div className='border-2 border-[#302f2f] flex w-full h-[100px] rounded-xl justify-evenly items-center blackwhite3'>
        <Link to={"https://www.linkedin.com/in/harsh-raj-898340217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} >
            <AiOutlineLinkedin className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] p-2 sm:p-5 border-2 border-[#3e3e3e] rounded-full bg-[#2e2e2e] cursor-pointer'/>
        </Link>
        <Link to={"https://github.com/022003harsh"}>
          <AiOutlineGithub className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] p-2 sm:p-5 border-2 border-[#3e3e3e] rounded-full bg-[#2e2e2e] cursor-pointer'/>
        </Link>
        
        </div>
      }
      {
        socials2 && 
        <div className='flex justify-evenly items-center h-[100px] w-full '>
            <BiLogoReact  className='h-[95px] w-[95px] p-2 sm:p-5  rounded-full hover:scale-105 transition-all duration-500 hover:text-blue-200'/>
            <TbBrandNextjs  className='h-[95px] w-[95px] p-2 sm:p-5  rounded-full  hover:scale-105 transition-all duration-500  hover:text-black'/>
            <LiaNodeJs  className='h-[95px] w-[95px] p-2 sm:p-5  rounded-full  hover:scale-105 transition-all duration-500 hover:text-caribbeangreen-300'/>
            <SiExpress  className='h-[95px] w-[95px] p-2 sm:p-5  rounded-full  hover:scale-105 transition-all duration-500 hover:text-black'/>
            <SiMongodb  className='h-[95px] w-[95px] p-2 sm:p-5  rounded-full  hover:scale-105 transition-all duration-500  hover:text-caribbeangreen-300'/>
        </div>
      }
      <div className='flex justify-between items-center w-full'>
        <div className='pl-1 sm:pl-0'>
            <p className='text-[#817e7e] text-xs sm:text-base font-medium'>{title1}</p>
            <h2 className='text-white text-sm sm:text-lg font-bold'>{title2}</h2>
        </div>
        <div>
        {
          download==1 ? (
         <a href={resume} download="my_resume.pdf">
            <GiPaperArrow className='cursor-pointer group-hover:text-white text-[#817e7e] text-4xl -rotate-[35deg] transition-all duration-500 pr-[10px] sm:pr-0'/>
         </a>
          ):(
            <Link to={links}>
              <GiPaperArrow className='cursor-pointer group-hover:text-white text-[#817e7e] text-4xl -rotate-[35deg] transition-all duration-500 pr-[10px] sm:pr-0'/>
            </Link>
          )
        }
        </div>
      </div>
    </div>
    
    </>
  )
}

export default CTcard
