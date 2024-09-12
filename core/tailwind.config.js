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
        "flootcolor": "#1C1C65",
        "primarybutton": "#C961DE",
        "secondarybutton": "#2954A3"

      },
      screens: {
        "assete": {"max": "600px"},
        "resPhone": {"max": "300px"},
        "menuscreens": {"max": "900px"},
      },
      width:{
        "topillustratore": "700px"
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
}