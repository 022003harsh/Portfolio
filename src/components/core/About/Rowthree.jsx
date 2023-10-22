import React from 'react'
import CTcard from '../HomePage/CTcard'
import sign from '../../../assets/Images/sign.png'
import Letsconnect from '../Letsconnect'

const Rowthree = () => {
  return (
    <div>
      <div className='text-white grid grid-cols-2 xl:grid-cols-4 gap-5 xl:h-[250px]'>
        <div className='col-span-1 row-start-2 xl:row-start-1'>
             <CTcard title1={"STAY WITH ME"} title2={"Socials"} links={"/contact"} socials1={"1"}/>
        </div>
        <div className='col-span-2 relative row-start-1 xl:row-start-1 w-full h-full group flex flex-col text-3xl sm:text-5xl font-semibold rounded-[10px] sm:rounded-[30px] blackwhite p-2 md:p-10 '>
            <Letsconnect/>          
        </div>

        <div className='col-span-1 row-start-2 xl:row-start-1'>
          <CTcard image={sign} title1={"MORE ABOUT ME"} title2={"Credentials"} links={"/about"}/>
        </div>

      </div>
    </div>
  )
}

export default Rowthree
