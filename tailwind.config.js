const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        primary: colors.indigo,
        rose: colors.rose,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.600'),
            },
          },
        },
        light: {
          css: {
            a: {
              color: theme('colors.primary.600'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.200'),
            },
            strong: {
              color: theme('colors.gray.100'),
            },

            'ol > li::before': {
              color: theme('colors.gray.500'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.300'),
            },
            hr: {
              borderColor: theme('colors.gray.800'),
            },
            blockquote: {
              color: theme('colors.gray.100'),
            },
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
          },
        },
        blue: {
          css: {
            color: theme('colors.purple.200'),
            a: {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.white'),
            },

            'ol > li::before': {
              color: theme('colors.gray.500'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.purple.100'),
            },
            hr: {
              borderColor: theme('colors.gray.800'),
            },
            blockquote: {
              color: theme('colors.white'),
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
