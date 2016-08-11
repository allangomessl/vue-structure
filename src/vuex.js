import Vue from 'vue'
import Vuex from 'vuex'
import layout from './layout/store'
import application from './application/store'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    layout,
    application
  },
  strict: debug
})
