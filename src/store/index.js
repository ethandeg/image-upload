import {createStore} from 'vuex';
import auth from './modules/auth';
// import Vue from 'vue';

// Vue.use(Vuex);

export const store = createStore({
    modules: {
        auth
    }
})