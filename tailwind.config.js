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
        // Aquí puedes agregar fuentes personalizadas
        // Ejemplo:
        // sans: ['TuFuente', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

