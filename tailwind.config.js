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
          petroleum: '#135B6D',       // Exact Deep Teal from 'RUPO ENOLG' logo text
          darkPetroleum: '#0C3E4B',   // Darker Teal for gradients and active states
          lightPetroleum: '#1D7F97',  // Vibrant Teal Accent
          deepObsidian: '#0A1117',    // Deep Charcoal Slate background with subtle teal tint
          titanium: '#0F1A24',        // Rich Card & Section Container Background
          steel: '#1B2A38',           // Border & Divider Color
          gold: '#E5A823',            // Exact Minero Gear Gold from the 'G' and gears
          goldLight: '#F5C242',       // Bright Gold Highlight
          goldHover: '#BA8210',       // Dark Metallic Gold Shadow/Hover
          copper: '#C86E1B',          // Warm Industrial Copper Accent
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
