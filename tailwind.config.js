module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'ubuntu': ['Ubuntu'],
      'nunito': ['Nunito']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      richBlack: '#000510',
      white: '#FFFFFF',
      green: '#22C55E'
    }
  },
  plugins: [],
}