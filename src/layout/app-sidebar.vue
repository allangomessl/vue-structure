<template lang="pug">
  nav
    i.material-icons.fg-blue-hover(v-for="item in items" @click="select($key)") {{ item.icon }}
</template>

<script>
export default {
  vuex: {
    getters: {
      items: ({layout}) => layout.sidebar.items
    },
    actions: {
      select: ({ dispatch, state }, key) => dispatch('OPEN_EXPLORER', key)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "static/styles.sass"
nav
  font-size: 4rem
  width: 1em
  min-width: 1em
  display: flex
  flex-direction: column
  border-right: $fixed-border
  background-color: $fixed-color
  i
    font-size: 0.8em
    padding: 0.1em
    color: $fixed-item-color
    cursor: pointer

</style>
