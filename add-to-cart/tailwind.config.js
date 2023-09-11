/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}