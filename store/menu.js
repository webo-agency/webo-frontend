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