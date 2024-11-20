/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "selector",
    theme: {
        extend: {
            fontFamily: {
                "instrument-italic": ["instrument_italic"],
                "instrument-regular": ["instrument_regular"],
                "inter-bold": ["inter_bold"],
                "inter-italic": ["inter_italic"],
                "inter-medium": ["inter_medium"],
                "inter-regular": ["inter_regular"]
            },
            colors: {
                light: {
                    background: '#FFFFFF',
                    primaryText: '#1E1E1E',
                    secondaryText: '#5A5A5A',
                    accent: '#0078D4',
                    cardBackground: '#F0F0F0',
                    border: '#E0E0E0',
                },
                dark: {
                    background: '#121212',
                    primaryText: '#FFFFFF',
                    secondaryText: '#BBBBBB',
                    accent: '#1A73E8',
                    cardBackground: '#1F1F1F',
                    border: '#333333',
                },
            },
            screens: {
                tablet: { max: "768px" },
                mobile: { max: "600px" }
            }
        },
    },
    plugins: [],
};