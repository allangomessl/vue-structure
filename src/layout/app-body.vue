<template lang="pug">
div
  slot
</template>

<style lang="sass" scoped>
@import "static/styles.sass"
div
  top: $body-top
  width: 100%
  height: $body-height
  position: fixed
  display: flex
</style>
