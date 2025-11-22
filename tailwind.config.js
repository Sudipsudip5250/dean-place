/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Lora', 'serif'],
      },
      colors: {
        'italian-red': '#8B0000',
        'italian-gold': '#D4AF37',
      },
    },
  },
  plugins: [],
};
