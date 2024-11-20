"use client"
import OtherNavbar from '@/components/otherNavbar'
import customCursor from 'codereducer/cursor'
import React, { useEffect, useRef } from 'react'

const Page = () => {

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

            <div className="flex justify-center items-center flex-col tablet:px-[20px]">
                <div className='w-[650px] tablet:w-full flex flex-col justify-end gap-[20px] pt-[150px]'>
                    <img src="/assets/images/npmjs.png" alt="Code reducer" className='w-[250px] rounded-[10px] tablet:w-[150px]' />
                    <div className='w-full flex flex-col gap-[5px]'>
                        <h3 className='text-[30px] tablet:text-[27px] leading-[30px] font-bold font-instrument-regular tracking-[5px] text-light-primaryText dark:text-dark-primaryText'>CodeReducer</h3>
                        <p className='text-[17px] tablet:text-[15px] leading-[17px] font-light font-inter-regular tracking-[0] text-light-secondaryText dark:text-dark-secondaryText'>A versatile JavaScript library designed to simplify and enhance your web development projects.</p>
                    </div>

                    <div className='w-[650px] tablet:w-full flex flex-col justify-end gap-[20px] mt-[50px] text-light-primaryText dark:text-dark-primaryText text-[20px] text-justify leading-[23px]'>
                        <p><strong>Code Reducer</strong> is a Python-based tool designed to help developers streamline and optimize their source code by reducing redundancies, enhancing readability, and improving maintainability. This tool identifies areas of the code that can be refactored, such as duplicate logic, unnecessary complexity, or unused elements, and provides suggestions or automated fixes to make the codebase more efficient. By using Code Reducer, developers can save time and effort in manual code reviews while ensuring a cleaner and more professional code structure.</p>
                        <br /><h2><strong>Key Features</strong></h2>
                        <ul className='list-disc'>
                            <li className='ml-[20px]'>
                                <span>Redundancy Detection:</span> Automatically scans the codebase to identify duplicated code blocks and suggests ways to consolidate them.
                            </li>
                            <li className='ml-[20px]'>
                                <span>Code Simplification:</span> Analyzes complex code structures and offers simplified alternatives to enhance readability and efficiency.
                            </li>
                            <li className='ml-[20px]'>
                                <span>Unused Code Identification:</span> Finds unused variables, functions, or imports, helping to clean up the codebase.
                            </li>
                            <li className='ml-[20px]'>
                                <span>Customizable Rules:</span> Provides options to configure rules for code optimization according to specific project requirements.
                            </li>
                            <li className='ml-[20px]'>
                                <span>Integration-Friendly:</span> Can be easily integrated into existing development workflows or CI/CD pipelines.
                            </li>
                            <li className='ml-[20px]'>
                                <span>Detailed Reports:</span> Generates comprehensive reports highlighting the areas optimized and changes made.
                            </li>
                        </ul><br />
                        <h2><strong>Why Use Code Reducer?</strong></h2>
                        <p>
                            Modern software development often involves large and complex codebases with contributions from multiple developers. Over time, such projects can accumulate technical debt due to redundant or suboptimal code. Code Reducer is designed to address these challenges by automating code review processes and enhancing the overall quality of the codebase.
                        </p>
                        <p>
                            By implementing Code Reducer in your projects, you can:
                        </p>
                        <ul className='list-disc'>
                            <li className='ml-[20px]'>
                                Save Time: Autopxmates tedious code review tasks, allowing developers to focus on feature development and bug fixing.
                            </li>
                            <li className='ml-[20px]'>
                                Improve Code Qupxality: Ensures a cleaner, more maintainable codebase, making it easier for new developers to onboard.
                            </li>
                            <li className='ml-[20px]'>
                                Reduce Errors: pxDetects potential issues in the code before they escalate into bugs.
                            </li>
                            <li className='ml-[20px]'>
                                Enhance Collabopxration: Provides clear and actionable feedback, fostering better communication within development teams.
                            </li>
                        </ul><br />
                        <h2><strong>Getting Started</strong></h2>
                        <p>
                            To get started with Code Reducer, simply clone the repository from GitHub and follow the instructions in the <code>README.md</code> file. The tool is easy to set up and requires minimal configuration to integrate with your existing projects.
                        </p><br />
                        <h2><strong>Contributing</strong></h2>
                        <p>
                            Contributions to Code Reducer are welcome! If you have ideas for new features, improvements, or bug fixes, feel free to fork the repository, create a new branch, and submit a pull request. Detailed contribution guidelines are available in the repository to help you get started.
                        </p><br />
                        <h2><strong>License</strong></h2>
                        <p>
                            Code Reducer is open-source software licensed under the <strong>MIT License</strong>. You are free to use, modify, and distribute the tool as per the terms of this license.
                        </p>
                        <p>
                            For more details, visit the <a href="https://github.com/JunaidParkar/Code-Reducer" target="_blank" className='underline'>GitHub repository</a>.
                        </p>
                    </div>
                </div>
            </div>
            <p className='mt-[50px] text-sm text-light-secondaryText dark:text-dark-primaryText w-full text-center mb-[10px]'>UI credits to <a className='underline' href="https://framer.com/projects/NARROW-Free-Portfolio-Template-for-Framer-copy--43cKg1XyPBiMHqoMVy0o-bZsv4?node=augiA20Il" target="_blank" rel="noopener noreferrer">framer.com</a>. 2024 @ all rights reserved</p>
        </>
    )
}


export default Page