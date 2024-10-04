/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  presets : [require('nativewind/preset')],
  theme: {
    extend: {
      colors : {
       primary : "#6842FF",
       secondary : '#121212',
       themeDark : '#1F222A',
       themeGray : '#BDBDBD',
       themeConfirm : '#24C467',
       themeError : '#FD6F70',

      }
    },
  },
  plugins: [],
}

