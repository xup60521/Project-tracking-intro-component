/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Red: "hsl(0, 100%, 68%)",
                c_Very_Dark_Blue: "hsl(230, 29%, 20%)",
                c_Dark_Grayish_Blue: "hsl(230, 11%, 40%)",
                c_Grayish_Blue: "hsl(231, 7%, 65%)",
                c_Light_Grayish_Blue: "hsl(207, 33%, 95%)",
            },
            fontFamily: {
                body: ["Barlow", "system-ui"],
                other: ["Barlow Condensed", "sans-serif"]
            }
        },
    },
    plugins: [],
}

