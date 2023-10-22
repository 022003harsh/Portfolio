import React from 'react'
import {GiPolarStar} from 'react-icons/gi'
import myimage from '../../../assets/Images/myimage.jpg'
import star from '../../../assets/Images/star4.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Rowone = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return(
    <div className='flex flex-col md:flex-row items-center justify-between gap-5 text-white mt-10 md:mt-20 md:h-[400px] w-full'>
        <div className='relative w-[70%] sm:w-[400px] h-full border p-5 rounded-[19px] md:rounded-[25px] blackwhite border-pure-greys-900 md:shadow-custom1' data-aos="fade-in">
            <img src={myimage} alt="" className='rounded-[10px] sm:rounded-[30px] w-full h-full'/>
        </div>
        <div className='h-full md:w-[70%] flex flex-col gap-5' data-aos="fade-in">
            <div className='font-semibold flex items-center justify-center'>
                 <GiPolarStar className='text-yellow-25 text-3xl md:text-6xl mt-1 rotateimage'/>
                 <div className='text-2xl lg:text-[64px]'>SELF-SUMMARY</div>
                 <GiPolarStar className='text-yellow-25 text-3xl md:text-6xl mt-1 rotateimage'/>
            </div>
            <div className=' blackwhite  rounded-[10px] sm:rounded-[30px] p-5 md:p-10 h-full flex flex-col gap-4 relative shadow-custom1'>
             <img src={star} alt="" className='absolute top-2 md:top-3 text-white h-[60px] md:h-[80px] right-5 md:left-5 rotate-[135deg]'/>
              <p className='mt-auto text-2xl md:text-4xl font-semibold'>
                        Harsh Raj.
                </p>
                <p className='text-justify lg:max-w-[90%] text-[#767575] text-sm md:text-base font-medium leading-6'>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum itaque aliquid ab repellendus facilis
                     eligendi quod, aperiam sunt,
                     ipsam ratione distinctio necessitatibus corrupti eveniet? Porro iusto quis rerum quod pariatur?
                </p>
            </div>
        </div>
    </div>
  )
}

export default Rowone