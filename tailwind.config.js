module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

      colors: {
        'ios-blue': '#06f', 'ios-blue-light':'#1f79ff',
        'black-gray':'#19191a'
      },
    },
  
    fontFamily: {
      'title':['Poppins'],
      'content': ['Inter'],
  },
  fontSize: {
    'xs': '.75rem',
    'sm-15':'15px',
    'sm': '.875rem',
    'tiny': '.875rem',
    'base': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
    '7xl': '5rem',
  },
  plugins: [],
  }
}
