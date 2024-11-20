"use client"
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react'

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [navOpen, setNavOpen] = useState(false)

    const button_ball = useRef([])

    useEffect(() => {
        setIsMounted(true); // Set mounted state to true after hydration
    }, []);

    useEffect(() => {
        if (isMounted) {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setDarkMode(savedTheme === 'dark');
            } else {
                // Check system preference if no saved theme
                setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
            }
        }
    }, [isMounted]);

    useEffect(() => {
        if (isMounted) {
            document.documentElement.classList.toggle('dark', darkMode);
            localStorage.setItem('theme', darkMode ? 'dark' : 'light');
            if (darkMode && button_ball.current) {
                button_ball.current[0].style.left = "auto";
                button_ball.current[0].style.right = "5px";
                button_ball.current[1].style.left = "auto";
                button_ball.current[1].style.right = "5px";
            } else if (!darkMode && button_ball.current) {
                button_ball.current[0].style.right = "auto";
                button_ball.current[0].style.left = "5px";
                button_ball.current[1].style.right = "auto";
                button_ball.current[1].style.left = "5px";
            }
        }
    }, [darkMode, isMounted]);

    if (!isMounted) return null;

    const mode_shift = () => {
        setDarkMode(!darkMode)
    }


    return (
        <>
            <div className='w-[650px] tablet:w-full h-[55px] bg-light-cardBackground dark:bg-dark-cardBackground rounded-[10px] tablet:rounded-[0] flex items-center justify-evenly tablet:justify-between px-[10px] tablet:px-[20px] fixed top-[20px] left-[50%] translate-x-[-50%] tablet:translate-x-0 tablet:left-0 tablet:top-0 z-[2] text-light-primaryText dark:text-dark-primaryText'>
                <svg className='w-[30px] h-[30px] invert-0 dark:invert hidden tablet:block' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 22.5" version="1.1" x="0px" y="0px">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-1.000000, -3.000000)" fillRule="nonzero" fill="#000000">
                            <g transform="translate(1.000000, 3.000000)">
                                <path d="M0.221929825,0.685964912 L0.221929825,15.2122807 C0.221929825,15.4239899 0.393554004,15.595614 0.605263158,15.595614 C0.816972312,15.595614 0.988596491,15.4239899 0.988596491,15.2122807 L0.988596491,0.685964912 C0.988596491,0.474255758 0.816972312,0.302631579 0.605263158,0.302631579 C0.393554004,0.302631579 0.221929825,0.474255758 0.221929825,0.685964912 Z" />
                                <path d="M6.2745614,0.685964912 L6.2745614,15.2122807 C6.2745614,15.4239899 6.44618558,15.595614 6.65789474,15.595614 C6.86960389,15.595614 7.04122807,15.4239899 7.04122807,15.2122807 L7.04122807,0.685964912 C7.04122807,0.474255758 6.86960389,0.302631579 6.65789474,0.302631579 C6.44618558,0.302631579 6.2745614,0.474255758 6.2745614,0.685964912 Z" />
                                <path d="M12.327193,0.685964912 L12.327193,15.2122807 C12.327193,15.4239899 12.4988172,15.595614 12.7105263,15.595614 C12.9222355,15.595614 13.0938596,15.4239899 13.0938596,15.2122807 L13.0938596,0.685964912 C13.0938596,0.474255758 12.9222355,0.302631579 12.7105263,0.302631579 C12.4988172,0.302631579 12.327193,0.474255758 12.327193,0.685964912 Z" />
                                <path d="M18.9850877,0.685964912 L18.9850877,15.2122807 C18.9850877,15.4239899 19.1567119,15.595614 19.3684211,15.595614 C19.5801302,15.595614 19.7517544,15.4239899 19.7517544,15.2122807 L19.7517544,0.685964912 C19.7517544,0.474255758 19.5801302,0.302631579 19.3684211,0.302631579 C19.1567119,0.302631579 18.9850877,0.474255758 18.9850877,0.685964912 Z" />
                                <path d="M3.24824561,3.10701754 L3.24824561,17.6333333 C3.24824561,17.8450425 3.41986979,18.0166667 3.63157895,18.0166667 C3.8432881,18.0166667 4.01491228,17.8450425 4.01491228,17.6333333 L4.01491228,3.10701754 C4.01491228,2.89530839 3.8432881,2.72368421 3.63157895,2.72368421 C3.41986979,2.72368421 3.24824561,2.89530839 3.24824561,3.10701754 Z" />
                                <path d="M9.30087719,3.10701754 L9.30087719,17.6333333 C9.30087719,17.8450425 9.47250137,18.0166667 9.68421053,18.0166667 C9.89591968,18.0166667 10.0675439,17.8450425 10.0675439,17.6333333 L10.0675439,3.10701754 C10.0675439,2.89530839 9.89591968,2.72368421 9.68421053,2.72368421 C9.47250137,2.72368421 9.30087719,2.89530839 9.30087719,3.10701754 Z" />
                                <path d="M15.3535088,3.10701754 L15.3535088,17.6333333 C15.3535088,17.8450425 15.525133,18.0166667 15.7368421,18.0166667 C15.9485513,18.0166667 16.1201754,17.8450425 16.1201754,17.6333333 L16.1201754,3.10701754 C16.1201754,2.89530839 15.9485513,2.72368421 15.7368421,2.72368421 C15.525133,2.72368421 15.3535088,2.89530839 15.3535088,3.10701754 Z" />
                                <path d="M22.0114035,3.10701754 L22.0114035,17.6333333 C22.0114035,17.8450425 22.1830277,18.0166667 22.3947368,18.0166667 C22.606446,18.0166667 22.7780702,17.8450425 22.7780702,17.6333333 L22.7780702,3.10701754 C22.7780702,2.89530839 22.606446,2.72368421 22.3947368,2.72368421 C22.1830277,2.72368421 22.0114035,2.89530839 22.0114035,3.10701754 Z" />
                            </g>
                        </g>
                    </g>
                </svg>
                <Link href="#services" className='tablet:hidden font-inter-regular text-[20px] font-medium opacity-[.8] hover:opacity-[1]'>Services</Link>
                <Link href="#works" className='tablet:hidden font-inter-regular text-[20px] font-medium opacity-[.8] hover:opacity-[1]'>Works</Link>
                <Link href="#more" className='tablet:hidden font-inter-regular text-[20px] font-medium opacity-[.8] hover:opacity-[1]'>About</Link>
                <Link href="#contact" className='tablet:hidden font-inter-regular text-[20px] font-medium opacity-[.8] hover:opacity-[1]'>Contact</Link>
                <div className='tablet:hidden w-[60px] h-[30px] cursor-pointer bg-dark-background dark:bg-light-background rounded-[50px] relative border border-light-background dark:border-dark-background' onClick={mode_shift}>
                    <div className='absolute h-[20px] left-[5px] top-[50%] translate-y-[-50%] rounded-[50px] aspect-square bg-light-background dark:bg-dark-background transition' ref={e => button_ball.current.push(e)}></div>
                </div>
                <img src="assets/icons/hamburger.png" alt="" className='w-[30px] h-[30px] hidden tablet:block invert-0 dark:invert cursor-pointer' onClick={() => setNavOpen(!navOpen)} />
            </div>

            <div className='w-full h-full hidden tablet:flex justify-center items-center backdrop:blur-[250px] fixed top-0 left-0 z-[4999] bg-light-background dark:bg-dark-background' style={navOpen ? { left: 0 } : { left: "100%" }}>
                <div className='w-[250px] h-[400px] flex flex-col justify-center items-center gap-[10px] bg-light-cardBackground dark:bg-dark-cardBackground text-light-primaryText dark:text-dark-primaryText rounded-[10px]'>
                    <Link href="#services" className='font-inter-regular text-[20px] font-medium opacity-[.8] hover:opacity-[1]'>Services</Link>
                    <Link href="#works" className='font-inter-regular text-[20px] font-medium opacity-[.8] hover:opacity-[1]'>Works</Link>
                    <Link href="#more" className='font-inter-regular text-[20px] font-medium opacity-[.8] hover:opacity-[1]'>About</Link>
                    <Link href="#contact" className='font-inter-regular text-[20px] font-medium opacity-[.8] hover:opacity-[1]'>Contact</Link>
                    <div className='w-[60px] h-[30px] cursor-pointer bg-dark-background dark:bg-light-background rounded-[50px] relative border border-light-background dark:border-dark-background' onClick={mode_shift}>
                        <div className='absolute h-[20px] left-[5px] top-[50%] translate-y-[-50%] rounded-[50px] aspect-square bg-light-background dark:bg-dark-background transition' ref={e => button_ball.current.push(e)}></div>
                    </div>
                </div>
                <img src="/assets/icons/cross.png" alt="" className='dark:invert w-[25px] h-[25px] cursor-pointer absolute top-[10px] right-[10px]' onClick={() => setNavOpen(!navOpen)} />
            </div>
        </>
    )
}

export default Navbar