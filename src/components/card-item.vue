<template lang="pug">
div.img.card-item
  span.img.material-icons {{ card.icon }}
  .content
    span {{ card.label }}
    .actions
      button(v-for="action in card.actions") {{ action }}
</template>

<script>
export default {
  props: {
    card: Object
  }
}
</script>
