import axios from 'axios';

const API_URL = process.env.API_URL;

export const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
    async nuxtServerInit({app, dispatch, commit}, {req}) { // eslint-disable-line
        return axios.all([
            axios.get(API_URL.concat('/acf/v3/options/options')),
            axios.get(API_URL.concat('/menus/v1/menus')),
            axios.get(API_URL.concat('/menus/v1/menus/').concat('social-media')),
            axios.get(API_URL.concat('/menus/v1/menus/').concat('uslugi')),
            axios.get(API_URL.concat('/menus/v1/menus/').concat('webo'))
          ])
          .then(axios.spread((resOptions, resMenu, resSubMenu1, resSubMenu2, resSubMenu3) => {
            dispatch('general/init', resOptions.data.acf);
            dispatch('menu/mainInit', resMenu.data);
            dispatch('menu/submenuInit', resSubMenu1.data);
            dispatch('menu/submenuInit', resSubMenu2.data);
            dispatch('menu/submenuInit', resSubMenu3.data);
          }))
    }
}
