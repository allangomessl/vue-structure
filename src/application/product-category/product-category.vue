<template lang="pug">
div.product-category
  navbar
  p product category
</template>

<script>
export default {
  vuex: {
    getters: {
      all: ({application}) => application.productCategory.all
    }
  },
  data: () => {
    return {
      tableData: [{
        name: "Allan"
      }],
      columns: {
        name: {

        }
      }
    }
  },
  computed: {
    cardsView: function() {
      var repl = []
      this.all.map((obj) => repl.push({label: obj.name}))
      return repl
    }
  }
}
</script>

<style lang="sass">
.product-category
  width: 100%
  height: 100%
  .card-list
    width: 100%
    height: 100%
    .card-items
      width: 100%
      display: flex
      flex-direction: row
</style>
