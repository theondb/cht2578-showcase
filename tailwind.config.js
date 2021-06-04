const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '832px',
      'lg': '1140px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#101012',
      white: '#F1F5F5',
      gray: {
        50: colors.coolGray[50],
        100: colors.coolGray[100],
        200: '#DFE4E4',
        300: '#969696',
        400: '#717375',
        500: colors.coolGray[500],
        600: colors.coolGray[600],
        700: '#232325',
        800: colors.coolGray[800],
        900: colors.coolGray[900],
      },
      red: colors.red,
      yellow: colors.amber,
      green: {
        25: '#1a4829',
        50: colors.green[50],
        100: colors.green[100],
        200: colors.green[200],
        300: colors.green[300],
        350: '#00bb55',
        400: '#00EE6C',
        500: colors.green[500],
        600: colors.green[600],
        700: colors.green[700],
        800: colors.green[800],
        900: colors.green[900],
      },
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {},
  },
  variants: {
    extend: {},
    borderWidth: ['hover'],
    borderColor: ['hover'],
    zIndex: ['hover'],
  },
  plugins: [],
};
