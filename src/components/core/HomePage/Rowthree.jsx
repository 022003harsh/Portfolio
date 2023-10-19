import React from 'react'
import Countercard from './Countercard'
import {GiPaperArrow} from 'react-icons/gi'


const Rowthree = () => {
  return (
    <div>
      <div className='relative text-white px-2 grid md:grid-cols-1 xl:grid-cols-2 gap-5 sm:h-[270px] mb-20'>
        <Countercard/>
        <div className='w-full h-full group flex flex-col text-3xl sm:text-5xl font-semibold rounded-[10px] sm:rounded-[30px] blackwhite p-2 md:p-10 '>
          {/* <img src="" alt="" /> */}
        <GiPaperArrow className='absolute right-10 bottom-16 cursor-pointer group-hover:text-white text-[#817e7e] text-4xl -rotate-[35deg] transition-all duration-500'/>
          <div className='mt-[40px] sm:mt-[70px]'>Let's</div>
          <div className='flex'>
            <div className=''>work</div>
            <div className='ml-[14px] h-[60px] bg-gradient-to-r from-blue-400 to-blue-100 bg-clip-text text-transparent'> together.</div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Rowthree
