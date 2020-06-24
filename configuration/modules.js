require('dotenv').config();

import { availableLanguage, defaultLanguage } from './languages.js';

export default [
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
      defaultLocale: defaultLanguage,
      rootRedirect: null,//`/${defaultLanguage}`,
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: "language",
        fallbackLocale: "en"
      },
      locales: availableLanguage.reverse(),
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
]