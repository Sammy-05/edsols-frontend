/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    colors: {
      heading: '#0081A7',
      subheading: '#F07167',
      secondary: '#00AFB9',
      circles: '#FED9B7',
      white: '#FFFFFF',
      text: '#000000',
      edsols: "#323292"
    }
  },
  plugins: [],
}
