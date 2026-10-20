/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.js'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0C0C0C', 900: '#131313', 800: '#1B1B1B', 700: '#262626' },
        mist: { DEFAULT: '#D7E2EA', dim: '#98A4AD' },
        electric: { DEFAULT: '#4F7DFF', 300: '#8FAAFF', 600: '#3A62E0' },
        paper: '#F3F0E8',
      },
      fontFamily: {
        sans: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
