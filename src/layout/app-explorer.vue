<template lang="pug">
  card-list(v-bind:cards="itemsMenu")
</template>

<script>
export default {
  vuex: {
    getters: {
      itemsMenu: ({layout}) => layout.activeExplorer
    },
    actions: {
      setContent: ({ dispatch, state }, componentName) => dispatch('SET_CONTENT', componentName)
    }
  },
  events: {
    'card-click': function (cardKey) {
      this.setContent(cardKey)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

@import "static/styles.sass"

nav.card-list
  border-right: $fixed-border
  min-width: 300px

</style>
