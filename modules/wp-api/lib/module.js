const { resolve } = require('path');
const defaults = {};

module.exports = async function wp (moduleOptions) {
  let options = Object.assign({}, defaults, this.options['wp'], moduleOptions);

  this.addPlugin({
    src: resolve(__dirname, './templates/wp.plugin.js'),
    fileName: 'wp.plugin.js',
    options
  });

  // this.nuxt.hook('generate:before', async generator => {
  //   console.log(generator);
  //   // This will be called when a Nuxt generate starts
  // }).then(function () {
  //   console.log("Promise Resolved");
  // }).catch(function () {
  //   console.log("Promise Rejected");
  // });
};

module.exports.meta = require('../package.json');
