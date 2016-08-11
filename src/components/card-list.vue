<template lang="pug">
  nav.card-list
    div.search
      input(type="text"
            v-model="search",
            tabindex="0",
            :style="inputSearchStyle",
            v-focus="focused === 0",
            @focus="focused = 0"
            @keyup.down="moveDown")
    div.card-items
      card-item(v-for="card in cardsView",
                v-el="$key || $index",
                :tabindex="$index + 1",
                :card="card",
                @keydown.down.prevent="moveDown",
                @keydown.up.prevent="moveUp",
                v-focus="$index + 1 === focused",
                @click="cardClick($key)"
                @focus="focused = $index + 1")
</template>

<script>
import { focus } from 'vue-focus';

export default {
  directives: { focus },
  props: {
    cards: [Object, Array]
  },
  data: () => {
    return {
      focused: null,
      search: '',
      inputSearchStyle: {
        width: "100%"
      }
    }
  },
  computed: {
    cardsView: function() {
      return this.$eval('cards | filterBy search in "label"');
    }
  },
  methods: {
  	moveDown: function() { this.focused = Math.min(this.focused + 1, Object.keys(this.cardsView).length); },
  	moveUp: function() { this.focused = Math.max(this.focused - 1, 0) },
    cardClick: function(key) {
      this.$dispatch('card-click', key)
    }
  }
}
</script>

<style lang="sass">
@import "static/styles.sass"
nav
  width: 300px
  display: flex
  flex-direction: column
  overflow: auto
  border: $border
  div.search
    height: 50px
    display: flex
    align-items: center
    padding: 10px

  div.card-items
    overflow: scroll
    div.img.card-item
      span.img
        font-size: 3em

  .card-item
    height: 60px
    display: flex
    margin: 0px
    padding: 5px
    padding-left: 10px
    cursor: pointer
    border-bottom: 1px solid #333
    &:hover
      background-color: #4A4A4A
    &:focus
      background-color: #4A4A4A
    .img
      height: 50px
      min-width: 50px
    .content
      display: flex
      width: 100%
      flex-direction: column
      .actions
        display: flex
        justify-content: flex-end
        button
          background-color: inherit
          border: 1px solid #333
          &:hover
            background-color: $blue


</style>
