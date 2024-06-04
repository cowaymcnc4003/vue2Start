import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
});