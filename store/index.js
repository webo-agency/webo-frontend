import axios from 'axios'
import {
    isEmpty as _isEmpty
} from 'lodash'

const filterWords = ['$yoast', 'meta', '{}'];

const filterData = obj => {
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] == 'string'){
      obj[key] = obj[key].replace(/(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/sg, "");
    }

    if (
      _isEmpty(key) ||
      RegExp(filterWords.join('|')).test(key) ||
      obj[key] == null ||
      typeof obj[key] == 'undefined' ||
      (Array.isArray(obj[key]) && !obj[key].length) ||
      obj[key] == '' ||
      obj[key] == []
    ) { delete obj[key] } // delete
    else if (obj[key] && typeof obj[key] === "object") filterData(obj[key]); // recurse
  });
};

export const state = () => ({});

export const mutations = {}

export const getters = {}

export const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ dispatch }) { // eslint-disable-line
    await dispatch('dataInit');
  },

  dataInit({ dispatch }) {
    return axios.all([
      axios.get(process.env.API_URL.concat(process.env.API_AFFIX).concat('/wp/v2/posts/').concat('?categories=9')),
      axios.get(process.env.API_URL.concat(process.env.API_AFFIX).concat('/acf/v3/options/options').concat('?lang=pl')),
      axios.get(process.env.API_URL.concat(process.env.API_AFFIX).concat('/menus/v1/menus').concat('?lang=pl')),
      axios.get(process.env.API_URL.concat(process.env.API_AFFIX).concat('/menus/v1/menus/').concat('social-media').concat('?lang=pl')),
      axios.get(process.env.API_URL.concat(process.env.API_AFFIX).concat('/menus/v1/menus/').concat('uslugi').concat('?lang=pl')),
      axios.get(process.env.API_URL.concat(process.env.API_AFFIX).concat('/menus/v1/menus/').concat('webo').concat('?lang=pl')),
    ])
    .then(axios.spread(async (reviews, resOptions, resMenu, resSubMenu1, resSubMenu2, resSubMenu3) => {
      filterData(reviews.data);
      await dispatch('reviews/init', reviews.data);

      filterData(resOptions.data.acf);
      await dispatch('general/init', resOptions.data.acf);

      filterData(resMenu.data);
      await dispatch('menu/initMain', resMenu.data);

      filterData(resSubMenu1.data);
      await dispatch('menu/initSocialMedia', resSubMenu1.data);

      filterData(resSubMenu2.data);
      await dispatch('menu/initServices', resSubMenu2.data);

      filterData(resSubMenu3.data);
      await dispatch('menu/initCompany', resSubMenu3.data);
    }));
  },
}
