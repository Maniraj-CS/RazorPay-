/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      grayscale: {
        25: '25%',
        50: '50%',
        75: '75%',
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle, rgba(255,255,255,1) 29%, rgb(235,241,255) 46%)',
      },
      boxShadow: {
        'all-sides': '0px 0px 10px rgba(0, 0, 0, 0.10)', 
      },
    },
  },
  plugins: [],
}

