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
        'spin-slow': 'spin 7s linear infinite ',
      },

      screens: {
        'base': { min: '1px', max: '639px' },

      },


    },
  },

  plugins: [],

}
