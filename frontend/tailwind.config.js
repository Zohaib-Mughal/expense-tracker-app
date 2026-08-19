/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        brand: {
          50: '#eef4ff', 100: '#dae8ff', 400: '#4d8dff',
          500: '#2f6ff0', 600: '#1d56e0', 700: '#1a3fb8', 900: '#0f1f5c',
        },
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(31, 68, 214, 0.25)',
      },
    },
  },
  plugins: [],
}