/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./assets/css/*.{js,css}",
  ],
  theme: {
    extend: {
      colors: {
        'tertiary-blue': '#00497e',
      },

      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['"Open Sans"', 'serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
}
