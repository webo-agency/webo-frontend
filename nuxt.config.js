module.exports = {
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
    }
    // {
    //   src: 'nuxt-i18n',
    //   options: {
    //     defaultLocale: 'en',
    //     locales: [
    //       {
    //         code: 'en',
    //         iso: 'en-US',
    //         name: 'English'
    //       },
    //       {
    //         code: 'pl',
    //         iso: 'pl-PL',
    //         name: 'Polski'
    //       }
    //     ],
    //   }
    // },
  ],
  /*
  ** Plugins - scripts on all pages
  */
  plugins:[
    "~/plugins/scrollactive.js"
  ],
  // css: [
    // 'normalize.css/normalize.css'
    //     "bootstrap/scss/functions.scss",
    //     "bootstrap/scss/variables.scss",
    //     "bootstrap/scss/mixins.scss",
    //     "bootstrap/scss/root.scss",
    //     "bootstrap/scss/reboot.scss",
    //     "bootstrap/scss/type.scss",
    //     "bootstrap/scss/images.scss",
    //     "bootstrap/scss/code.scss",
    //     "bootstrap/scss/grid.scss",
    //     "bootstrap/scss/tables.scss",
    //     "bootstrap/scss/forms.scss",
    //     "bootstrap/scss/buttons.scss",
    //     "bootstrap/scss/transitions.scss",
    //     "bootstrap/scss/dropdown.scss",
    //     "bootstrap/scss/button-group.scss",
    //     "bootstrap/scss/input-group.scss",
    //     "bootstrap/scss/custom-forms.scss",
    //     "bootstrap/scss/nav.scss",
    //     "bootstrap/scss/navbar.scss",
    //     "bootstrap/scss/card.scss",
    //     "bootstrap/scss/breadcrumb.scss",
    //     "bootstrap/scss/pagination.scss",
    //     "bootstrap/scss/badge.scss",
    //     "bootstrap/scss/jumbotron.scss",
    //     "bootstrap/scss/alert.scss",
    //     "bootstrap/scss/progress.scss",
    //     "bootstrap/scss/media.scss",
    //     "bootstrap/scss/list-group.scss",
    //     "bootstrap/scss/close.scss",
    //     "bootstrap/scss/modal.scss",
    //     "bootstrap/scss/tooltip.scss",
    //     "bootstrap/scss/popover.scss",
    //     "bootstrap/scss/carousel.scss",
    //     "bootstrap/scss/utilities.scss",
    //     "bootstrap/scss/print.scss"
  // ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#b2f1c7" },
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
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    vendor: [
      'axios',
      '@nuxtjs/pwa'
    ]
  },
    /*
    ** Generate SSR
    */
  generate: {
    dir: "public",
    routes: ['/']
  },
  // render: {
  //   bundleRenderer: {
  //     directives: {
  //     }
  //   }
  // }
};
