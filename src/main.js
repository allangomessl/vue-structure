import Vue from 'vue'
import App from './App'
import store from './vuex'
import VueTables from 'vue-tables';

import components from './components'
components.register()
import layout from './layout'
layout.register()
import application from './application'
application.register()


Vue.use(VueTables.client);
Vue.use(VueTables.server);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
  store
})
