/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}", "./pages/**/*.{html,js}", "./index.html", ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'veni': {
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: '',
        },
      },
      fontFamily: {
        clashV: "ClashDisplay-Variable",
        clashE: "ClashDisplay-Extralight",
        clashL: "ClashDisplay-Light",
        clashR: "ClashDisplay-Regular",
        clashM: "ClashDisplay-Medium",
        clashS: "ClashDisplay-Semibold",
        clashB: "ClashDisplay-Bold",
      },
    },
    container: {
      center: true,
      screens:{
        xl:'1224px'
      }
    },
  },
  plugins: [

  ],
}

