module.exports = {
  env: {
    baseUrl: process.env.URL || 'http://localhost:3000'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "webo.design",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "We are webo - agency opened for you" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/mstile-144x144.png" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "194x194", href: "/favicon-194x194.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#262626" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' },
    ],
    script: [
      { type: 'text/javascript', charset: 'utf-8', src: '/chat.js'}
    ]
  },
  /*
  ** Modules
  */
  modules: [
    {
      src: '@nuxtjs/pwa',
      options: {
        iconSrc: "~/assets/symbol.png",
        icon: {
          sizes: [512, 192, 380 ]
        }
      }
    },
    {
      src: 'bootstrap-vue/nuxt',
      options: {
        css: false
      }
    },
    {
      src: 'nuxt-i18n',
      options: {
        baseUrl: process.env.BASE_URL,
        strategy: 'prefix',
        rootRedirect: 'pl',
        defaultLocale: 'pl',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        },
        locales: [
          {
            code: 'en',
            iso: 'en-GB'
          },
          {
            code: 'pl',
            iso: 'pl-PL'
          }
        ],
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            'en': {
              welcome: 'Welcome'
            },
            'pl': {
              welcome: 'Witaj'
            }
          }
        }
      }
    }
  ],
  /*
  ** Plugins - scripts on all pages
  */
  plugins:[
    { src: '~/plugins/scrollactive.js', ssr: true }
  ],
  css: [
    '@/assets/theme.scss'
  ],
  /*
  ** Customize the progress-bar color
  */
  // loading: {
  //   color: "#b2f1c7",
  //   failedColor: 'red',
  //   height: "2px",
  //   duration: "5000"
  // },
  loading: './components/loading.vue',
  /*
  ** Customize manifest.json
  */
  manifest: {
    name: "webo",
    short_name: "webo",
    theme_color: "#b2f1c7",
    background_color: "#ffffff",
    icons: [
      {
        "src": "/android-chrome-36x36.png",
        "sizes": "36x36",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-48x48.png",
        "sizes": "48x48",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  },
  /**
  * ServiceWorker
  */
  workbox: {
    globPatterns: [
      '**/*.{js,css,html,png}'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    publicPath: '/assets/',
    /*
    ** Run ESLINT on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Render loop
  */
  render: {
    http2: {
      push: true,
      gzip: 9
    },
    bundleRenderer: {
      directives: {
        t: require('vue-i18n-extensions').directive
      }
    }
  },
  /*
  ** Generate SSR
  */
  generate: {
    dir: "public",
    fallback: "404.html",
    routes: [
      '/',
    ]
  }
};
