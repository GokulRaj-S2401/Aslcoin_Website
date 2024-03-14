/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
    colors: {
      "primary" : '#1f1f1f',
      "primary-text" : "#cbcbcb",
      "de-active" : "#69563A",
      "border" : "#35343A",
      "background" : "#1A171E"
    },
    boxShadow: {
      '3xl': '5px 5px 8px rgb(0, 0, 0)',
      '4xl': [
          '10px 5px 32px rgb(0, 0, 0)',
          '10px 18px 18px rgba(0, 0, 0)',
          '30px 8px 15px rgba(0, 0, 0)',

      ],
      'pinkshadow':'0px 0px 24px 0px #FE487C40',
      'cardpurple': '0px 0px 40px 0px #3049BF0A'

    }
  },
  },
  plugins: [],
}

