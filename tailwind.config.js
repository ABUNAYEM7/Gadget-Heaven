/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight': '#9538E2',
        'primary': '#0B0B0B',
        'dark1': '#09080F',
        'secondary': '#09080F99',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
