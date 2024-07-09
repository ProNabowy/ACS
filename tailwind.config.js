/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'lg-text': '56px',
        'md-text': '20px',
        'sm-text': '13px',
      }
    },
  },
  plugins: [],
}