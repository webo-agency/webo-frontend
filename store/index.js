import axios from 'axios';

export const mutations = {}
export const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ dispatch }) { // eslint-disable-line
    await dispatch('dataInit');
  },
  dataInit({ dispatch }) {
    return axios.all([
      axios.get(process.env.API_URL.concat(process.env.API_AFFIX).concat('/acf/v3/options/options').concat('?lang=pl')),
      axios.get(process.env.API_URL.concat(process.env.API_AFFIX).concat('/menus/v1/menus').concat('?lang=pl')),
      axios.get(process.env.API_URL.concat(process.env.API_AFFIX).concat('/menus/v1/menus/').concat('social-media').concat('?lang=pl')),
      axios.get(process.env.API_URL.concat(process.env.API_AFFIX).concat('/menus/v1/menus/').concat('uslugi').concat('?lang=pl')),
      axios.get(process.env.API_URL.concat(process.env.API_AFFIX).concat('/menus/v1/menus/').concat('webo').concat('?lang=pl'))
    ])
    .then(axios.spread(async (resOptions, resMenu, resSubMenu1, resSubMenu2, resSubMenu3) => {
      await dispatch('general/init', resOptions.data.acf);
      await dispatch('menu/mainInit', resMenu.data);
      await dispatch('menu/submenuInit', resSubMenu1.data);
      await dispatch('menu/submenuInit', resSubMenu2.data);
      await dispatch('menu/submenuInit', resSubMenu3.data);
    }));
  }
}
