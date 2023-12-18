/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto']
    },
    extend: {
      screens: {
        '3xl': '1920px',
        'max-3xl': {'max': '1919px'},
      },
      colors:{
        'white': '#FFF',
        'text': '#041526',
        'light-text': '#FFF',
        'blue': '#1173DA',
        'light-blue': '#A4E2FF',
        'pink': '#F05B82',
        'yellow': '#F2C935',
        'aqua': '#71DEBE',
        'bg-white': '#F6F8FA',
        'lines-white':'#ECEDEE',
        'red': '#FA506F',
        'icon-bg': '#8DC8E8',
        'green': '#4ED09A',  
              
      }
    },
  },
  plugins: [],
}

