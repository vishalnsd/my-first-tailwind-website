/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "sm": "480px",
        "csm": "620px"
      },
      spacing: {
        "big": "40rem",
        "a":"45%"
      }
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

