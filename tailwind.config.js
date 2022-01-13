const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./resources/index.html"],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        logo_coffee: '#FFDD00',
        logo_linkedin: '#0A66C2',
        logo_github: '#181717',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}
