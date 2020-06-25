export const state = () => ({
  technology: {
  }
});

export const getters = {
  get: ($state) => {
      return $state.technology
  }
}

export const mutations = {
  save($state, data) {
      Object.assign($state.technology, data);
  }
};

export const actions = {
  initTechnology (context, data) {
      context.commit('save', data);
  }
}
