import Vue from 'vue';
import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'

const options = <%= JSON.stringify(options) || {} %>;
options.plugins = [new BugsnagPluginVue()];
Bugsnag.start(options);

Bugsnag.use(BugsnagPluginVue, Vue);

export default (context, inject) => {
  inject('bugsnag', Bugsnag)
}
