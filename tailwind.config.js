module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'default-layout-header': '60px',
      },
      width: {
        'default-layout-width': '1150px'
      },
      padding: {
        '4': '1rem', // 16px
        // Các giá trị khác
      },
      backgroundColor: {
        "primary": "#fe2c55",
        "bluePrimary": "#007FFF"
      },
      textColor: {
        "bluePrimary": "#007FFF"
      },
      boxShadow: {
        'right': '2px 0 5px 0 rgba(0,0,0,0.3)',
        'left': '-2px 0 5px 0 rgba(0,0,0,0.3)',
        'top': '0 -2px 5px 0 rgba(0,0,0,0.3)',
        'bottom': '0 2px 5px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}
