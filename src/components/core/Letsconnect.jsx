import React from 'react'
import {GiPaperArrow} from 'react-icons/gi'
import star from '../../assets/Images/star4.png'
import { Link } from 'react-router-dom'



const Letsconnect = () => {
  return (
    <div>
      <img src={star} alt="" className='absolute top-2 md:top-3 text-white h-[60px] md:h-[80px] right-5 md:left-5 rotate-[135deg]'/>
      <Link to={"/contact"}>
          <GiPaperArrow className='absolute right-10 bottom-8 md:bottom-14 cursor-pointer group-hover:text-white text-[#817e7e] text-4xl -rotate-[35deg] transition-all duration-500'/>
      </Link>
          <div className='mt-[40px] sm:mt-[70px] '>Let's</div>
          <div className='flex'>
            <div className=''>work</div>
            <div className='ml-[14px] h-[60px] bg-gradient-to-r from-yellow-400 to-yellow-100 bg-clip-text text-transparent'> together.</div>
          </div>
    </div>
  )
}

export default Letsconnect
