import orderBy from 'lodash/orderBy';

export const state = () => ({
    mainmenu: {},
    submenu: {}
});

export const mutations = {
    saveMenu(state, data) {
        // console.log(data); // eslint-disable-line
        state.mainmenu = data;
    },
    saveSubmenu(state, data) {
        state.submenu[data.slug] = data;
    }
};

export const actions = {
    mainInit (context, data) {
        context.commit('saveMenu', data);
    },
    submenuInit (context, data) {
        context.commit('saveSubmenu', data);
    }
}

export const getters = {
    submenuServices: function(state){
        //menu_order
        return orderBy(state.submenu["uslugi"].items, ['menu_order'], ['asc', 'desc'])
      },
      submenuWebo: function(state){
        //menu_order
        return orderBy(state.submenu["webo"].items, ['menu_order'], ['asc', 'desc'])
      },
      submenuSocialMedia: function(state){
        //menu_order
        return orderBy(state.submenu["social-media"].items, ['menu_order'], ['asc', 'desc'])
      }
}
