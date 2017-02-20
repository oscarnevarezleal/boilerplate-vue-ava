// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        connected: false,
        events: []
    },
    mutations: {
        increment (state) {

        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: {App}
})

setInterval(function () {
    store.state.events.push(1)
}, 1000)
