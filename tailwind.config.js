/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myFont: ['myFont', 'sans-serif'],
        myFontOne: ['myFontOne', 'sans-serif']
      },
      colors: {
        light: {
          primary: '#f1f1f1',
          secondary: '#d6d6d6',
        },
        dark: {
          primary: '#101010',
          secondary: '#1a1a1a',
        },
        grey: '#343434',
        borderColor: '#e5e7eb',
      },
      maxWidth: {
        '24em': '24em',
        '14em': '14em',
      },
      spacing: {
        '55rem': '55rem',
      },
      borderRadius: {
        '1.25': '1.25rem',
      },
      backgroundColor: {
        'bgGrey': '#70707008'
      },
      width: {
        '72px': '72px',
        '22px': '22px'
      },
      height: {
        '22px': '22px'
      },
      animation: {
        'spin-slow': 'spin 3s',
        'bounce-2': 'bounce 3s infinite'
      }
    },
  },
  plugins: [],
}

