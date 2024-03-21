import React from 'react'
import { EXPERIENCE_DETAIL } from '@/constants'

const Experience = () => {
  return (
    <div className="w-full h-full rounded-3xl p-6 gap-4 xl:gap-10 flex flex-col justify-between  bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="flex flex-col cursor-default">
      <p className='mb-3 text-base font-semibold font-edu-sa' data-aos="fade-in">Experience</p>
        <div className='flex flex-col gap-3' data-aos="fade-in">
        {EXPERIENCE_DETAIL.map((item,key)=>(
            <div key={item.id} className='flex flex-col bg-slate-900 gap-0.5 shadow-[0_2px_3px_rgba(8,_132,_4,_0.7)] hover:shadow-[0_2px_3px_rgba(8,_132,_4,_0.7)] hover:scale-[98%] duration-100 transition-all p-1 px-2 mb-1 rounded-lg'>
                <div className='flex justify-between items-center'>
                <div className='text-[14px] text-[#e6e6e6]  font-semibold'>{item.position} <span className='text-xs text-[#888383]  font-semibold'>{item.grade}</span> </div>
                <div className='text-xs text-[#e6e6e6]  font-semibold'>{item.start}-{item.end}</div>
                </div>
                <div className='text-xs text-[#888383]  font-semibold'>{item.company}</div>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
