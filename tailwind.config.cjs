/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    'night',
    'shooting_star'
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#ffffff", // White text
        primary: "#5f91ff",    // Example primary color
        background: "#090a0f", // Background color
      },
    },
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        border: 'hsl(214, 32%, 91%)', // or whatever your border color is
      }
    }
  }
}

