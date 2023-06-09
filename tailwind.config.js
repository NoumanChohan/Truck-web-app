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
        'i5': { min: '320px', max: '427px' },
        '12pro': { min: '428px', max: '728px' },
        'ipad': { min: '729px', max: '990px' },
        'ipadpro': { min: '991px', max: '1199px' },
        'mcbook': { min: '1200px', max: '1400px' },
        'dekstop': { min: '1401px', max: '1550px' },
        'wscreen': '1551px'
      },


    },
  },

  plugins: [],

}
