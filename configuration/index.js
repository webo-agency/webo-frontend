require('dotenv').config();

import * as module from './modules.js';
import * as head from './head.js';
import * as generate from './generate.js';
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
    API_AFFIX: API_AFFIX
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
  //   // bundleRenderer: {
  //   //   directives: {
  //   //     // t: require("vue-i18n-extensions").directive
  //   //   }
  //   // }
  // },
  /*
   ** Generate SSR
   */
  generate: generate.default
};
