export const state = () => ({
  title: "",
  description: "",
  button: ""
});

export const getters = {};

export const mutations = {
  load(state, data) {
    // debugger;
    let elFirst = data.title.shift();
    state.title = elFirst.text;

    elFirst = data.description.shift();
    state.description = elFirst.text;

    state.button = data.button;
  },
  loadTitle(state, data) {
    state.title = data;
  },
  loadDescription(state, data) {
    state.description = data;
  },
  loadButton(state, data) {
    state.button = data;
  }
};

export const actions = {
  load(state, data) {
    // debugger;
    let elFirst = data.title.shift();
    state.title = elFirst.text;

    elFirst = data.description.shift();
    state.description = elFirst.text;

    state.button = data.button;
  }
};
