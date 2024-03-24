import React from 'react'


const About = () => {
  return (
    <div className="w-full h-full rounded-3xl p-6 gap-4 flex flex-col justify-between bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
        <h2 className='text-white sm:text-lg text-base font-normal font-edu-sa'>About me</h2>
        <div className="cursor-default font-edu-sa text-stone-400">
            I&apos;ve contributed to diverse projects, showcasing leadership and effective communication skills. Working as a
 
 Frontend developer
 also worked as a
 Backend web Developer
 with industry level projects.

        </div>

      <div>
        {/* <p className='text-[#817e7e] text-xs sm:text-base font-medium'>Languages</p> */}
        {/* <h2 className='text-[#817e7e] text-sm sm:text-lg font-bold font-edu-sa'>About me</h2> */}
      </div>
    </div>
  )
}

export default About
