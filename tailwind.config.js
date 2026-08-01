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
          petroleum: '#1D8BA5',       // Vibrant Cyan Petroleum from Logo Text
          darkPetroleum: '#115C6F',   // Deep Petroleum Teal for gradients and hover states
          lightPetroleum: '#36B3D1',  // Bright Cyan Highlight
          deepObsidian: '#09121A',    // Deep Navy Charcoal background tinted with Petroleum
          titanium: '#0E1B26',        // Rich Card Container & Panel Background
          steel: '#1B2D3D',           // Border & Divider Color
          gold: '#E5A823',            // Minero Gear Gold from the 'G' and gears
          goldLight: '#F5C242',       // Bright Gold Highlight
          goldHover: '#C48B12',       // Dark Metallic Gold Hover
          copper: '#C86E1B',          // Industrial Copper Accent
          silver: '#A0B2C6',          // Clean Metallic Silver Text/Borders
          muted: '#60758A'
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
