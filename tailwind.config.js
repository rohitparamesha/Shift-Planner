/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fade:"#898989",
        primary:"#E8DF0C"
      },
      fontFamily:{
        'amiri':["Amiri"],
        'base':["Poppins"],
        'gFont':["Inter"]
      }
    },
  },
  plugins: [],
}

