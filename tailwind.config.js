/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryLight: '#DCD7FF',
        primary: '#5A52AA',
        primaryDark: '#4B3E9B',
        secondadry: '#C0B64B',
        lightFg: '#F8F7FF',
        lightBg: '#F0EFFA',
        darkFg: '#26243B',
        darkBg: '#212032',
      },
      fontFamily: {
        regular: ['Roboto', 'Verdana', 'sans-serif'],
        accent: ['Montserrat', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
