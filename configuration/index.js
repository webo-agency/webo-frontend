require('dotenv').config();

import * as module from './modules.js';
import * as head from './head.js';
import * as plugins from './plugins.js';
import * as generate from './generate.js';
import * as css from './css.js';
import * as manifest from './manifest.js';
import * as build from './build.js';

process.noDeprecation = true;

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

export default {
  env: {
    CONTEXT: process.env.CONTEXT,
    API_URL: API_URL,
    API_AFFIX: API_AFFIX,
    GOOGLE_FONTS: 'Montserrat:400,500,700,800:latin,latin-ext&display=swap'
  },
  globalName: process.env.NAME,
  head: head.default,
  modern: !process.env.NODE_ENV !== 'production' && 'client',
  /*
   ** Modulesc
   */
  modules: module.default,
  wp: {
    sitemap: false
  },
  /*
   ** Plugins - scripts on all pages
   */
  plugins: plugins.default,
  css: css.default,
  /*
   ** Customize the progress-bar color
   */
  loading: "./components/loading.vue",
  /*
   ** Customize manifest.json
   */
  manifest: manifest.default,
  /**
   * ServiceWorker
   */
  workbox: {
    globPatterns: ["**/*.{js,css,html,png}"],
    dev: false
  },
  buildModules: [
    // TODO: Remove when upgrading to nuxt 2.13+
    '@nuxt/components'
  ],
  /*
   ** Build configuration
   */
  build: build.default,
  /*
   ** Render loop
   */
  // render: {
  //   compressor: true,
  //   http2: {
  //     push: true,
  //     gzip: 9
  //   },
    // bundleRenderer: {
    //   directives: {
    //     // t: require("vue-i18n-extensions").directive
    //   }
    // }
  // },
  /*
   ** Generate SSR
   */
  generate: generate.default,
  render: {
    compressor: {
      level: 9
    },
    bundleRenderer: {
      directives: {
         t: require("vue-i18n-extensions").directive
      }
    },
    http2:{
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
      .filter(f => f.asType === 'script' && f.file === 'runtime.js')
      .map(f => `<${publicPath}${f.file}>; rel=preload; crossorigin=anonymous; as=${f.asType}`)
    },
    injectScripts: false,
    crossorigin: 'anonymous'
  },
  telemetry: false
};
