"use client"
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/navbar'
import CustomCursor from "codereducer/cursor";
import Link from 'next/link';

const Page = () => {

  const [contactData, setContactData] = useState({ name: "", email: "", message: "" })

  const explore = useRef([])
  const magnetRef = useRef();
  const cursor = useRef(null)
  const servicesRef = useRef([])

  const setMagnetRef = (element) => {
    if (element) {
      magnetRef.current = [...(magnetRef.current || []), element];
    }
  };

  const serviceClick = (i) => {
    const child1 = servicesRef.current[i].children[0].children[1];
    const child2 = servicesRef.current[i].children[0].children[2];
    const para = servicesRef.current[i].children[1];
    child1.style.display = child1.style.display === "none" ? "block" : "none";
    child2.style.display = child2.style.display === "none" ? "block" : "none";
    para.style.display = para.style.display === "none" ? "block" : "none";
  };


  useEffect(() => {
    let c = new CustomCursor(cursor.current)
    c.getCursor()
    c.makeMagnet(magnetRef.current)
    return () => {
      c.revert()
    }
  }, []);

  const submitContact = e => {
    e.preventDefault()
    const templateParams = {
      from_name: contactData.name,
      from_email: contactData.email,
      message: contactData.message,
    };
    let msg = `Hey there,\n I'm ${templateParams.from_name}, My email id is ${templateParams.from_email}.\n ${templateParams.message}`
    window.open(`https://wa.me/+918828954676?text=${encodeURIComponent(msg)}`, "_blank")
  }


  return (
    <>
      <Navbar />

      {/* cursor starts */}
      <div ref={cursor}></div>
      {/* cursor ends */}

      {/* main section starts */}

      <div className='z-[1] top-0 left-0 w-full flex items-start justify-center'>
        <div className='w-[650px] tablet:w-full h-[550px] px-[15px] tablet:px-[20px] flex flex-col justify-end gap-[20px]'>
          <div className='w-[100px] h-[100px] rounded-[10px] overflow-hidden mt-[25px] bg-red-500'>
            <img src="/assets/images/mine.jpg" alt="" className='w-full object-cover aspect-square' />
          </div>
          <div className='flex flex-col gap-[5px]'>
            <h3 className='text-light-primaryText dark:text-dark-primaryText font-instrument-italic text-4xl font-normal tracking-[-1px]' onClick={() => console.log("hello")}>Junaid Parkar</h3>
            <span className='text-light-primaryText dark:text-dark-primaryText font-inter-regular text-[17px] opacity-[.8]'>Web developer</span>
          </div>
          <p className='text-light-primaryText dark:text-dark-primaryText font-inter-regular text-[20px]'>Hey, I&apos;m Junaid, a developer from Mumbai working with ambitious brands and agencies.</p>
          <div className='flex gap-[20px]'>
            <Link className='px-[20px] py-[10px] bg-dark-background dark:bg-light-background text-dark-primaryText dark:text-light-primaryText rounded-[10px]' href="/Junaid_Resume.docx" download="Junaid_Resuce.docx" ref={setMagnetRef}>Download my CV</Link>
            <Link className='px-[20px] py-[10px] bg-light-background dark:bg-dark-background text-light-primaryText dark:text-dark-primaryText rounded-[10px] border-[1px] border-solid border-dark-background dark:border-light-background' href="#works">See my works</Link>
          </div>
        </div>
      </div>

      {/* main section ends */}

      {/* main images section starts */}

      <div className='w-full flex gap-[25px] pt-[150px] tablet:pt-[75px] overflow-x-auto img_scroller px-[20px]'>
        <div className='w-[500px] tablet:w-[250px] h-[500px] tablet:h-[250px] relative rounded-[10px] overflow-hidden shrink-0' ref={e => explore.current.push(e)} onMouseEnter={() => { explore.current[0].children[1].style.display = "flex" }} onMouseLeave={() => { explore.current[0].children[1].style.display = "none" }}>
          <img src="/assets/images/3d/ball_cover.jpg" alt='3D modelling cover' className='w-full h-full aspect-square object-cover absolute top-0 left-0 z-[1] brightness-50' />
          <div className='w-full h-full bg-[rgba(0,0,0,0.7)] cursor-pointer absolute top-0 left-0 z-[2] backdrop-blur-[20px] hidden items-center justify-center' >
            <p className='text-white font-inter-medium text-[23px]'>Explore Images</p>
          </div>
        </div>
        <div className='w-[500px] tablet:w-[250px] h-[500px] tablet:h-[250px] relative rounded-[10px] overflow-hidden shrink-0' ref={e => explore.current.push(e)} onMouseEnter={() => { explore.current[1].children[1].style.display = "flex" }} onMouseLeave={() => { explore.current[1].children[1].style.display = "none" }}>
          <img src="/assets/images/code/vs-cross.jpg" alt='3D modelling cover' className='w-full h-full aspect-square object-cover absolute top-0 left-0 z-[1]' />
          <div className='w-full h-full bg-[rgba(0,0,0,0.7)] cursor-pointer absolute top-0 left-0 z-[2] backdrop-blur-[20px] hidden items-center justify-center'>
            <p className='text-white font-inter-medium text-[23px]'>Explore Images</p>
          </div>
        </div>
      </div>

      {/* main images section ends */}

      {/* my services starts */}

      <div className='w-full min-h-[100dvh] text-light-primaryText dark:text-dark-primaryText flex justify-center' id='services'>
        <div className='w-[650px] tablet:w-full px-[20px]'>
          <h4 className='font-inter-regular text-3xl w-full text-center mt-[175px] tablet:mt-[100px]'>My services</h4>
          <div className='w-full mt-[50px]'>
            <ul className='list-none w-full flex flex-col gap-[20px]'>
              <li className='w-full py-[15px] px-[20px] flex gap-[15px] flex-col bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]' ref={(e) => servicesRef.current.push(e)}>
                <div className='flex items-center justify-between'>
                  <h6>Static websites</h6>
                  <img src="/assets/icons/plus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px]' onClick={() => serviceClick(0)} />
                  <img src="/assets/icons/minus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px] transition' style={{ display: "none" }} onClick={() => serviceClick(0)} />
                </div>
                <p className='text-light-secondaryText dark:text-dark-secondaryText' style={{ display: "none" }}>Skilled in creating high-quality, responsive static websites using modern web development frameworks like Next.js. With a focus on clean code and optimized performance, I deliver engaging and efficient web solutions that meet client needs without requiring a database backend.</p>
              </li>
              <li className='w-full py-[15px] px-[20px] flex gap-[15px] flex-col bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]' ref={(e) => servicesRef.current.push(e)}>
                <div className='flex items-center justify-between'>
                  <h6>Back-end Servers</h6>
                  <img src="/assets/icons/plus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px]' onClick={() => serviceClick(1)} />
                  <img src="/assets/icons/minus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px] transition' style={{ display: "none" }} onClick={() => serviceClick(1)} />
                </div>
                <p className='text-light-secondaryText dark:text-dark-secondaryText' style={{ display: "none" }}>Experienced in building robust and scalable backend servers that support seamless functionality and efficient data handling. Skilled in server-side technologies and RESTful API design, I create secure and high-performance backend solutions tailored to meet project requirements.</p>
              </li>
              <li className='w-full py-[15px] px-[20px] flex gap-[15px] flex-col bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]' ref={(e) => servicesRef.current.push(e)}>
                <div className='flex items-center justify-between'>
                  <h6>Database</h6>
                  <img src="/assets/icons/plus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px]' onClick={() => serviceClick(2)} />
                  <img src="/assets/icons/minus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px] transition' style={{ display: "none" }} onClick={() => serviceClick(2)} />
                </div>
                <p className='text-light-secondaryText dark:text-dark-secondaryText' style={{ display: "none" }}>Proficient in designing and managing databases to ensure data integrity, security, and optimal performance. With expertise in database schema design, queries, and optimization, I build reliable database solutions that effectively support application needs and enhance data-driven functionalities.</p>
              </li>
              <li className='w-full py-[15px] px-[20px] flex gap-[15px] flex-col bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]' ref={(e) => servicesRef.current.push(e)}>
                <div className='flex items-center justify-between'>
                  <h6>Android development</h6>
                  <img src="/assets/icons/plus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px]' onClick={() => serviceClick(3)} />
                  <img src="/assets/icons/minus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px] transition' style={{ display: "none" }} onClick={() => serviceClick(3)} />
                </div>
                <p className='text-light-secondaryText dark:text-dark-secondaryText' style={{ display: "none" }}>Skilled in Android development, creating intuitive and efficient mobile applications with a focus on user experience and performance. Proficient in Android SDK, Kotlin, and Java, I develop apps that are both visually appealing and functionally robust, tailored to meet diverse user needs.</p>
              </li>
              <li className='w-full py-[15px] px-[20px] flex gap-[15px] flex-col bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]' ref={(e) => servicesRef.current.push(e)}>
                <div className='flex items-center justify-between'>
                  <h6>Apps development</h6>
                  <img src="/assets/icons/plus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px]' onClick={() => serviceClick(4)} />
                  <img src="/assets/icons/minus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px] transition' style={{ display: "none" }} onClick={() => serviceClick(4)} />
                </div>
                <p className='text-light-secondaryText dark:text-dark-secondaryText' style={{ display: "none" }}>Experienced in app development, crafting high-quality applications focused on functionality, performance, and user engagement. Proficient in full-cycle development for both mobile and web apps, I build solutions that are responsive, scalable, and tailored to meet specific client and user requirements.</p>
              </li>
              <li className='w-full py-[15px] px-[20px] flex gap-[15px] flex-col bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]' ref={(e) => servicesRef.current.push(e)}>
                <div className='flex items-center justify-between'>
                  <h6>3D Modelling</h6>
                  <img src="/assets/icons/plus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px]' onClick={() => serviceClick(5)} />
                  <img src="/assets/icons/minus.png" alt="" className='cursor-pointer dark:invert w-[25px] h-[25px] transition' style={{ display: "none" }} onClick={() => serviceClick(5)} />
                </div>
                <p className='text-light-secondaryText dark:text-dark-secondaryText' style={{ display: "none" }}>Proficient in Blender 3D modeling, creating detailed and visually compelling models for various applications. With a strong grasp of texturing, lighting, and animation, I develop realistic and stylized 3D assets tailored for use in games, animations, and visual presentations.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* my services ends */}

      {/* my works starts */}

      <div className="w-full flex justify-center text-light-primaryText dark:text-dark-primaryText pt-[150px] tablet:pt-[100px]" id='works'>
        <div className='w-[750px] tablet:w-full px-[20px]'>
          <h4 className='font-inter-regular text-3xl w-full text-center mb-[50px]'>My works</h4>
          <Link href="/Projects/Artex" className='rounded-[10px] bg-light-cardBackground dark:bg-dark-cardBackground p-[10px] w-full block'>
            <img src="/assets/images/artex.png" alt="" className='w-full object-cover rounded-[10px] hover:brightness-75' />
            <div className='mt-[20px]'>
              <h6 className='font-inter-regular text-xl'>A.R.T.E.X</h6>
              <p className='text-base font-inter-italic text-light-secondaryText dark:text-dark-secondaryText'>AI companion for windows (comming soon)</p>
            </div>
          </Link>
          <div className='grid grid-cols-2 gap-[10px] w-full mt-[10px]'>
            <Link href="/Projects/CodeReducer" className='rounded-[10px] bg-light-cardBackground dark:bg-dark-cardBackground p-[10px] w-full h-full block'>
              <img src="/assets/images/npmjs.png" alt="" className='w-full block object-cover rounded-[10px] hover:brightness-75' />
              <div className='mt-[20px]'>
                <h6 className='font-inter-regular text-xl'>Codereducer</h6>
                <p className='text-base font-inter-italic text-light-secondaryText dark:text-dark-secondaryText'>npm package for frontend UI design.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* my works ends */}

      {/* little more about me starts */}

      <div className='w-full flex justify-center text-light-primaryText dark:text-dark-primaryText pt-[150px] tablet:pt-[100px] ' id='more'>
        <div className='w-[750px] tablet:w-full flex flex-col gap-[100px] tablet:gap-[75px] items-center px-[20px]'>
          <h4 className='font-inter-regular text-3xl w-full text-center'>A little more about me</h4>
          <div className='w-[75%] flex flex-col gap-[20px] font-inter-regular text-base'>
            <p>When I&apos;m not immersed in the world of design, you can find me exploring the outdoors, capturing nature through photography, or experimenting with new recipes in the kitchen.</p>
            <p>I&apos;m passionate about traveling and love discovering new cultures and cuisines. I also enjoy reading science fiction novels and staying up-to-date with the latest tech trends.</p>
            <p>My curiosity and enthusiasm for learning keep me inspired and constantly seeking new adventures.</p>
          </div>
          <div className='w-full grid grid-cols-4 grid-rows-1 px-[20px]'>
            <img src="/assets/images/sunset.jpg" alt="" className='w-full aspect-square object-cover origin-center rotate-[-10deg] hover:scale-[1.05] transition-[scale] rounded-[10px]' ref={setMagnetRef} />
            <img src="/assets/images/food.jpg" alt="" className='w-full aspect-square object-cover origin-center rotate-[10deg] hover:scale-[1.05] transition-[scale] rounded-[10px]' ref={setMagnetRef} />
            <img src="/assets/images/nature.jpg" alt="" className='w-full aspect-square object-cover origin-center rotate-[-10deg] hover:scale-[1.05] transition-[scale] rounded-[10px]' ref={setMagnetRef} />
            <img src="/assets/images/computer.jpg" alt="" className='w-full aspect-square object-cover origin-center rotate-[10deg] hover:scale-[1.05] transition-[scale] rounded-[10px]' ref={setMagnetRef} />
          </div>
        </div>
      </div>

      {/* little more about me ends */}

      {/* contact starts */}

      <div className='w-full text-light-primaryText dark:text-dark-primaryText flex justify-center pt-[150px] tablet:pt-[100px]' id='contact'>
        <div className='w-[550px] tablet:w-full tablet:px-[20px] pb-[75px] flex flex-col gap-[40px]'>
          <h4 className='text-3xl font-inter-regular w-full text-center '>Contact me</h4>
          <div className='flex flex-col gap-[15px] text-base tracking-tight'>
            <p>I’m excited to hear about your project and discuss how we can bring your ideas to life.</p>
            <p>Whether you have a question, need a quote, or just want to say hello, feel free to reach out.</p>
            <p>I’m always open to new opportunities and collaborations.</p>
          </div>
          <form className='w-full flex flex-col gap-[10px]' onSubmit={submitContact}>
            <div className='w-full flex gap-[10px]'>
              <input type="text" name="" id="" onChange={(e) => setContactData({ ...contactData, name: e.target.value })} required className='w-full px-[15px] py-[10px] rounded-[10px] bg-light-cardBackground dark:bg-dark-cardBackground placeholder:text-light-secondaryText dark:placeholder:text-dark-secondaryText' typeof='text' placeholder='Enter your name...' />
              <input type="email" name="" id="" onChange={(e) => setContactData({ ...contactData, email: e.target.value })} required className='w-full px-[15px] py-[10px] rounded-[10px] bg-light-cardBackground dark:bg-dark-cardBackground placeholder:text-light-secondaryText dark:placeholder:text-dark-secondaryText' placeholder='Hello there' />
            </div>
            <div>
              <textarea onChange={(e) => setContactData({ ...contactData, message: e.target.value })} required className='w-full px-[15px] py-[10px] rounded-[10px] bg-light-cardBackground dark:bg-dark-cardBackground placeholder:text-light-secondaryText dark:placeholder:text-dark-secondaryText' aria-expanded="false" rows={10} placeholder='Enter your email...' name="" id=""></textarea>
            </div>
            <button type="submit" className='w-full disabled:bg-dark-cardBackground dark:disabled:bg-light-cardBackground bg-dark-background dark:bg-light-background px-[15px] py-[10px] font-inter-regular text-dark-primaryText dark:text-light-primaryText disabled:text-dark-secondaryText dark:disabled:text-light-secondaryText rounded-[10px]'>Submit</button>
          </form>
        </div>
      </div>

      {/* contact ends */}

      <p className='text-sm text-light-secondaryText dark:text-dark-primaryText w-full text-center mb-[10px]'>UI credits to <a className='underline' href="https://framer.com/projects/NARROW-Free-Portfolio-Template-for-Framer-copy--43cKg1XyPBiMHqoMVy0o-bZsv4?node=augiA20Il" target="_blank" rel="noopener noreferrer">framer.com</a>. 2024 @ all rights reserved</p>

    </>
  )
}

export default Page