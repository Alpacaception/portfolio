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
      'nunito': ['Nunito'],
      'ubuntu-l': ['Ubuntu']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      richBlack: '#00031c',
      white: '#FFFFFF',
      green: '#22C55E'
    }
  },
  plugins: [],
}