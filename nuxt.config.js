import axios from 'axios';

require('dotenv').config();
process.noDeprecation = true;

const definedLocales = [
  {
    "code": "en",
    "iso": "en-GB",
    "name": "English"
  },
  {
    "code": "pl",
    "iso": "pl-PL",
    "name": "Polski"
  }
];
const definedDefaultLocale = definedLocales[0]

// const features = [
//   'fetch',
//   'Object.entries',
//   'IntersectionObserver',
//   '%7Ehtml5-elements',
//   'requestAnimationFrame',
//   'matchMedia',
//   'HTMLPictureElement',
//   'HTMLDocument',
//   'JSON',
// ].join('%2C');
const API_URL = process.env.API_URL;
const API_AFFIX = process.env.API_AFFIX;

module.exports = {
  env: {
    CONTEXT: process.env.CONTEXT,
    API_URL: API_URL,
    API_AFFIX: API_AFFIX
  },
  globalName: 'webo',
  head: {
    title: "webo - Digital partners",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Digital freaks in creating web and design"
      },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/mstile-144x144.png" },
      { name: "theme-color", content: "#ffffff" },
      { name: "robots", content: "INDEX,FOLLOW" },
    ],
    script: [
      // { src: `https://polyfill.io/v3/polyfill.min.js?features=${features}&flags=gated`, body: true, async: true, defer: true  },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
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
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#262626"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true
      }
    ]
  },
  modern: !process.env.NODE_ENV !== 'production' && 'client',
  /*
   ** Modulesc
   */
  modules: [
    // {
    //   src: "~/modules/bugsnag",
    //   options: {
    //     apiKey: "e84d63a6f7b1a2db9acda61d3dc7d892",
    //     appType: "frontend",
    //     releaseStage: process.env.CONTEXT || "developer"
    //   }
    // },
    {
      src: "@nuxtjs/axios",
      // options: {}
    },
    {
      src: '@nuxtjs/google-tag-manager', 
      options: {
        id: 'GTM-MVPZXZ9',
        dev: false,
        autoInit: false,
      }
    },
    {
      src: "nuxt-compress",
      options: {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    },
    {
      src: "@nuxtjs/pwa",
      options: {
        // workbox: {
        //   publicPath: '/static/',
        // },
        // manifest: {
        //   publicPath: "/static/",
        // },
        iconSrc: "~/assets/symbol.png",
        icon: {
          sizes: [512, 192, 380]
        },
      }
    },
    {
      src: "nuxt-i18n",
      options: {
        strategy: "no_prefix",
        defaultLocale: definedDefaultLocale,
        rootRedirect: null,//`/${definedDefaultLocale}`,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "language",
          fallbackLocale: "en"
        },
        locales: definedLocales.reverse(),
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: { 
              welcome: "webo"
            },
            pl: {
              welcome: "webo"
            }
          }
        }
      },
    },
    {
      src: "nuxt-webfontloader",
      options: {
        google: {
          families: ['Montserrat:400,500,700,800:latin,latin-ext&display=swap']
        }
      }
    },
    {
      src: "@aceforth/nuxt-netlify",
      options: {
        mergeSecurityHeaders: true,
        headers: {
          '/static/*': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/*.css': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/*.js': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/img/*': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/img/*.gif': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/img/*.png': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/img/*.jpg': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/img/*.jpeg': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/img/*.svg': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/fonts/*': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/fonts/*.webp': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/fonts/*.woff': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/fonts/*.woff2': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/fonts/*.eot': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/fonts/*.ttf': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/static/fonts/*.otf': [
            'Cache-Control: public, max-age=31557600'
          ],
          '/favicon.ico': [
            'Cache-Control: public, max-age=604800'
          ]
        }
      }
    },
    {
      src: "nuxt-netlify-http2-server-push",
      options: {
        resources: [
          { path: 'favicon.ico', as: 'image' },
          { path: 'static/*.js', as: 'script' },
          { path: 'static/*.css', as: 'style' },
          { path: 'static/images/img/*.gif', as: 'image' },
          { path: 'static/fonts/*.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' },
          { path: 'static/fonts/*.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        ]
      }
    },
    {
      src: '@nuxtjs/tailwindcss',
      options: {}
    },
    { 
      src: '@nuxtjs/markdownit',
      options:  {
        preset: 'default',
        linkify: true,
        breaks: true,
        injected: true,
        html: true
      }
    },
    {
      src: 'wp-nuxt', 
      options:  {
        endpoint: `${process.env.API_URL}${process.env.API_AFFIX}`,
        customRoutes: [
          {
            extension: 'wp/v2',
            route: 'technology',
            name: 'technology'
          }
        ],
        extensions: true // For additional functions of wpapi-extensions
      },
    },
    {
      src: '@nuxtjs/dotenv', 
      options:  { 
        only: [
          'API_URL',
          'API_AFFIX',
          'CONTEXT'
        ]
      },
    }
  ],
  wp: {
    sitemap: false
  },
  /*
   ** Plugins - scripts on all pages
   */
  plugins: [
    { src: "~/plugins/scrollactive.js", ssr: true },
    { src: "~/plugins/swiper.js", ssr: false },
    // { src: "~/plugins/wpapi-extend.js", ssr: true}
  ],
  css: [
    'swiper/dist/css/swiper.css',
    '~/assets/css/styles.css'
  ],
  /*
   ** Customize the progress-bar color
   */
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
    globPatterns: ["**/*.{js,css,html,png}"],
    dev: false
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    cssSourceMap: false,
    publicPath: "/static/",
    /*
     ** Run ESLINT on save
     */
    extend(config, { isDev , isClient }) {
      if (isClient && isDev) {
        config.devtool = 'inline-source-map';
      } else {
        config.devtool = false;
      }

      config.node = {
        fs: "empty"
      };

      if (isClient && !isDev) {
        config.optimization.splitChunks.maxSize = 250000
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
    postcss: {
      'postcss-nested': {},
      'postcss-responsive-type': {}
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
    compressor: true,
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
  buildModules: [
    // TODO: [WEBOWEB-42] Remove when upgrading to nuxt 2.13+
    '@nuxt/components'
  ],
  /*
   ** Generate SSR
   */
  generate: {
    dir: "public",
    fallback: "404.html",
    routes () {
      let _calls = [];
      
      _calls.push(axios.get(`${process.env.API_URL}${process.env.API_AFFIX}`));
      //@TODO: [BEOK-1] Per page loop. As another module can be usefull
      definedLocales.forEach(function(locale){
        _calls.push(axios.get(`${process.env.API_URL}${process.env.API_AFFIX}/wp/v2/pages/?per_page=100&lang=${locale.code}`, locale))
        _calls.push(axios.get(`${process.env.API_URL}${process.env.API_AFFIX}/wp/v2/posts/?per_page=100&lang=${locale.code}`, locale))
      });
      
      return axios.all(_calls)
      .then(axios.spread((...res) => {
        let _routeArray = [];

        let rootRequest = res[0];
        delete res[0];

        res.map(singleResponse => {
          singleResponse.data.forEach((page) => {
             _routeArray.push({
              route: `${page.link.replace(rootRequest.data.home,"").replace(/\/$/, "")}`, //SLUG FIX - No translation at the moment available from WP Multilanguage
              name: `${page.slug}___${singleResponse.config.code}`,
              payload: page,
            })
          });
        })
 
        return _routeArray;
      }))
    }
  }
};
