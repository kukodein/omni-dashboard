/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/assets/img/Background.png')" 
      },
      colors: {
        'primary': '#4318FF',
        'balck': '#2B3674',
        'secondary': '#A3AED0',
        'grayPrimary': '#F4F7FE',
        'secondaryPositive': '#05CD99',
        'blackPrimary': '#1B2559',
        'primaryBlue': '#11047A'
      },
      borderWidth: {
        '1': '1px'
      },
      content: {
        dots: '.....................................................................'
      }
    },
  },
  plugins: [],
}
