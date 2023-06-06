/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './Extra/**/*.{html,js,ts,jsx,tsx,mdx}',
    // './src./components/**/*.{html,js,ts,jsx,tsx,mdx}',
    // './src./app/**/*.{html,js,ts,jsx,tsx,mdx}',
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}"
  ],
  theme: {

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },

      screens: {
        'xs': { 'min': '480px', 'max': '599px' },
        'sm': { 'min': '600px', 'max': '767px' },
        'md': { 'min': '768px', 'max': '1023px' },
        'lg': { 'min': '1024px', 'max': '1279px' },
        'xl': { 'min': '1280px', 'max': '1535px' },
        '2xl': { 'min': '1536px' },
      },


    },
  },
  // variants: {
  //   extend: {
  //     display: ['sm'], // Enable 'screen-mob' variant for 'display' utilities
  //   },
  // },
  plugins: [],

}
