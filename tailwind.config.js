const defaultTheme = require('tailwindcss/defaultTheme');
const defaultColors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: [ './src/**/*.{html,ts,css,scss,sass,less,styl}' ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: defaultColors.blueGray,

    },
    extend: {},
    fontFamily: {
      'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    //require('@tailwindcss/aspect-ratio'),
    //require('@tailwindcss/forms'),
    //require('@tailwindcss/line-clamp'),
    //require('@tailwindcss/typography')
  ],
}
