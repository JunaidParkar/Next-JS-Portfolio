"use client"
import OtherNavbar from '@/components/otherNavbar'
import customCursor from 'codereducer/cursor'
import React, { useEffect, useRef } from 'react'

const page = () => {

    const cursorRef = useRef(null)

    useEffect(() => {
        let cursor = new customCursor(cursorRef.current)

        cursor.getCursor()

        return () => {
            cursor.revert()
        }
    }, [])

    return (
        <>
            <div ref={cursorRef}></div>
            <OtherNavbar pageName="Code Reducer" />

            <div className="flex justify-center items-center flex-col">
                <div className='w-[650px] tablet:w-full flex flex-col justify-end gap-[20px] pt-[150px]'>
                    <img src="/assets/images/npmjs.png" alt="Code reducer" className='w-[250px] rounded-[10px]' />
                    <div className='w-full flex flex-col gap-[5px]'>
                        <h3 className='text-[30px] leading-[30px] font-bold font-instrument-regular tracking-[5px] text-light-primaryText dark:text-dark-primaryText'>CodeReducer</h3>
                        <p className='text-[17px] leading-[17px] font-light font-inter-regular tracking-[0] text-light-secondaryText dark:text-dark-secondaryText'>A versatile JavaScript library designed to simplify and enhance your web development projects.</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default page