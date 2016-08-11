import Vue from 'vue'

// Layout
import productCategory from './product-category/product-category.vue'
import sale from './sale/sale.vue'

export default {
  register: function () {
    // Layout
    Vue.component('productCategory', productCategory)
    Vue.component('sale', sale)
  }
}
