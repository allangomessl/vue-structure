<template lang="pug">
  nav(v-bind:class="{ 'fixed': fixed }")
</template>

<script>
export default {
  params: {
    title: String,
    fixed: Boolean
  }
}
</script>

<style lang="sass" scoped>
@import "static/styles.sass"

nav
  top: 0
  width: 100%
  height: 3rem
  border: none
  border-bottom: $fixed-border
  box-sizing: border-box
.fixed
  position: fixed

</style>
