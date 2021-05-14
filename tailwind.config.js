const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    darkMode: false,
    content: [
      './index.html',
      './src/**/*.tsx',
      './src/**/*.js',
    ],
  },
  theme: {
  },
  variants: {},
  plugins: []
};