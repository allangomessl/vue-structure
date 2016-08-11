import Vue from 'vue'

// View
import CardItem from './card-item.vue'
import CardList from './card-list.vue'
import Navbar from './navbar.vue'
import Grid from './grid.vue'

export default {
  register: function () {
    // View
    Vue.component('card-item', CardItem)
    Vue.component('card-list', CardList)
    Vue.component('navbar', Navbar)
    Vue.component('grid', Grid)
  }
}
