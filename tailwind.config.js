/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans', "sans-serif"],
        lora: ['Lora', 'serif']
      },
      colors: {
        primary: "#615C99 ",
        secondary: "#F0592A"
      }
    },
  },
  plugins: [],
}