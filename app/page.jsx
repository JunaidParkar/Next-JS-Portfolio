"use client"
import React, { useEffect, useRef } from 'react'
import Navbar from '@/components/navbar'
import CustomCursor from "codereducer/cursor";
import Lenis from 'lenis';

const page = () => {

  const explore = useRef([])
  const myRef = useRef();
  const cursor = useRef(null)

  const setRef = (element) => {
    if (element) {
      myRef.current = [...(myRef.current || []), element];
    }
  };

  useEffect(() => {
    let c = new CustomCursor(cursor.current)
    c.getCursor()
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // c.makeMagnet(myRef.current)
    return () => {
      c.revert()
    }
  }, []);



  return (
    <>
      <Navbar />

      {/* cursor starts */}
      <div ref={cursor}></div>
      {/* cursor ends */}

      {/* main section starts */}

      <div className='z-[1] top-0 left-0 w-full flex items-start justify-center'>
        <div className='w-[650px] h-[550px] px-[15px] flex flex-col justify-end gap-[20px]'>
          <div className='w-[75px] h-[75px] bg-red-500 rounded-[10px] overflow-hidden mt-[25px]'></div>
          <div>
            <h3 className='text-light-primaryText dark:text-dark-primaryText font-instrument-italic text-4xl font-normal tracking-[-1px]'>Junaid Parkar</h3>
            <span className='text-light-primaryText dark:text-dark-primaryText font-inter-regular text-[17px] opacity-[.8]'>Web developer</span>
          </div>
          <p className='text-light-primaryText dark:text-dark-primaryText font-inter-medium text-[20px]'>Hey, I'm Junaid, a developer from Mumbai working with ambitious brands and agencies.</p>
          <div className='flex gap-[20px]'>
            <button className='px-[20px] py-[10px] bg-dark-background dark:bg-light-background text-dark-primaryText dark:text-light-primaryText rounded-[10px]'>Download my CV</button>
            <button className='px-[20px] py-[10px] bg-light-background dark:bg-dark-background text-light-primaryText dark:text-dark-primaryText rounded-[10px] border-[1px] border-solid border-dark-background dark:border-light-background'>See my works</button>
          </div>
        </div>
      </div>

      {/* main section ends */}

      {/* main images section starts */}

      <div className='w-full flex gap-[25px] mt-[150px] overflow-x-auto img_scroller'>
        <div className='w-[750px] h-[650px] relative rounded-[10px] overflow-hidden shrink-0' ref={e => explore.current.push(e)} onMouseEnter={() => { explore.current[0].children[1].style.display = "flex" }} onMouseLeave={() => { explore.current[0].children[1].style.display = "none" }}>
          <img src="/assets/images/3d/ball_cover.jpg" alt='3D modelling cover' className='w-full h-full aspect-square object-cover absolute top-0 left-0 z-[1] brightness-50' />
          <div className='w-full h-full bg-[rgba(0,0,0,0.7)] cursor-pointer absolute top-0 left-0 z-[2] backdrop-blur-[20px] hidden items-center justify-center' >
            <p className='text-white font-inter-medium text-[23px]'>Explore Images</p>
          </div>
        </div>
        <div className='w-[750px] h-[650px] relative rounded-[10px] overflow-hidden shrink-0' ref={e => explore.current.push(e)} onMouseEnter={() => { explore.current[1].children[1].style.display = "flex" }} onMouseLeave={() => { explore.current[1].children[1].style.display = "none" }}>
          <img src="/assets/images/code/vs-cross.jpg" alt='3D modelling cover' className='w-full h-full aspect-square object-cover absolute top-0 left-0 z-[1]' />
          <div className='w-full h-full bg-[rgba(0,0,0,0.7)] cursor-pointer absolute top-0 left-0 z-[2] backdrop-blur-[20px] hidden items-center justify-center'>
            <p className='text-white font-inter-medium text-[23px]'>Explore Images</p>
          </div>
        </div>
      </div>

      {/* main images section ends */}

      {/* my services starts */}

      <div className='w-full min-h-[100dvh] text-light-primaryText dark:text-dark-primaryText flex justify-center'>
        <div className='w-[650px]'>
          <h4 className='font-inter-regular text-3xl w-full text-center mt-[175px]'>My services</h4>
          <div className='w-full mt-[50px]'>
            <ul className='list-none w-full flex flex-col gap-[20px]'>
              <li className='w-full py-[15px] px-[20px] flex gap-[15px] flex-col bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <h6>Web developmenet</h6>
                  <img src="/assets/icons/plus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px]' />
                </div>
              </li>
              <li className='w-full py-[15px] px-[20px] flex gap-[15px] flex-col bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <h6>Web developmenet</h6>
                  <img src="/assets/icons/plus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px]' />
                </div>
                <p className='text-light-secondaryText dark:text-dark-secondaryText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quisquam ratione unde nemo eveniet dolor, culpa accusamus aut, quasi, suscipit reiciendis nulla? A, iure tempore. Suscipit eius magnam perferendis ex? Necessitatibus voluptatibus illo laudantium vero, earum provident, repellat quod neque officiis ex cumque rerum, sunt minima magnam! Eos, enim deserunt?</p>
              </li>
              <li className='w-full py-[15px] px-[20px] flex gap-[15px] flex-col bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <h6>Web developmenet</h6>
                  <img src="/assets/icons/plus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px]' />
                </div>
              </li>
              <li className='w-full py-[15px] px-[20px] flex gap-[15px] flex-col bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <h6>Web developmenet</h6>
                  <img src="/assets/icons/plus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px]' />
                </div>
              </li>
              <li className='w-full py-[15px] px-[20px] flex gap-[15px] flex-col bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <h6>Web developmenet</h6>
                  <img src="/assets/icons/plus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px]' />
                </div>
              </li>
              <li className='w-full py-[15px] px-[20px] flex gap-[15px] flex-col bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <h6>Web developmenet</h6>
                  <img src="/assets/icons/plus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px]' />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* my services ends */}

      {/* my works starts */}

      <div className="w-full flex justify-center text-light-primaryText dark:text-dark-primaryText">
        <div className='w-[750px] bg-red-500'>
          <h4 className='font-inter-regular text-3xl w-full text-center mb-[50px]'>My works</h4>
          <div className='w-full bg-light-cardBackground dark:bg-dark-cardBackground p-[15px] rounded-[10px] mb-[10px]'>
            <img src="/assets/images/artex.png" alt="" className='w-full object-cover rounded-[10px] hover:brightness-75' />
            <div className='mt-[20px]'>
              <h6 className='font-inter-regular text-2xl'>Concrete</h6>
              <p className='text-lg font-inter-italic text-light-secondaryText dark:text-dark-secondaryText'>Web Design</p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-[10px] w-full'>
            <div className='rounded-[10px] bg-light-cardBackground dark:bg-dark-cardBackground p-[10px] w-full h-full'>
              <img src="/assets/images/artex.png" alt="" className='w-full object-cover rounded-[10px] hover:brightness-75' />
              <div className='mt-[20px]'>
                <h6 className='font-inter-regular text-2xl'>Concrete</h6>
                <p className='text-lg font-inter-italic text-light-secondaryText dark:text-dark-secondaryText'>Web Design</p>
              </div>
            </div>
            <div className='rounded-[10px] bg-light-cardBackground dark:bg-dark-cardBackground p-[10px] w-full h-full'>
              <img src="/assets/images/artex.png" alt="" className='w-full object-cover rounded-[10px] hover:brightness-75' />
              <div className='mt-[20px]'>
                <h6 className='font-inter-regular text-2xl'>Concrete</h6>
                <p className='text-lg font-inter-italic text-light-secondaryText dark:text-dark-secondaryText'>Web Design</p>
              </div>
            </div>
            <div className='rounded-[10px] bg-light-cardBackground dark:bg-dark-cardBackground p-[10px] w-full h-full'>
              <img src="/assets/images/artex.png" alt="" className='w-full object-cover rounded-[10px] hover:brightness-75' />
              <div className='mt-[20px]'>
                <h6 className='font-inter-regular text-2xl'>Concrete</h6>
                <p className='text-lg font-inter-italic text-light-secondaryText dark:text-dark-secondaryText'>Web Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* my works ends */}

    </>
  )
}

export default page