import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '../services/auth.service';

Vue.use(Vuex)

const accessToken = localStorage.getItem('accessToken');
const initialState = accessToken
  ? { status: { loggedIn: true }, accessToken, commenters: null }
  : { status: { loggedIn: false }, accessToken: null, commenters: null };

export default new Vuex.Store({

  state: initialState,

  mutations: {
    loginSuccess(state, tokne) {
      state.status.loggedIn = true;
      state.accessToken = tokne;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.accessToken = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.accessToken = null;
    },
  },

  actions: {
    login({ commit }, login) {
    AuthService.login(login).then(
        token => {
          commit('loginSuccess', token);
          return Promise.resolve(token);
        },
        error => {
        commit('loginFailure');
        return Promise.reject(error);
      }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    }
  },
  
  modules: {
  }
})
