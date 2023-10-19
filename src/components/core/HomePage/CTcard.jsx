import React from 'react'
import {GiPaperArrow} from 'react-icons/gi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {BiLogoReact} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {LiaNodeJs} from 'react-icons/lia'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'


const CTcard = ({image,title1,title2,link,socials1,socials2}) => {
  return (<>
   <div className='flex flex-col justify-between items-center group w-full h-full rounded-[10px] sm:rounded-[30px] blackwhite p-2 sm:p-7 border border-black hover:border-[#363636] transition-all duration-500'>
      { image && <img src={image} alt="" className='text-white h-[60px]'/>}
      {socials1 && 
        <div className='border-2 border-[#1f1f1f] flex w-full h-[100px] rounded-xl justify-evenly items-center blackwhite3'>
            <AiOutlineLinkedin className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] p-2 sm:p-5 border-2 border-[#3e3e3e] rounded-full bg-[#2e2e2e] cursor-pointer'/>
            <AiOutlineGithub className='h-[50px] sm:h-[75px] w-[50px] sm:w-[75px] p-2 sm:p-5 border-2 border-[#3e3e3e] rounded-full bg-[#2e2e2e] cursor-pointer'/>
        </div>
      }
      {
        socials2 && 
        <div className='flex justify-evenly items-center h-[100px] w-full'>
            <BiLogoReact  className='h-[95px] w-[95px] p-2 sm:p-5  rounded-full'/>
            <TbBrandNextjs  className='h-[95px] w-[95px] p-2 sm:p-5  rounded-full'/>
            <LiaNodeJs  className='h-[95px] w-[95px] p-2 sm:p-5  rounded-full'/>
            <SiExpress  className='h-[95px] w-[95px] p-2 sm:p-5  rounded-full'/>
            <SiMongodb  className='h-[95px] w-[95px] p-2 sm:p-5  rounded-full'/>
        </div>
      }
      <div className='flex justify-between items-center w-full'>
        <div>
            <p className='text-[#817e7e] text-xs sm:text-base font-medium'>{title1}</p>
            <h2 className='text-white text-sm sm:text-lg font-bold'>{title2}</h2>
        </div>
        <div>
        <GiPaperArrow className='cursor-pointer group-hover:text-white text-[#817e7e] text-4xl -rotate-[35deg] transition-all duration-500'/>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default CTcard
