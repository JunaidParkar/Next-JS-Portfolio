"use client"
import React, { useEffect, useRef } from 'react'
import OtherNavbar from '@/components/otherNavbar'
import customCursor from 'codereducer/cursor'

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
      <OtherNavbar pageName="Artex" />
      <div className="flex justify-center items-center flex-col">
        <div className='w-[650px] tablet:w-full flex flex-col justify-end gap-[20px] pt-[150px]'>
          <img src="/assets/images/artex.png" alt="A.R.T.E.X" className='w-[250px] rounded-[10px]' />
          <div className='w-full flex flex-col gap-[5px]'>
            <h3 className='text-[30px] leading-[30px] font-bold font-instrument-regular tracking-[5px] text-light-primaryText dark:text-dark-primaryText'>A.R.T.E.X</h3>
            <p className='text-[17px] leading-[17px] font-light font-inter-regular tracking-[0] text-light-secondaryText dark:text-dark-secondaryText'>Advanced Responsive Text Entity for Xpertise.</p>
          </div>
        </div>

        <div className='w-[650px] tablet:w-full flex flex-col justify-end gap-[20px] mt-[50px] text-light-primaryText dark:text-dark-primaryText text-[20px] text-justify leading-[23px]'>
          <p className='font-normal font-inter-regular'>
            <strong>A.R.T.E.X</strong> (Advanced Responsive Text Entity for Xpertise) is an innovative AI-driven virtual assistant designed exclusively for Windows. Combining state-of-the-art technologies like Python, JavaScript, HTML, CSS, and advanced AI models, it serves as a comprehensive solution for task automation, query resolution, and interactive companionship. Its core features are centered around improving user productivity and enhancing the digital experience.
            <br /><br />A.R.T.E.X is built with natural language processing (NLP) and machine learning capabilities. These features enable it to understand user input, process complex queries, and deliver intelligent responses. It leverages Google’s pre-trained AI models to supplement its core functions, making it a versatile tool for both casual and professional users.
            <br /><br />As a personal AI companion, A.R.T.E.X facilitates engaging conversations, acting as a friendly assistant for users who prefer conversational interaction with their tools. While it is still in its early stages of development, the system demonstrates promising potential. It learns and adapts over time, becoming smarter and more accurate as it processes more user data.
            <br /><br />One of the unique aspects of A.R.T.E.X is its graphical user interface (GUI), which integrates access to all the developer's projects in one centralized hub. This integration allows users to easily navigate and use various tools, making A.R.T.E.X a one-stop platform for productivity. Whether it's managing files, accessing utilities, or executing automated workflows, the app is designed to streamline tasks and improve efficiency.
            <br /><br />Key highlights of A.R.T.E.X include:</p>
            <ul className='list-disc w-full'>
              <li className='ml-[20px]'>Seamless conversational AI capabilities for engaging interactions.</li>
              <li className='ml-[20px]'>Task automation using advanced machine learning algorithms.</li>
              <li className='ml-[20px]'>Centralized access to multiple tools and projects through an intuitive GUI.</li>
              <li className='ml-[20px]'>Expandable dataset for improved accuracy and functionality over time.</li>
            </ul>
            <p className='font-normal font-inter-regular'>Built with a mix of front-end and back-end technologies, A.R.T.E.X delivers a balance between aesthetics and performance. The use of HTML and CSS ensures a visually appealing interface, while JavaScript and Python power its core functionalities. Although server details are not made public for security reasons, the app is designed to work efficiently within its local ecosystem.
            <br /><br />A.R.T.E.X is a reflection of its developer’s vision to blend AI innovation with user-centric design. It emphasizes usability, scalability, and continuous improvement, laying the groundwork for future updates that will enhance its accuracy and expand its capabilities. While the current version is in its nascent stage, the project’s roadmap includes features such as smarter conversational logic, deeper integration with external APIs, and improved machine learning models.
            <br /><br />Overall, A.R.T.E.X is more than just an AI assistant; it’s a multi-functional platform that promises to simplify digital interactions, automate mundane tasks, and serve as a reliable companion for its users. The project embodies a vision of leveraging technology to create smarter, more efficient tools that adapt to user needs and grow with them over time.
          </p>
        </div>

        <div className='w-[650px] tablet:w-full flex justify-start mt-[50px] text-light-primaryText dark:text-dark-primaryText text-[20px] text-justify leading-[23px]'>
          <button disabled className='px-[20px] py-[10px] bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px]'><p className='text-light-secondaryText dark:text-dark-secondaryText'>Comming soon...</p></button>
        </div>
      </div>

      <p className='mt-[50px] text-sm text-light-secondaryText dark:text-dark-primaryText w-full text-center mb-[10px]'>UI credits to <a className='underline' href="https://framer.com/projects/NARROW-Free-Portfolio-Template-for-Framer-copy--43cKg1XyPBiMHqoMVy0o-bZsv4?node=augiA20Il" target="_blank" rel="noopener noreferrer">framer.com</a>. 2024 @ all rights reserved</p>
    </>
  )
}

export default page