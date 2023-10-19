import React from 'react'
import { Link } from "react-router-dom"
import CTcard from '../HomePage/CTcard'
import myimage from '../../../assets/Images/myimage.jpg'
import {GiPaperArrow} from 'react-icons/gi'
import Marquee from 'react-fast-marquee'
import sign from '../../../assets/Images/sign.png'

const Rowone = () => {
  return (
    <div className='text-white pt-11 px-2 grid grid-cols-1 xl:grid-cols-2 gap-5'>
            <div className='w-full h-full group flex justify-between xl:justify-normal gap-4 xl:gap-14 items-center px-2 py-7 md:px-10 rounded-[10px] sm:rounded-[30px] blackwhite shadow-xl border border-black hover:border-[#363636] transition-all duration-500'>
              <img src={myimage} alt="" className='h-[130px] xl:h-[220px] rounded-tl-3xl rounded-br-3xl '/>
              <div className='relative w-[190px] h-[110px] xl:h-[160px] flex flex-col justify-between'>
                <div className='text-[#817e7e] text-xs sm:text-base font-medium'>A WEB DEVELOPER</div>
                <h1 className='text-2xl xl:text-4xl font-medium '>Harsh Raj.</h1>
                <p className='text-[#817e7e] text-xs sm:text-base font-medium'>I am a Web Developer at MLSA KIIT</p>
                <GiPaperArrow className='absolute -bottom-[30px] right-[10px] cursor-pointer group-hover:text-white text-[#817e7e] text-4xl -rotate-[35deg] transition-all duration-500'/>
              </div>
            </div>
        <div className='flex flex-col gap-5'>
          <Marquee className='item-center text-[#817e7e] text-base rounded-3xl blackwhite h-16'>
             I am corrently working as a  <span>&nbsp;</span><span className='text-white'>Frontend developer</span><span>&nbsp;</span> also worked as a <span>&nbsp;</span><span className='text-white'>Backend web Developer</span><span>&nbsp;</span> with huge amount of projects.
          </Marquee>
          <div className='w-full h-full flex flex-row gap-5'>
            <div className='w-full'>
              <CTcard image={sign} title1={"MORE ABOUT ME"} title2={"Credentials"} link={"hi"}/>
            </div>
            <div className='w-full'>
              <CTcard image={sign} title1={"SHOWCASE"} title2={"Portfolios"} link={"hi"}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Rowone
