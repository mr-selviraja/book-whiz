/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a86029',
        primaryLight: '#f1b846',
        primaryUltralight: '#FFECC6',
        lightFg: '#F8F7FF',
        lightBg: '#EBEAF4',
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
