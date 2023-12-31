import React from 'react'
import { count } from '../../../data/count'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'



const Countercard = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
    <div className='w-full h-full flex justify-evenly rounded-[10px] sm:rounded-[30px] items-center blackwhite px-2 py-7 md:p-7 xl:p-10 gap-2 md:gap-5' data-aos="fade-in">
        {
            count.map((item)=>(
                <div className='max-w-[200px] border-2 border-[#302f2f] sm:min-h-[150px] w-full h-full blackwhite4 rounded-[10px] sm:rounded-[30px] flex flex-col  items-center justify-center p-2' key={item.id}>
                    <div className='text-2xl sm:text-4xl font-semibold mb-[15px]'>{item.number}</div>
                    <p className='text-[#817e7e] text-xs sm:text-base font-medium'>{item.title1}</p>
                    <p className='text-[#817e7e] text-xs sm:text-base font-medium'>{item.title2}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Countercard
