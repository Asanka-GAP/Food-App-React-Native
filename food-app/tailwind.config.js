/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.tsx','./components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily:{
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        roboto1:["Roboto-1"],
        roboto2:["Roboto-2"],
      },
    },
  },
  plugins: [],
}

