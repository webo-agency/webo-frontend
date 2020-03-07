export const state = () => ({
    data: {}
});

export const mutations = {
    save(state, data) {
        state.data = data;
    }
};

export const actions = {
    init (context, data) {
        context.commit('save', data);
    }
}
