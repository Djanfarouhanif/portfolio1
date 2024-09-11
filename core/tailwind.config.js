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
      },
      colors:{
        "primary": "#0F103F",
        "secondary":"#1C1C65",
        "floot": "#1C1C6",
        "primarybutton": "#C961DE",
        "secondarybutton": "#2954A3"

      },
      screens: {
        "assete": {"max": "800px"}
      }
    },
  },
  plugins: [],
}