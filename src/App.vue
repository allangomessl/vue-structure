<template lang="pug">
  #app
    app-header
    app-body
      app-sidebar
      app-explorer
      app-content
        div(v-bind:is="activeContent")
</template>
<script>
  export default {
    vuex: {
      getters: {
        activeContent: ({layout}) => layout.activeContent
      }
    }
  }
</script>
<style lang="sass">
@import "static/styles.sass"

body
  background-color: $back-color
  margin: 0
  font-size: 15px

body, button
  font-weight: 700
  font-family: $font-family

*
  box-sizing: border-box
  color: #BDBDBD
ul
  padding: 0
  list-style: none

::-webkit-scrollbar
    background-color: inherit
    width: 10px
    height: 10px

::-webkit-scrollbar-thumb
    background-color: #282828

::-webkit-scrollbar-corner
    background-color: inherit

</style>
