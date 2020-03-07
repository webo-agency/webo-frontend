export const state = () => ({
    data: {}
});

export const mutations = {
    save(state, data) {
        // console.log(data); // eslint-disable-line
        state.data = data;
    }
};
  
// export const getters = {};
// export const actions = {};
  