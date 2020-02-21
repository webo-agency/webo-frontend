/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      'sans': 'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      'display': ['Montserrat', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '7xl': '5rem',
      },
      spacing: {
        px: '1px',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
      },
      minHeight: {
        '500': '500px',
        '870': '870px'
      },
      maxHeight: {
        '500': '500px',
        '870': '870px'
      },
      flex: {
        '0-auto': '0 0 auto',
      },
      colors: {
        main: 'rgb(0, 224, 180)',
        text: 'rgb(62, 59, 58)',
        backgroundLight: 'rgb(249, 249, 249)',
        backgroundDark: 'rgb(13, 13, 13)',
        darkText: 'rgb(17, 24, 38)',
        lightText: 'rgb(255, 255, 255)',
        gray: false,
        red: 'rgb(241, 89, 83)',
        orange: false,
        yellow: false,
        green: false,
        teal: false,
        blue: false,
        indigo: false,
        purple: false,
        pink: false,
      }
    },
  }
}