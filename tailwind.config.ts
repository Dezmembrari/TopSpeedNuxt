import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
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
      typography: ({ theme }: { theme: (path: string) => any }) => ({
        DEFAULT: {
          css: {
            'font-family': theme('fontFamily.sans'),
          },
        },
      }),
    },
  },
  darkMode: "class",
  plugins: [
    require("tw-elements/plugin.cjs"),
    require('@tailwindcss/typography'),
  ],
}
