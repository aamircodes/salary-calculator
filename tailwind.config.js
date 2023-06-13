/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Rubik', 'times-new-roman'],
    },
    extend: {},
  },
  daisyui: {
    themes: ['garden', 'dark'],
  },
  plugins: [require('daisyui')],
};
