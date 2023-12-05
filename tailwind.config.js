/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bluess:
        {
          50: '#e8f0ff',
          100: '#c4d2ef',
          200: '#9fb3e0',
          300: '#7995d2',
          400: '#5477c5',
          500: '#3b5eab',
          600: '#2d4986',
          700: '#1f3460',
          800: '#111f3c',
          900: '#020a19',
        }
      }
    },
  },
  plugins: [],
}