const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ["./resources/index.html"],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        gray: colors.zinc,
        logo_coffee: '#FFDD00',
        logo_linkedin: '#0A66C2',
        logo_github: '#181717',
      },
    },
    nightwind: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('nightwind')
  ],
}
