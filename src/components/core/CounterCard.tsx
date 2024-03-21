import React from 'react'
import { COUNT } from '@/constants'



const CounterCard = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-800 w-full h-full flex justify-evenly rounded-3xl items-center px-2 py-7 md:p-10 gap-3 md:gap-5' data-aos="fade-in">
        {
            COUNT.map((item)=>(
                <div className='max-w-[170px] shadow-[0_1px_7px_rgba(8,_112,_184,_0.7)] bg-slate-900 sm:min-h-[120px] w-full h-full blackwhite4 rounded-[10px] sm:rounded-[30px] flex flex-col  items-center justify-center p-2 font-edu-sa' key={item.id}>
                    <div className='text-2xl sm:text-4xl font-semibold mb-[15px]'>{item.number}</div>
                    <p className='text-[#817e7e] text-xs sm:text-base font-medium'>{item.title1}</p>
                    <p className='text-[#817e7e] text-xs sm:text-base font-medium'>{item.title2}</p>
                </div>
            ))
        }
    </div>
  )
}

export default CounterCard
