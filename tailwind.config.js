/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      animation: {
        fall: 'fall 3s linear infinite',
        glitch: 'glitch 2s infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '100%': { transform: 'translateY(1000%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};