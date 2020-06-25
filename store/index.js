export const state = () => ({});

export const mutations = {}

export const getters = {}

export const actions = {
   async nuxtServerInit({ dispatch }, { app }) {
    app.$wp.namespace( 'wp/v2' ).posts().categories(9).perPage(20).get().then(function(data){
      dispatch('reviews/init', data);
    }); 

    app.$wp.namespace( 'menus/v1' ).locations().id('primary').then(function(data){
      dispatch('menu/initCompany', data);
    }); 

    app.$wp.namespace( 'menus/v1' ).locations().id('social').then(function(data){
      dispatch('menu/initSocialMedia', data);
    }); 

    app.$wp.namespace( 'menus/v1' ).locations().id('footer').then(function(data){
      dispatch('menu/initServices', data);
    }); 
  
    app.$wp.namespace( 'acf/v3' ).options().id('options').then(function(data){
      dispatch('general/init', data.acf);
    }); 

    app.$wp.namespace( 'wp/v2' ).technology().perPage(20).get().then(function(data){
      dispatch('technology/initTechnology', data);
    });
  }
}
