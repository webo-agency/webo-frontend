/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'store/**/*.vue',
      'plugins/**/*.vue',
      'plugins/**/*.js',
      'static/**/*.js',
      'nuxt.config.js'
    ]
  },
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
    screens: {
      xs: '320px',
      xsWide: '500px',
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      height: {
        'header': '300px',
        'logo': '60px'
      },
      width: {
        'half-screen': '50vw'
      },
      fontSize: {
        'micro': '10px',
        '7xl': '5rem',
        'big-header': '100px',
        'medium-header': '80px',
        'small-header': '35px'
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
        'full-8/2' : 'calc((100% - 2rem)/2)',
      },
      margin: {
        '5vh': '5vh',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        'section-lg': '150px'
      },
      minHeight: {
        '240': '240px',
        '500': '500px',
        '700': '700px',
        'mobile-screen': '640px'
      },
      maxHeight: {
        '500': '500px',
        '700': '700px'
      },
      minWidth: {
        'container': '100px'
      },
      maxWidth: {
        '120': '120px',
      },
      flex: {
        '0-auto': '0 0 auto',
      },
      listStyleType: {
        none: 'none',
        dash: '-'
      },
      colors: {
        main: 'rgb(0, 224, 180)',
        text: 'rgb(62, 59, 58)',
        backgroundLight: 'rgb(249, 249, 249)',
        backgroundDark: 'rgb(13, 13, 13)',
        darkText: 'rgb(17, 24, 38)',
        lightText: 'rgb(255, 255, 255)',
        redServerless: 'rgb(241, 89, 83)',
        gray: false,
        red: false,
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
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          'width': '100%',
          'max-width': '100%',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '1rem',
          'padding-right': '1rem',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    }
  ]
}