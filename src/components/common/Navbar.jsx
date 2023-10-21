import { Link, matchPath, useLocation } from "react-router-dom"
import { NavbarLinks } from "../../data/navbar-links"

function Navbar() {
  const location = useLocation()

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }
  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "" : ""
      } transition-all duration-200`}
    >
      <div className="flex px-2 w-full max-w-maxContent items-center justify-between">
        <Link to={"/"}>
          <div className='text-white text-3xl font-bold'>𝐇𝐚𝐫𝐬𝐡</div>
        </Link> 
       
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                  <Link to={link.path}>
                    <p
                      className={`${
                        matchRoute(link.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      } hover:text-yellow-25`}
                    >
                      {link.title}
                    </p>
                  </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to={"/contact"}>
            <div className='text-white text-lg  px-7 py-1 bg-[#353535] cursor-pointer rounded-xl'>Connect</div>
        </Link>
        
      </div>
    </div>
  )
}

export default Navbar
