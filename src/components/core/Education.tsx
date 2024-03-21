import React from 'react'
import { EDUCATION_DETAIL } from '@/constants'

const Education = () => {
  return (
    <div className="w-full h-full rounded-3xl p-6 gap-4 xl:gap-10 flex flex-col justify-between  bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="flex flex-col cursor-default">
      <p className='mb-3 text-base font-semibold font-edu-sa' data-aos="fade-in">Education</p>
        <div className='flex flex-col gap-3' data-aos="fade-in">
        {EDUCATION_DETAIL.map((item,key)=>(
            <div key={item.id} className='flex flex-col gap-0.5 p-1 shadow-[0_1px_6px_rgba(0,_112,_184,_0.7)] bg-slate-900 rounded-lg'>
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

export default Education
