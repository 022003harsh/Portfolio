import React from 'react'
import Countercard from './Countercard'
import Letsconnect from '../Letsconnect'

const Rowthree = () => {
  return (
    <div>
      <div className='relative text-white px-2 grid md:grid-cols-1 xl:grid-cols-2 gap-5'>
        <Countercard/>
        <div className='w-full h-full group flex flex-col text-3xl sm:text-5xl font-semibold rounded-[10px] sm:rounded-[30px] blackwhite p-2 md:p-10 relative'>
          {/* <img src="" alt="" /> */}
          <Letsconnect/>          
        </div>
      </div>
    </div>
  )
}

export default Rowthree
