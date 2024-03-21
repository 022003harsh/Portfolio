import React from 'react'
import TextAnimation from '../core/Navbar/TextAnimation'
import { NavbarSocials } from '../core/Navbar/NavbarSocials'

const Navbar = () => {
  return (
    <div className='p-4 rounded-2xl mt-3 bg-gradient-to-r from-slate-900 to-slate-800 font-sans flex justify-between'>
      <TextAnimation />
      <NavbarSocials />
    </div>
  )
}

export default Navbar
