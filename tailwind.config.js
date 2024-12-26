/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-hover': '0 4px 10px rgb(35, 141, 202)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
