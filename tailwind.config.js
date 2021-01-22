module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      white: '#FFFFFF',
      blue: {
        400: '#1A5CFF'
      },
      yellow: {
        400: '#FFBA00'
      },
      red: {
        400: '#FF4757'
      },
      green: {
        400: '#46C93A'
      }
    }
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
