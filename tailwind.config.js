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
        roboto: ['Roboto', 'sans-serif'],  // Ajout de la police Roboto
      },
      colors: {
        'dark-bg': '#1a1a1a',   // Noir du fond sombre
        'dark-text': '#ffffff',  // Texte blanc pour le mode sombre
        'light-bg': '#f7f7f7',   // Fond clair pour le mode clair
        'light-text': '#000000', // Texte noir pour le mode clair
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #1a1a1a, #292929)', // Dégradé du noir vers un gris foncé
        'gradient-light': 'linear-gradient(to bottom, #f7f7f7, #ffffff)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}