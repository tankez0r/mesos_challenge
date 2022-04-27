module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./componentes/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        'extra-none': '0.5',
        '12': '3rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}