module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

      colors: {
        'ios-blue': '#06f',
        'black-gray':'#19191a'
      },
    },
    fontSize:{
        'sm': '15px'
    },
    fontFamily: {
      'title':['Poppins'],
      'content': ['Inter'],
  },
  plugins: [],
  }
}
