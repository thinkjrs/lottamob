module.exports = {
  purge: [
    './pages/*.@(js|jsx|ts|tsx)',
    './pages/**/*.@(js|jsx|ts|tsx',
    './components/**/*.@(js|jsx|ts|tsx)',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
