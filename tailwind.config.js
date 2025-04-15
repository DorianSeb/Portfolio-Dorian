/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ooohbaby: ['"Oooh Baby"', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#1a1a1a',
        'dark-text': '#ffffff',
        'light-bg': '#f7f7f7',
        'light-text': '#000000',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #1a1a1a, #292929)',
        'gradient-light': 'linear-gradient(to bottom, #f7f7f7, #ffffff)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}