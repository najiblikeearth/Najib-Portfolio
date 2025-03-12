/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['"Montserrat"', "sans-serif"],
                titillium: ['"Titillium Web"', "sans-serif"],
            },
        },
    },
    plugins: [require("daisyui")],

    daisyui: {
        themes: [
            {
                light: {
                    primary: "#10b981",
                    secondary: "#0f766e",
                    accent: "#047857",
                    neutral: "#2a323c",
                    "base-100": "#ffffff",
                    info: "#3abff8",
                    success: "#36d399",
                    warning: "#fbbd23",
                    error: "#f87272",
                },
                dark: {
                    primary: "#10b981",
                    secondary: "#0f766e",
                    accent: "#047857",
                    neutral: "#191D24",
                    "base-100": "#1f2937",
                    "base-200": "#111827",
                    "base-300": "#0f172a",
                    info: "#3abff8",
                    success: "#36d399",
                    warning: "#fbbd23",
                    error: "#f87272",
                },
            },
        ],
    },
};
