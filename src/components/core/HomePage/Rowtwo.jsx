import React from 'react'
import CTcard from '../HomePage/CTcard'
import sign from '../../../assets/Images/sign.png'


const Rowtwo = () => {
  return (
    <div>
      <div className='text-white px-2 grid grid-cols-2 xl:grid-cols-4 gap-5 xl:h-[250px]'>
        <div className='col-span-1 row-start-2 xl:row-start-1'>
          <CTcard image={sign} title1={"MY CV"} title2={"Download"} links={"hi"}/>
        </div>
        <div className='col-span-2 row-start-1 xl:row-start-1'>
          <CTcard title1={"SPECIALIZATION"} title2={"Tech Stacks"} links={"hi"} socials2={"1"}/>
         </div>
         <div className='col-span-1 row-start-2 xl:row-start-1'>
             <CTcard title1={"STAY WITH ME"} title2={"Socials"} links={"hi"} socials1={"1"}/>
        </div>
      </div>
    </div>
  )
}

export default Rowtwo
