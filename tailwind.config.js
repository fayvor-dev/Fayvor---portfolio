/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#4A1620', // primary brand dark — deep oxblood, not navy
          950: '#1B0A0F',     // deepest — hero/footer/nav bg
          900: '#2A0F17',
          800: '#3A141D',
          700: '#5C1F2A',
        },
        lime: {
          DEFAULT: '#D7E639', // primary accent — bold acid lime, not gold
          light: '#E9F17E',
          dark: '#9DAE1F',
        },
        clay: {
          DEFAULT: '#C1642E', // web-development accent — burnt terracotta
          light: '#E08A54',
          dark: '#8A4620',
        },
        sage: {
          DEFAULT: '#4F8478', // 3D/interactive accent — dusty jewel sage
          light: '#7BAFA3',
          dark: '#2F5850',
        },
        bone: '#F2EADC',
        ink: '#20141A',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(2%, -3%) scale(1.05)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        fadeUp: 'fadeUp 0.7s ease-out both',
        float: 'float 14s ease-in-out infinite',
      },
    },
  },
  safelist: [
    'text-lime', 'border-lime/40', 'bg-lime',
    'text-clay', 'border-clay/40', 'bg-clay',
    'text-sage', 'border-sage/40', 'bg-sage',
  ],
  plugins: [],
};
