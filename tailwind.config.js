/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideLeft: 'slideLeft 1s ease-in-out infinite',
        slideRight: 'slideRight 1s ease-in-out infinite'
      },
      keyframes: {
        slideLeft: {
          '0%, 100%': { transform: 'translateX(-25%)'},
          '50%': { transform: 'translateX(0)' },
        },
        slideRight: {
          '0%, 100%': { transform: 'translateX(25%)'},
          '50%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-dotted-background'),
  ],
}
