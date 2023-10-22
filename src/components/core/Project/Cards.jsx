import React from 'react'
import { Link } from 'react-router-dom'
import {GiPaperArrow} from 'react-icons/gi'



const Cards = ({item}) => {
  return (
    <div className='flex  h-full w-full flex-col justify-between items-center gap-5'>
      <div className='h-full w-full '>
        <img src={item.image} alt="" className='h-full w-full object-fill rounded-[10px] md:rounded-[30px] bg-pure-greys-300'/>
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className='pl-1 sm:pl-0'>
            <h3 className='text-yellow-25 text-sm sm:text-lg font-bold'>{item.ongoing}</h3>
            <p className='text-[#817e7e] text-xs sm:text-base font-medium'>{item.topic}</p>
            <h2 className='text-white text-sm sm:text-lg font-bold'>{item.subtopic}</h2>
        </div>
        <div>
        <Link to={item.links}>
          <GiPaperArrow className='cursor-pointer group-hover:text-white text-[#817e7e] text-4xl -rotate-[35deg] transition-all duration-500 pr-[10px] sm:pr-0'/>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Cards
