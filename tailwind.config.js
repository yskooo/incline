/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0D0D0E',
        'dark-gray': '#212124',
        'subtle': '#29292D'
      }
    },
  },
  plugins: [],
}
