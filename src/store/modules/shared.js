export default {
  namespaced: true,
  state: {
    error: null,
    loading: 0,
  },
  mutations: {
    CLEAR_ERROR(state) {
      state.error = null;
    },

    DECREASE_LOADING(state) {
      state.loading--;
    },

    SET_ERROR(state, payload) {
      state.error = payload;
    },

    INCREASE_LOADING(state) {
      state.loading++;
    },
  },
  actions: {
    clearError({ commit }) {
      commit('CLEAR_ERROR');
    },

    decreaseLoading({ commit }) {
      commit('DECREASE_LOADING');
    },

    setError({ commit }, payload) {
      commit('SET_ERROR', payload);
    },

    increaseLoading({ commit }) {
      commit('INCREASE_LOADING');
    },
  },
  getters: {
    loadingButtonBoolean(state) {
      return Boolean(state.loading);
    },
  },
};
