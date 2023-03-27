/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       'archivo-black':['"Archivo Black"', 'sans-serif'],
       'work-sans':['"Work Sans"', 'sans-serif']
      },
      colors: {
        rtgreen: '#3DB763',
        rtgrey: '#E8E8E8'
      },
      backgroundImage: {
        'flowers': "url('/image/Flowers.png')"
      }
    },
  },
  plugins: [],
}
