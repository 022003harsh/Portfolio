import React from 'react'
import Countercard from './Countercard'
import Letsconnect from '../Letsconnect'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Rowthree = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
    <div>
      <div className='relative text-white px-2 grid md:grid-cols-1 xl:grid-cols-2 gap-5'>
        <Countercard/>
        <div className='w-full h-full group flex flex-col text-3xl sm:text-5xl font-semibold rounded-[10px] sm:rounded-[30px] blackwhite p-2 md:p-10 relative' data-aos="fade-in">
          <Letsconnect/>          
        </div>
      </div>
    </div>
  )
}

export default Rowthree
