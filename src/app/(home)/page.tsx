import React from 'react'
import { MyDescription } from '@/components/core/MyDescription'
import Language from '@/components/core/TechStacks/Language'
import Skills from '@/components/core/TechStacks/Skills'
import About from '@/components/core/About'
import Education from '@/components/core/Education'
import Projects from '@/components/core/Projects'
import Experience from '@/components/core/Experience'
import { ResumeSection } from '@/components/core/ResumeSection'
import CounterCard from '@/components/core/CounterCard'
import LetsConnect from '@/components/core/LetsConnect'

const HomePage = () => {
  return (
    <div className='text-white flex flex-col gap-y-3'>
      {/* row1 */}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-3'>
        <div>
          <MyDescription />
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
          <About />
          <Education />
        </div>
      </div>
      {/* row2 */}
      <div className='grid grid-cols-3 md:grid-cols-4 gap-3'>
        <div className='col-span-3 sm:col-span-1'>
        <Language />
        </div>
        <div className='col-span-3 sm:col-span-2'>
        <Skills />
        </div>
        <div className='col-span-3 md:col-span-1'>
        <ResumeSection />
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-3'>
        <Experience />
        <Projects />
      </div>
      <div className='relative text-white grid grid-cols-1 md:grid-cols-2 gap-3'>
        <CounterCard/>
        <div className='w-full h-full group flex flex-col text-3xl sm:text-5xl font-semibold rounded-3xl p-2 md:p-10 bg-gradient-to-r from-slate-900 to-slate-800 relative'>
          <LetsConnect/>          
        </div>
      </div>
    </div>
  )
}

export default HomePage