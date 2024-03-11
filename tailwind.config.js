/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/App.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        '98grey': '#c0c0c0',
        '98text': '#222222',
      },

      backgroundImage: {
        'winbg': "url('src/assets/windowsbg.jpg')",
      }
    },
  },
  plugins: [],
};
