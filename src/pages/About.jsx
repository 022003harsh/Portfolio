import React from 'react'
import Rowone from '../components/core/About/Rowone'
import Rowtwo from '../components/core/About/Rowtwo'
import Rowthree from '../components/core/About/Rowthree'


const About = () => {
  return (
    <div className='p-2 gap-5 flex flex-col'>
      <Rowone/>
      <Rowtwo/>
      <Rowthree/>
    </div>
  )
}

export default About
