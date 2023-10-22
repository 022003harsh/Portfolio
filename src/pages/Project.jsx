import React from 'react'
import myimage from '../assets/Images/myimage.jpg'
import star from '../assets/Images/star4.png'
import sign from '../assets/Images/sign.png'
import { Projectdata } from '../data/projectcard'
import Card from '../components/core/Project/Cards'
import {GiPolarStar} from 'react-icons/gi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Project = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
  <div className='px-3'>
    <div className='flex flex-col md:flex-row items-center justify-between gap-5 text-white mt-10 md:mt-20 md:h-[400px] w-full'>
        <div className='w-[70%] sm:w-[400px] h-full p-5 rounded-[25px] blackwhite border-pure-greys-900 shadow-custom1 group' data-aos="zoom-in">
            {
                Projectdata.map((item)=>(
                    item.id==1   ?
                    (<Card key={item.id} item={item}/>):(<div/>)
                     ))
            }
        </div>
        <div className='h-full md:w-[70%] flex flex-col gap-5'>
            <div className='font-semibold flex items-center justify-center' data-aos="zoom-in">
                 <GiPolarStar className='text-yellow-25 text-3xl md:text-6xl mt-1 rotateimage'/>
                 <div className='text-2xl md:text-3xl lg:text-[54px]'>ALL-PROJECTS</div>
                 <GiPolarStar className='text-yellow-25 text-3xl md:text-6xl mt-1 rotateimage'/>
            </div>
            <div className='rounded-[10px] sm:rounded-[30px] flex h-full w-full justify-evenly  gap-5 md:gap-7'>
            {
                Projectdata.map((item)=>(
                    item.id==2||item.id==3  ?
                    ( <div className=' rounded-[10px] md:rounded-[30px] p-2 md:p-5 blackwhite h-full max-w-[400px] shadow-custom2 group' data-aos="zoom-in">
                        <Card key={item.id} item={item}/>
                      </div>
                        ):("")
                     ))
            }
            </div>
        </div>
    </div>   



    <div className='mx-auto mt-5 grid grid-cols-2 md:grid-cols-3 gap-5 max-w-[550px] md:max-w-full md:w-full '>
    {
                Projectdata.map((item)=>(
                    item.id==1||item.id==2||item.id==3  ?
                   (""):(<div className=' rounded-[10px] md:rounded-[30px] p-2 md:p-5 blackwhite h-full max-w-[400px] shadow-custom2 group' data-aos="zoom-in">
                        <Card key={item.id} item={item}/>
                      </div>)
                       
                     ))
            }
    </div> 
  </div>
  )
}

export default Project
