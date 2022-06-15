module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Avenir': ['Avenir', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        'primary': '#5B5C5E',
        'secondary': '#2DAEE1',
        'BG-lightGray': '#BDBFC2',
        'Gray-black': '#373A3E',
        'Gray-light': '#84898D',
        'Gray-dark': '#F7F8F9',
        'sky-blue': '#BCDEE8',
        'd-hero':'#212121'
      },
      spacing: {
        '72': '20.625',

      }
    },
  },
  plugins: [],
}
