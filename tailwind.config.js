/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        dark: '#2d3748',
        light: '#f7fafc'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3490dc',
              '&:hover': {
                color: '#2779bd',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
} 