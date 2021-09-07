module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: { padding: ['hover'],
    fill: ['hover', 'focus', 'active'],
    ringColor: ['hover', 'active'],},
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
  variants: {
    scrollbar: ['rounded']
}
}
