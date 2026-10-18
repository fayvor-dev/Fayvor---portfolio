/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.js'],
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT: '#F5F1E8', 50: '#FBF9F4', 100: '#F5F1E8', 200: '#EBE5D6', 300: '#DAD2BF' },
        charcoal: { DEFAULT: '#161616', 800: '#232220', 700: '#33312E', 600: '#4A4741' },
        cobalt: { DEFAULT: '#2340E6', 600: '#1A32BF', 300: '#8EA2FF', 100: '#DDE3FF' },
        muted: '#645F56',
      },
      fontFamily: {
        sans: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
