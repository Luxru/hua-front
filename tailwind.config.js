/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
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
        gray:'#D9D9D9',
    },
    },
    fontFamily:{
      ...fontFamily,
      FZLT:['var(--font-fzlt)']
    },
    extend: {},
  },
  plugins: [],
}

