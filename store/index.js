import axios from 'axios'
import {
    // filter as _filter, 
    // indexOf as _indexOf, 
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

export const state = () => ({
  index: {}
});

export const mutations = {
  save(state, data) {
      state.index = { ...state.index, ...data };
  }
};

export const getters = {
  getSectionBaner: ($state) => {
    return {
      mainTag: 'div',
      mainId: '',
      mainTitle: '',
      positionHeader: $state.index.acf.baner_settings.title_position,
      title: $state.index.acf.baner_settings.title,
      header: $state.index.acf.baner_carousel[0].header,
      button: {
        title: $state.index.acf.baner_carousel[0].button.title,
        hyperlink: $state.index.acf.baner_carousel[0].button.hyperlink
      },
      graphic: $state.index.acf.baner_carousel[0].graphic
    }
  },
  getSectionServices: ($state) => {
    return {
      mainTag: 'div' || $state.index.acf.services_settings.tag,
      mainId: $state.index.acf.services_settings.is_linkable,
      mainTitle: $state.index.acf.services_settings.title,
      positionHeader: $state.index.acf.services_settings.title_position,
      title: $state.index.acf.services_settings.title,
      is_menu: $state.index.acf.services_settings.is_menu,
      is_linkable: $state.index.acf.services_settings.is_linkable,
      title_number: $state.index.acf.services_settings.title_number,
      header: $state.index.acf.services_settings.header,
      description: $state.index.acf.services_settings.description,
      blocks: [
        {
          icon: $state.index.acf.services_promoted[0].acf.icon,
          title: $state.index.acf.services_promoted[0].acf.title,
          description: $state.index.acf.services_promoted[0].acf.description,
          list: $state.index.acf.services_promoted[0].acf.list,
          link: $state.index.acf.services_promoted[0].acf.link
        },
        {
          icon: $state.index.acf.services_promoted[1].acf.icon,
          title: $state.index.acf.services_promoted[1].acf.title,
          description: $state.index.acf.services_promoted[1].acf.description,
          list: $state.index.acf.services_promoted[1].acf.list,
          link: $state.index.acf.services_promoted[1].acf.link
        },
        {
          icon: $state.index.acf.services_promoted[2].acf.icon,
          title: $state.index.acf.services_promoted[2].acf.title,
          description: $state.index.acf.services_promoted[2].acf.description,
          list: $state.index.acf.services_promoted[2].acf.list,
          link: $state.index.acf.services_promoted[2].acf.link
        },
        {
          icon: $state.index.acf.services_promoted[3].acf.icon,
          title: $state.index.acf.services_promoted[3].acf.title,
          description: $state.index.acf.services_promoted[3].acf.description,
          list: $state.index.acf.services_promoted[3].acf.list,
          link: $state.index.acf.services_promoted[3].acf.link
        },
        {
          icon: $state.index.acf.services_promoted[4].acf.icon,
          title: $state.index.acf.services_promoted[4].acf.title,
          description: $state.index.acf.services_promoted[4].acf.description,
          list: $state.index.acf.services_promoted[4].acf.list,
          link: $state.index.acf.services_promoted[4].acf.link
        }
      ]
    }
  }
}

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
      await dispatch('menu/mainInit', resMenu.data);

      filterData(resSubMenu1.data);
      await dispatch('menu/submenuInit', resSubMenu1.data);

      filterData(resSubMenu2.data);
      await dispatch('menu/submenuInit', resSubMenu2.data);

      filterData(resSubMenu3.data);
      await dispatch('menu/submenuInit', resSubMenu3.data);
    }));
  },

  async initHomepage (context, $wp) {

      let data = await $wp.frontPage();
      filterData(data);

      // console.log(data); // eslint-disable-line

      // let pages = await $wp.pages().perPage(20);
      // filterData(pages);

      // let posts = await $wp.posts();
      // filterData(posts);

      // let technology = await $wp.technology().perPage(20); //// Too much
      // filterData(technology);

      // data.acf.services_promoted = _filter(pages, (page) => data.acf.services_promoted.indexOf(page.id) > -1);
  
      // data.acf.company_promoted = _filter(pages, (page) => data.acf.company_promoted.indexOf(page.id) > -1);
    
      // data.acf.technology_promoted = [];
      // data.acf.technology_promoted_list.forEach((promoted) => {
      //   technology.forEach((entry_list) => {
      //     if(entry_list.id == promoted.term_id){
      //       filterData(entry_list);
      //       data.acf.technology_promoted.push([entry_list])
      //     }
      //   });
      // });

      // data.acf.category_technology_promoted = [];
      // data.acf.category_technology_promoted_list.forEach((promoted) => {
      //   technology.forEach((entry_list) => {
      //     if(entry_list.id == promoted.term_id){
      //       filterData(entry_list);
      //       data.acf.category_technology_promoted.push(entry_list);
      //     }
      //   });
      // });

      // let _childs_category_technology_promoted = [];
      // for (let cat_promoted_technology of data.acf.category_technology_promoted) {
      //   cat_promoted_technology.childs = [];
        
      //   technology.forEach((_technology) => {
      //     if(cat_promoted_technology.id == _technology.parent){
      //       filterData(_technology);
      //       cat_promoted_technology.childs.push(_technology);
      //     } 
      //   });
    
      //   _childs_category_technology_promoted.push(cat_promoted_technology);
      // }
      // data.acf.category_technology_promoted = _childs_category_technology_promoted;

      // if(data.acf){
      //   data.acf.projects_carousel_list = [];

      //   if(data.acf.projects_carousel.length){
      //     let projects_carousel_list = _filter(posts, (v) => _indexOf(data.acf.projects_carousel, v.id) !== -1);
          

      //     for(let i = 0; i < data.acf.projects_carousel.length; i++){
      //       let entry = projects_carousel_list[i];
            
      //       data.acf.projects_carousel_list.push({
      //         id: entry.id,
      //         url: entry.acf.project_promoted_screensave.url,
      //         alt: entry.acf.project_promoted_screensave.alt,
      //         title: entry.acf.project_promoted_title
      //       });
      //     }
      //     data.acf.projects_carousel_list.reverse();
      //   }

      //   // let brands_slajder_list = posts;
      //   // let brands_slajder_list = context.app.$wp.posts().include(data.acf.brands_slajder);
      //   let brands_slajder_list = _filter(posts, (v) => _indexOf(data.acf.brands_slajder, v.id) !== -1);
      //   data.acf.brands_slajder_list = [];
      //   for(let i = 0; i < data.acf.brands_slajder.length; i++){
      //     let entry = brands_slajder_list[i];
          
      //     data.acf.brands_slajder_list.push({
      //       id: entry.id,
      //       url: entry.acf.mark_logo.url,
      //       alt: entry.acf.mark_logo.alt,
      //       href: entry.acf.mark_url,
      //     });
      //   }
      //   data.acf.brands_slajder_list.reverse();
      // }

      // if(!_isEmpty(data.acf.reviews_promoted)){
      //   context.commit('reviews/saveFrontPage',  data.acf.reviews_promoted);     
      // }

    context.commit('save', data);
  }
}
