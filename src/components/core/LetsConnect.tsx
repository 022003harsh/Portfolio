'use client'
import React from 'react'
import {GiPaperArrow} from 'react-icons/gi'
import Link from 'next/link'
import Image from 'next/image'



const LetsConnect = () => {
  return (
    <div className=''>
      <Image 
        src="/assets/images/star4.png"
        height="80"
        width="80"
        alt=""
        className='absolute top-2 md:top-3 text-white h-[60px] md:h-[80px] right-5 md:left-5 rotate-[135deg]'
        />

      <Link
            href='#'
            onClick={(e) => {
                window.location.href = "mailto:harshku2222@gmail.com";
                e.preventDefault();
            }}
        >
            <GiPaperArrow className='absolute right-10 bottom-8 md:bottom-14 cursor-pointer group-hover:text-white text-[#817e7e] text-4xl -rotate-[35deg] transition-all duration-500'/>
        </Link>
          <div className='mt-[40px] sm:mt-[70px] '>Let&apos;s</div>
          <div className='flex'>
            <div className=''>work</div>
            <div className='ml-[14px] h-[60px] bg-gradient-to-r from-green-600 to-white bg-clip-text text-transparent'> together.</div>
          </div>
    </div>
  )
}

export default LetsConnect
