<template lang="pug">
  div.app-header
    slot
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

@import "static/styles.sass"

div.app-header
  height: $header-height
  border-bottom: $fixed-border
  background-color: $fixed-color
  width: 100%
  position: fixed
</style>
