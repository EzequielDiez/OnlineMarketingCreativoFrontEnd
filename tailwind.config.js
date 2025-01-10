/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aquí puedes extender los colores de tu marca
        // Ejemplo:
        // primary: '#FF0000',
        // secondary: '#00FF00',
      },
      fontFamily: {
        'helvetica-lt': ['"Helvetica LT Std"', 'sans-serif'],
        'acumin': ['"Acumin Variable"', 'sans-serif'],
        'akira': ['"Akira Expanded"', 'sans-serif'],
        'perfect': ['"Perfect Dream"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

