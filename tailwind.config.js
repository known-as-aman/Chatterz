/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        sm: '0.8rem'
      },
      width: {
        '128': '50%',
      },
      colors: {
        'regal-blue': '#243c5a',
      },
      maxWidth: {
        '1/2': '50%',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
}

