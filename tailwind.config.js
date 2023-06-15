/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '3xl': { max: '2135px' },
      '2.5xl': { max: '2000px' },
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      ms: { max: '900px' },
      // => @media (max-width: 1023px) { ... }
      m: { max: '820px' },
      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      ss: { max: '500px' },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      Josefin: ['Josefin Sans'],
    },

    extend: {},
  },
  plugins: [],
};
