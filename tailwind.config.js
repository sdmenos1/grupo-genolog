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
          gold: '#FFC107',            // Amarillo Vivo Maquinaria
          goldLight: '#FFE082',       // Amarillo Claro
          goldHover: '#FFA000',       // Amarillo Oscuro Hover
          amber: '#FF8F00',           // Naranja/Ambar Industrial
          white: '#FFFFFF',           // Blanco Puro
          petroleum: '#005BB5',       // Azul Corporativo Vibrante
          darkPetroleum: '#004385',   // Azul Corporativo Oscuro
          deepObsidian: '#0A0E14',    // Gris Oscuro Antracita (Mantenido para overlays)
          titanium: '#121824',        // Superficie de Tarjetas (Mantenido para legacy)
          steel: '#E2E8F0',           // Bordes de Acero Claras
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
