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
      }
    },
  },
  plugins: [],
}