process.noDeprecation = true;
module.exports = {
  env: {
    baseUrl: process.env.URL || "http://localhost:3000",
    stage: process.env.CONTEXT || "developer"
  },
  head: {
    title: "webo.agency",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "We are webo - agency opened on people"
      },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/mstile-144x144.png" },
      { name: "theme-color", content: "#ffffff" },
      { name: "robots", content: "INDEX,FOLLOW" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "194x194",
        href: "/favicon-194x194.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-chrome-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#262626" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;subset=latin-ext"
      }
    ],
    // script: [{ type: "text/javascript", charset: "utf-8", src: "/chat.min.js" }]
  },
  /*
   ** Modules
   */
  modules: [
    {
      src: "~/modules/bugsnag",
      options: {
        apiKey: "e84d63a6f7b1a2db9acda61d3dc7d892",
        appType: "frontend",
        releaseStage: process.env.CONTEXT || "developer"
      }
    },
    {
      src: "@nuxtjs/pwa",
      options: {
        iconSrc: "~/assets/symbol.png",
        icon: {
          sizes: [512, 192, 380]
        }
      }
    },
    {
      src: "bootstrap-vue/nuxt",
      options: {
        css: false,
        bootstrapVueCSS: false,
        bootstrapVue: {
          componentPlugins: [
            // 'LayoutPlugin',
            // 'FormPlugin',
            // 'FormCheckboxPlugin',
            // 'FormInputPlugin',
            // 'FormRadioPlugin',
            // 'ToastPlugin',
            // 'ModalPlugin'
          ],
          directivePlugins: [
            // 'VBPopoverPlugin', 
            // 'VBTooltipPlugin', 
            // 'VBScrollspyPlugin'
          ]
        }
      }
    },
    {
      src: "nuxt-i18n",
      options: {
        baseUrl: process.env.BASE_URL,
        strategy: "prefix_and_default",
        rootRedirect: null, //ERROR on production
        defaultLocale: "en",
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "language",
          fallbackLocale: "en"
        },
        locales: [
          {
            code: "en",
            iso: "en-GB"
          },
          {
            code: "pl",
            iso: "pl"
          }
        ],
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: {
              welcome: "Welcome"
            },
            pl: {
              welcome: "Witaj"
            }
          }
        }
      },
    },
    {
      src: 'nuxt-webfontloader',
      options: {
        google: {
          families: ['Montserrat:400,700:latin,latin-ext'] //Loads Lato font with weights 400 and 700
        }
      }
    },
    {
      src: "@bazzite/nuxt-netlify",
      options: {
        mergeSecurityHeaders: true,
      }
    },
    {
      src: 'nuxt-netlify-http2-server-push',
      options: {
        resources: [
          { path: '/static/*.js', as: 'script' },
          { path: '/static/*.css', as: 'style' },
          { path: 'images/img/*.gif', as: 'image' },
          { path: 'images/img/*.png', as: 'image' },
          { path: 'fonts/*.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
          { path: 'fonts/*.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        
        ]
      }
    }
  ],
  netlify: { 
    mergeSecurityHeaders: true,
    headers: {
      '/static/*': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/*.css': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/*.js': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/img/*': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/img/*.gif': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/img/*.png': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/img/*.jpg': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/img/*.jpeg': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/img/*.svg': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/fonts/*': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/fonts/*.webp': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/fonts/*.woff': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/fonts/*.woff2': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/fonts/*.eot': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/fonts/*.ttf': [
        'Cache-Control: public, max-age=604800'
      ],
      '/static/fonts/*.otf': [
        'Cache-Control: public, max-age=604800'
      ],
      '/favicon.ico': [
        'Cache-Control: public, max-age=604800'
      ]
    }
  },
  /*
   ** Plugins - scripts on all pages
   */
  plugins: [
    { src: "~/plugins/scrollactive.js", ssr: true },
    { src: "~/plugins/swiper.js", ssr: false }
  ],
  css: ["swiper/dist/css/swiper.css", "@/assets/theme.scss"],
  /*
   ** Customize the progress-bar color
   */
  // loading: {
  //   color: "#b2f1c7",
  //   failedColor: 'red',
  //   height: "2px",
  //   duration: "5000"
  // },
  loading: "./components/loading.vue",
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
        src: "/android-chrome-36x36.png",
        sizes: "36x36",
        type: "image/png"
      },
      {
        src: "/android-chrome-48x48.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        src: "/android-chrome-72x72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        src: "/android-chrome-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/android-chrome-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-256x256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/android-chrome-384x384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  },
  /**
   * ServiceWorker
   */
  workbox: {
    globPatterns: ["**/*.{js,css,html,png}"]
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    publicPath: "/static/",
    /*
     ** Run ESLINT on save
     */
    extend(config, { isDev , isClient }) {
      if (isClient && process.env.NODE_ENV == 'development') {
        config.devtool = '#source-map';
      } else {
        config.devtool = 'hidden-source-map';
      }

      if (isDev) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }

      // if (isDev) {
      //   config.devtool = isClient ? "eval-source-map" : "inline-source-map";
      // }

      const vueRule = config.module.rules.find(rule => rule.test.test(".vue"));
      vueRule.use = [
        {
          loader: vueRule.loader,
          options: vueRule.options
        },
        {
          loader: "vue-svg-inline-loader",
          options: {
            /* ... */
          }
        }
      ];
      delete vueRule.loader;
      delete vueRule.options;
    },
    html :{
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: false,
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        removeComments: true
      }
    },
    terser: {
      parallel: true,
      cache: false,
      sourceMap: false,
      extractComments: {
        filename: 'LICENSES',
        banner: () => {
          return false;
        },
      },
      terserOptions: {
        mangle: true,
        compress: true,
        output: {
          comments: /^\**!|@preserve|@license|@cc_on/,
        }
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
        t: require("vue-i18n-extensions").directive
      }
    }
  },
  /*
   ** Generate SSR
   */
  generate: {
    dir: "public",
    fallback: "404.html",
    routes: ["/", "/pl", "/en", "/pl/privacy-policy", "/en/privacy-policy"]
  }
};
