import React from 'react'
import { Link, matchPath, useLocation } from "react-router-dom"
import { NavbarLinks } from "../../data/navbar-links"

const Footer = () => {

  const location = useLocation()

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div className='flex flex-col text-white items-center justify-center gap-7 pb-10 mt-20'>
      <div className='text-white text-3xl font-bold'>𝐇𝐚𝐫𝐬𝐡</div>

      <div>
      <div className={`flex items-center justify-center`}>
        <div className="flex items-center justify-between">
          <nav className="">
           <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                  <Link to={link.path}>
                    <p
                      className={'hover:text-yellow-25 text-[#515151]'}
                    >
                      {link.title}
                    </p>
                  </Link>
                  </li>
                ))}
             </ul>
           </nav>
         </div>
        </div>
      </div>



      <div className='text-base '>@ All rights reserved by <span className='text-lg font-medium bg-gradient-to-r from-yellow-400 to-yellow-100 bg-clip-text text-transparent'>Harsh Raj</span></div>
    </div>
  )
}

export default Footer
