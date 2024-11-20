"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const OtherNavbar = ({pageName}) => {
    const router = useRouter();
  return (
    <>
        <div className='w-[650px] tablet:w-full h-[55px] bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px] tablet:rounded-[0] flex items-center justify-center tablet:justify-between px-[10px] tablet:px-[20px] fixed top-[20px] left-[50%] translate-x-[-50%] tablet:translate-x-0 tablet:left-0 tablet:top-0 z-[2] text-light-primaryText dark:text-dark-primaryText'>
            <div className='absolute h-full top-0 left-[10px] tablet:left-[20px] flex justify-center items-center'>
                <img src="/assets/icons/back.png" alt="back" className='h-[50%] aspect-square cursor-pointer' onClick={() => {router.back()}} />
            </div>
            <h3 className='tablet:hidden font-inter-medium text-[25px] font-medium opacity-[.8] hover:opacity-[1]'>{pageName}</h3>
        </div>
    </>
  )
}

export default OtherNavbar