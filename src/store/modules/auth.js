import api from '../../api/imgur';

const state = {
    toke: null
};

const getters = {
    isLoggedIn: (state) => !!token.token
};

const actions = {
    login: () => {
        api.login();
    },
    logout: ({ commit }) => {
        commit('setToken', null)
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};