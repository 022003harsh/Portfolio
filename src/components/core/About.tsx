import React from 'react'


const About = () => {
  return (
    <div className="w-full h-full rounded-3xl p-6 gap-4 xl:gap-10 flex flex-col justify-between bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
        <h2 className='text-white sm:text-lg mb-3 text-base font-semibold font-edu-sa'>About me</h2>
        <div className="cursor-default">
            I&apos;ve contributed to diverse projects, showcasing leadership and effective communication skills.
        </div>

      <div>
        {/* <p className='text-[#817e7e] text-xs sm:text-base font-medium'>Languages</p> */}
        {/* <h2 className='text-[#817e7e] text-sm sm:text-lg font-bold font-edu-sa'>About me</h2> */}
      </div>
    </div>
  )
}

export default About
