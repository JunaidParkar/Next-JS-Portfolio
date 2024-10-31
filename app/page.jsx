"use client"
import React from 'react'
import Navbar from '@/components/navbar'

const page = () => {
  return (
    <>
      <Navbar />
      <div className='z-[1] relative top-0 left-0 w-[100vw] flex items-start justify-center bg-green-400'>
        <div className='w-[650px] h-[750px] bg-red-600 px-[15px] flex flex-col justify-center gap-[20px]'>
          <div className='w-[75px] h-[75px] bg-white'></div>
          <div>
            <h3 className='text-light-primaryText dark:text-dark-primaryText font-instrument-italic text-4xl font-normal tracking-[-1px]'>Junaid Parkar</h3>
            <span className='text-light-primaryText dark:text-dark-primaryText font-inter-regular text-[17px] opacity-[.8]'>Web developer</span>
          </div>
          <p className='text-light-primaryText dark:text-dark-primaryText font-inter-medium text-[20px]'>Hey, I'm Junaid, a developer from Mumbai working with ambitious brands and agencies.</p>
          <div className='flex gap-[20px]'>
            <button>Download my CV</button>
            <button>See my works</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default page