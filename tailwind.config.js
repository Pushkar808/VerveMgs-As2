/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",

    // Or if using `src` directory:
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

