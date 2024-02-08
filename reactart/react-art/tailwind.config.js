/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // to add extra fonts from google fonts.
      fontFamily:{
        title: ['"Pacifico"', 'cursive']
      }
    },
  },
  plugins: [],
}

