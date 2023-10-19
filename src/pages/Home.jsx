import React from 'react'
import Rowone from '../components/core/HomePage/Rowone'
import Rowtwo from '../components/core/HomePage/Rowtwo'
import Rowthree from '../components/core/HomePage/Rowthree'

const Home = () => {
  return (
   <>
    <div className='bg-black flex flex-col gap-5'>
      <Rowone/>
      <Rowtwo/>
      <Rowthree/>
    </div>
   </> 
  )
}

export default Home
