/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: {
          100: '#f7c4cc', // Light shade
          200: '#ed8b9c', // Medium light
          300: '#eb042b', // Base color
          400: '#d40a2d', // Medium dark for hover
          500: '#a0071e', // Dark shade for focus or active
        },
      },
    },
  },
  plugins: [],
}

