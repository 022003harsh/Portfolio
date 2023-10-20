import React from 'react'
import Ctbutton from './Ctbutton'

const Rowtwo = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
        <Ctbutton status={"EXPERIENCE"} about={"about1"}/>
        <Ctbutton status={"EDUCATION"} about={"about2"}/>
      </div>
    </div>
  )
}

export default Rowtwo
