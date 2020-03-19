import axios from 'axios';

const API_URL = process.env.API_URL;

// export const state = {}

export const mutations = {}
export const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit(context) { // eslint-disable-line
    // console.log(context);  // eslint-disable-line
    await context.dispatch('dataInit', context);
  },
  dataInit(context) {
    return axios.all([
      axios.get(API_URL.concat('/acf/v3/options/options').concat('?lang=pl')),
      axios.get(API_URL.concat('/menus/v1/menus').concat('?lang=pl')),
      axios.get(API_URL.concat('/menus/v1/menus/').concat('social-media').concat('?lang=pl')),
      axios.get(API_URL.concat('/menus/v1/menus/').concat('uslugi').concat('?lang=pl')),
      axios.get(API_URL.concat('/menus/v1/menus/').concat('webo').concat('?lang=pl'))
    ])
    .then(axios.spread((resOptions, resMenu, resSubMenu1, resSubMenu2, resSubMenu3) => {
      context.dispatch('general/init', resOptions.data.acf);
      context.dispatch('menu/mainInit', resMenu.data);
      context.dispatch('menu/submenuInit', resSubMenu1.data);
      context.dispatch('menu/submenuInit', resSubMenu2.data);
      context.dispatch('menu/submenuInit', resSubMenu3.data);
    }));
  }
}
