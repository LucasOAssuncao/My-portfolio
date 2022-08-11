/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 360px)

      'md': '820px',
      // => @media (min-width: 820px)

      'lg': '1366px',
      // => @media (min-width: 1366px)

      'xl': '1920px',
      // => @media (min-width: 1920px)

      'xxl': '2400px',
      // => @media (min-width: 2560px)
    },
  },
  plugins: [],
}
