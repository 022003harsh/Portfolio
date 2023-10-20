import React, { useState,useEffect } from 'react'
import {about1} from '../../../data/about'
import {about2} from '../../../data/about'
 

const Ctbutton = ({status,about}) => {
    const [Abouts,setabout]=useState(about1);
    useEffect(() => {
        if(about==="about1"){
            setabout(about1)
        }
        else{
            setabout(about2)
        }
    }, [about]);
  return (
    <div className='blackwhite p-5 md:p-10 rounded-[10px] md:rounded-[30px] text-white'>
      <p className='mb-4 text-lg font-semibold'>{status}</p>
        <div className='flex flex-col gap-4'>
        {Abouts.map((item,key)=>(
            <div key={item.id} className='flex flex-col'>
                <div className='text-base text-[#888383]  font-semibold'>{item.start} - {item.end}</div>
                <div className='text-lg text-[#e6e6e6]  font-semibold'>{item.position}</div>
                <div className='text-base text-[#888383]  font-semibold'>{item.company}</div>
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default Ctbutton
