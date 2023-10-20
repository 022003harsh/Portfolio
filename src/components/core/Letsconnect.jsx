import React from 'react'
import {GiPaperArrow} from 'react-icons/gi'


const Letsconnect = () => {
  return (
    <div>
          {/* <img src="" alt="" /> */}
      <GiPaperArrow className='absolute right-10 bottom-8 md:bottom-14 cursor-pointer group-hover:text-white text-[#817e7e] text-4xl -rotate-[35deg] transition-all duration-500'/>
          <div className='mt-[40px] sm:mt-[70px]'>Let's</div>
          <div className='flex'>
            <div className=''>work</div>
            <div className='ml-[14px] h-[60px] bg-gradient-to-r from-blue-400 to-blue-100 bg-clip-text text-transparent'> together.</div>
          </div> 
    </div>
  )
}

export default Letsconnect
