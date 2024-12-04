/** @type {import('tailwindcss').Config} */
// import xyz from '../dashboard/src/style.css'
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../dashboard/src/**/*.{vue,js,ts,jsx,tsx}',
    '../cart/src/**/*.{vue,js,ts,jsx,tsx}',
    '.. /user/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

