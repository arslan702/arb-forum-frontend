/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custum-pri': '#A87D2E', // Define your custom color and its hex code
        'custum-sec': '#dc940f', // Define your custom color and its hex code
        'custum-back': '#fffaf1', // Define your custom color and its hex code
      },
      fontFamily: {
        Almarai: ['Almarai'],

      }
    },
  },
  plugins: [],
}