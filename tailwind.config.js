/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Update this line
  ],
  theme: {
    container: {
      center: true,
      padding: '4rem',
    },
    extend: {},
  },
  plugins: [],
}

