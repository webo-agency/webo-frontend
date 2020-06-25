export default {
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
      collapseBooleanAttributes: false,
      decodeEntities: false,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      trimCustomFragments: true,
      useShortDoctype: true,
      removeComments: false
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
      output: {
        comments: /^\**!|@preserve|@license|@cc_on/,
      }
    }
  }
}