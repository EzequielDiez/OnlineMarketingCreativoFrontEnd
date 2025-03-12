/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',  // Móviles pequeños
      sm: '640px',  // Móviles grandes
      md: '768px',  // Tablets
      lg: '1024px', // Laptops
      xl: '1280px', // Monitores grandes
      '2xl': '1536px' // Pantallas extra grandes
    },
    extend: {
      colors: {
        'custom-beige': '#DBD0C6',
        // Aquí puedes extender los colores de tu marca
        // Ejemplo:
        // primary: '#FF0000',
        // secondary: '#00FF00',
      },
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
        'advercase': ['Advercase', 'sans-serif'],
        'helvetica': ['Helvetica LT Std', 'sans-serif'],
        'acumin': ['Acumin Variable', 'sans-serif'],
        'akira': ['Akira Expanded', 'sans-serif'],
        'perfect': ['Perfect Dream', 'sans-serif'],
        'sweetie': ['Sweetie Pie', 'sans-serif'],
      },
      keyframes: {
        fadeSlide: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        heroLogo: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)'
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.3)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        scaleIn: {
          '0%': {
            transform: 'scaleX(0)',
            opacity: '0'
          },
          '100%': {
            transform: 'scaleX(1)',
            opacity: '1'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fadeSlide': 'fadeSlide 0.5s ease-out',
        'heroLogo': 'heroLogo 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'scaleIn': 'scaleIn 0.6s ease-out forwards 0.5s',
        'fadeIn': 'fadeIn 0.5s ease-in forwards',
        'blink': 'blink 1s step-end infinite',
      }
    },
  },
  plugins: [],
}

