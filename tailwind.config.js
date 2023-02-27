/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{pages,components}/**/*.{tsx,jsx,ts,js}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAFB',
        gray_2: '#4F4F4F',
        gray_3: '#828282',
        gray_4: '#BDBDBD',
        gray_6: '#F2F2F2',

        pale_blue:'#97BEF4',

        blue_1: '#2F80ED',

        green_1: '#219653',
      },
    },
  },
  plugins: [],
}
