const { resolve } = require('path');

const PluginDefaluts = {
  alias: 'bugsnag',
  apiKey: '',
  appType: 'frontend',
  releaseStage: 'developer'
};

module.exports = function nuxtBugsnag (moduleOptions = {}) {
  const instanceOptions = Object.assign({}, PluginDefaluts, moduleOptions);

  if(instanceOptions && instanceOptions.apiKey !== ''){
    this.addPlugin({
      src: resolve(__dirname, 'plugin.js'),
      fileName: 'plugin.js',
      options: instanceOptions
    })
  }
};
