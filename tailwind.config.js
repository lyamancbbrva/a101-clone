/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    screens: {
      'xs': '300px',
      '369' : '369px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans-serif']
      }
    }
  },
  plugins: [ require('preline/plugin') ]
}

