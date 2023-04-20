/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue:colors.blue,
      green:colors.green,
      red:colors.red,
      panel:{
        blue:'#305F9E',
        green:'#60B79C',
        yellow:'#E7D69E',
        red:'#893426',
    },
    },
    fontFamily:{
      FZLT:'fzlt'
    },
    extend: {},
  },
  plugins: [],
}

