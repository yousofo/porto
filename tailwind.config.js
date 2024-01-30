/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      ntext: 'rgb(182, 182, 182)',
      nborder : 'rgb(75, 75, 75)',
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'ml': '992px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
}

