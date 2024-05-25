/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        bgWhite: '#fefefe',
        hoverBtnClaro: '#0b213511',
        bgNegro: '#000000',
        bgAmarillo: '#FFD700',
        bgBtnAgregarCarrito: '#',
        hoverBtnAgregarCarrito: '#3b3be9d6'
      }
    },
  },
  plugins: [],
}

