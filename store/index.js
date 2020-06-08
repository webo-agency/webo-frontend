import axios from 'axios'
import _filter from 'lodash/filter';
import _indexOf from 'lodash/indexOf';

const removeEmpty = obj => {
  Object.keys(obj).forEach(key => {
    if (
      key == '' ||
      obj[key] == null ||
      typeof obj[key] == 'undefined' ||
      (Array.isArray(obj[key]) && !obj[key].length) ||
      obj[key] == '' ||
      obj[key] == []
    ) { delete obj[key] } // delete
    else if (obj[key] && typeof obj[key] === "object") removeEmpty(obj[key]); // recurse
  });
};

export const state = () => ({
  data: {}
});

export const mutations = {
  save(state, data) {
      state.data = { ...state.data, ...data };
  }
};

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
      await dispatch('reviews/init', reviews.data);
      await dispatch('general/init', resOptions.data.acf);
      await dispatch('menu/mainInit', resMenu.data);
      await dispatch('menu/submenuInit', resSubMenu1.data);
      await dispatch('menu/submenuInit', resSubMenu2.data);
      await dispatch('menu/submenuInit', resSubMenu3.data);
    }));
  },

  async initHomepage (context, $wp) {

      let data = await $wp.frontPage(20);
      removeEmpty(data);

      let pages = await $wp.pages().perPage(20);
      removeEmpty(pages);
      // let technology = await $wp.technology().perPage(20);
      let posts = await $wp.posts();
      removeEmpty(posts);

      let technology = await $wp.technology().perPage(20); //// Too much
      removeEmpty(technology);

      data.acf.services_promoted = _filter(pages, (page) => data.acf.services_promoted.indexOf(page.id) > -1);
  
      data.acf.company_promoted = _filter(pages, (page) => data.acf.company_promoted.indexOf(page.id) > -1);
    
      data.acf.technology_promoted = [];
      data.acf.technology_promoted_list.forEach((promoted) => {
        technology.forEach((entry_list) => {
          if(entry_list.id == promoted.term_id){
            removeEmpty(entry_list);
            data.acf.technology_promoted.push([entry_list])
          }
        });
      });

      data.acf.category_technology_promoted = [];
      data.acf.category_technology_promoted_list.forEach((promoted) => {
        technology.forEach((entry_list) => {
          if(entry_list.id == promoted.term_id){
            removeEmpty(entry_list);
            data.acf.category_technology_promoted.push(entry_list);
          }
        });
      });

      let _childs_category_technology_promoted = [];
      for (let cat_promoted_technology of data.acf.category_technology_promoted) {
        cat_promoted_technology.childs = [];
        
        technology.forEach((technology) => {
          if(cat_promoted_technology.id == technology.parent){
            cat_promoted_technology.childs.push(technology);
          } 
        });
    

        _childs_category_technology_promoted.push(cat_promoted_technology);
      }
      data.acf.category_technology_promoted = _childs_category_technology_promoted;

      // data.acf.reviews_promoted = [
      //     await app.$wp.pages().id(data.acf.reviews_promoted),
      // ];

      // let projects_carousel_list = context.app.$wp.posts().include(data.acf.projects_carousel);
      
      let projects_carousel_list = _filter(posts, (v) => _indexOf(data.acf.projects_carousel, v.id) !== -1);
      
      data.acf.projects_carousel_list = [];
      for(let i = 0; i < data.acf.projects_carousel.length; i++){
        let entry = projects_carousel_list[i];
        
        data.acf.projects_carousel_list.push({
          id: entry.id,
          url: entry.acf.project_promoted_screensave.url,
          alt: entry.acf.project_promoted_screensave.alt,
          title: entry.acf.project_promoted_title
        });
      }
      data.acf.projects_carousel_list.reverse();

      // let brands_slajder_list = posts;
      // let brands_slajder_list = context.app.$wp.posts().include(data.acf.brands_slajder);
      let brands_slajder_list = _filter(posts, (v) => _indexOf(data.acf.brands_slajder, v.id) !== -1);
      data.acf.brands_slajder_list = [];
      for(let i = 0; i < data.acf.brands_slajder.length; i++){
        let entry = brands_slajder_list[i];
        
        data.acf.brands_slajder_list.push({
          id: entry.id,
          url: entry.acf.mark_logo.url,
          alt: entry.acf.mark_logo.alt,
          href: entry.acf.mark_url,
        });
      }
      data.acf.brands_slajder_list.reverse();

    context.commit('save', data);
  }
}
