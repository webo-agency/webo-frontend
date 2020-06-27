import {
    isEmpty as _isEmpty
} from 'lodash'

const filterWords = ['yoast_head', 'meta', '{}'];

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
   async nuxtServerInit({ dispatch }, { app }) {
    
    await app.$wp.namespace( 'wp/v2' ).posts().categories(9).perPage(20).get().then(function(data){
      filterData(data);
      dispatch('reviews/init', data);
    }); 

    await app.$wp.namespace( 'menus/v1' ).locations().id('primary').then(function(data){
      filterData(data);
      dispatch('menu/initCompany', data);
    }); 

    await app.$wp.namespace( 'menus/v1' ).locations().id('social').then(function(data){
      filterData(data);
      dispatch('menu/initSocialMedia', data);
    }); 

    await app.$wp.namespace( 'menus/v1' ).locations().id('footer').then(function(data){
      filterData(data);
      dispatch('menu/initServices', data);
    }); 
  
    await app.$wp.namespace( 'acf/v3' ).options().id('options').then(function(data){
      filterData(data);
      dispatch('general/init', data.acf);
    }); 

    await app.$wp.namespace( 'wp/v2' ).technology().perPage(20).get().then(function(data){
      filterData(data);
      dispatch('technology/initTechnology', data);
    }); 
    
  },
}
