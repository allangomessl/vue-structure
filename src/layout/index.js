import Vue from 'vue'
import store from './store'
// Layout
import AppBody from './app-body.vue'
import AppContent from './app-content.vue'
import AppHeader from './app-header.vue'
import AppExplorer from './app-explorer.vue'
import AppSidebar from './app-sidebar.vue'

export default {
  store,
  register: function () {
    // Layout
    Vue.component('app-body', AppBody)
    Vue.component('app-content', AppContent)
    Vue.component('app-header', AppHeader)
    Vue.component('app-sidebar', AppSidebar)
    Vue.component('app-explorer', AppExplorer)
  }
}
