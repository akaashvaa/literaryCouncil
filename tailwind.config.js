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
        'wh-primary': '#F5F5F7',
        'wh-f3': '#F3F3F3',
        'wh-fb': '#FBFBFB',
        'wh-c9': '#C9C9C9',
        'bl-primary': '#131313 ',
        'bl-secondary': '#20232A',
        footer: '#cfcece',
      },
    },
    screens: {
      xs: '480px',
      sm: '900px',
      md: '1300px',
    },
  },
  plugins: [],
}
