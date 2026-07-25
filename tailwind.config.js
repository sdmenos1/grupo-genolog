/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          petroleum: '#0F4C5C',
          darkPetroleum: '#0A323D',
          deepObsidian: '#0A0E14',
          titanium: '#121824',
          steel: '#1E293B',
          gold: '#C59B27',
          goldLight: '#E5BF54',
          goldHover: '#A67F1A',
          copper: '#B85312',
          silver: '#94A3B8',
          muted: '#64748B'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'sans-serif'],
        heading: ['var(--font-heading)', 'Montserrat', 'sans-serif']
      },
      boxShadow: {
        'executive': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'soft-gold': '0 4px 20px -2px rgba(197, 155, 39, 0.2)',
      }
    },
  },
  plugins: [],
}
