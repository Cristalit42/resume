/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff370c",
        secondary: "#ff370c26",
        white: "#fff",
        black: "#000",
      },
      fontFamily: {
        chetty: ["Chetty", "sans-serif"],
        luna: ["LunaObskurra", "sans-serif"],
      },
      boxShadow: {
        custom: `
          0 9px 20px 0 rgba(148, 148, 148, 0.1),
          0 36px 36px 0 rgba(148, 148, 148, 0.09),
          0 82px 49px 0 rgba(148, 148, 148, 0.05),
          0 146px 58px 0 rgba(148, 148, 148, 0.01),
          0 228px 64px 0 rgba(148, 148, 148, 0)
        `
      },
      screens: {
        '1000': '1000px',
        '1100': '1100px',
        '1200': '1200px',
        '1300': '1300px',
        '1400': '1400px',
        '1600': '1600px',
      }
    },
  },
  plugins: [],
}