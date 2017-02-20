// Import Vue and the component being tested
import Vue from 'vue'
import Vuex from 'vuex'
import TestComponent from '../NotificationCounter.vue'
import _ from 'lodash';
import test from 'ava';
import nextTick from 'p-immediate';

Vue.use(Vuex)

var state = {
  events: []
}
// export mutations as a named export
const mutations = {}

const store = new Vuex.Store({
  state,
  mutations
})


test('renders the correct counter when binded store changed', async(t) => {
  const Constructor = Vue.extend(TestComponent);
  const vm = new Constructor({store}).$mount();
  // since counter indicator is only visible when notification count is bigger than 0
  t.is(vm.$el.querySelector('.bubble'), null);
  store.state.events.push({});
  await nextTick();
  t.is(vm.$el.querySelector('.bubble').textContent, '1')
});
