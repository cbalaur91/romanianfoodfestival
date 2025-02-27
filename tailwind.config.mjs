/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Yellow
        secondary: '#CE1126', // Red
        tertiary: '#002B7F', // Blue
        dark: '#1a1a1a',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(206,17,38,0.8) 0%, rgba(255,215,0,0.8) 50%, rgba(0,43,127,0.8) 100%)',
        'section-gradient': 'linear-gradient(to right, rgba(206,17,38,0.1), rgba(255,215,0,0.1), rgba(0,43,127,0.1))',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}