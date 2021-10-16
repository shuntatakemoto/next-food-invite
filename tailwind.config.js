module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { colors: { 'main-color': '#FFFFF0', 'sub-color': '#EEE8AA' } },
    fontFamily: {
      sans: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    boxShadow: {
      inner: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
