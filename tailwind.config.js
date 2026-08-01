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
          gold: '#E5A823',            // Amarillo Dorado Engranaje Principal
          goldLight: '#F5C242',       // Amarillo Dorado Brillante
          goldHover: '#D4920E',       // Dorado Intenso Hover
          amber: '#F59E0B',           // Amarillo Ambar Industrial
          white: '#FFFFFF',           // Blanco Puro para alto contraste
          petroleum: '#0F4C5C',       // Azul Petroleo Oscuro
          darkPetroleum: '#0A323D',   // Fondo Petroleo Noche
          deepObsidian: '#0A0E14',    // Gris Oscuro Antracita
          titanium: '#121824',        // Superficie de Tarjetas
          steel: '#1E293B',           // Bordes de Acero
          silver: '#94A3B8',          // Gris Platinado
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
