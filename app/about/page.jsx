"use client"

import React, { useEffect, useState } from 'react'

const page = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

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
        }
    }, [darkMode, isMounted]);

    if (!isMounted) return null; // Render nothing until hydrated

    return (
        <>
            <div className='text-black dark:text-white'>page</div>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded focus:outline-none"
            >
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </>
    )
}

export default page