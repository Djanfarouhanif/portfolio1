/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      maxWidth:{
        "maxNav":"700px",
        "maxDes": "700px"
      }
    },
  },
  plugins: [],
}