import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
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

export default function Home() {
  return (
    <main className="min-h-screen max-w-full bg-black flex flex-col text-white px-2 relative">
      <div className="w-[100vw] h-[100vh] fixed z-0 top-0 left-0" 
    //   style={{
    //   background:
    //     'rgb(116,21,21); background: linear-gradient(199deg, rgba(116,21,21,1) 0%, rgba(148,100,115,0) 50%, rgba(0,104,125,1) 100%)'
    // }}
      style={{
      background:
        'rgb(116,41,81); background: linear-gradient(199deg, rgba(16,1,55,2) 0%, rgba(18,10,115,0) 50%, rgba(16,1,55,2) 100%)'
    }}
    ></div>
      <div className="max-w-7xl w-full mx-auto flex-grow flex flex-col gap-y-5 z-10">
        <Navbar />
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
        <Footer />
      </div>
    </main>
  )
}
