<template lang="pug">
  div(class="auxo-grid", :class="options.wrapperClass", :style="gridStyle")
    table
      thead
        tr
          th(v-for="column in columns",
             @click="sortColumn(column)",
             :style="{ width: column.width }",
             :class="{ 'sortable': column.sortable }")
             span {{column.title}}
        tr(class="filter-row")
          th(v-for="column in columns")
            span
              input(type="text", style="width: 100%")
      tbody
        tr(v-for="row in data"
           @click='options.onRowClick(row)')
          td(v-for="column in columns")
            span {{ row[$key] }}
</template>

<script>
export default {
  data: function () {
    return {
      gridStyle: {
        width: '600px',
        height: '100%'
      },
      options: {
        wrapperClass: ''
      },
      columns: {
        id: { title: "ID", width: '150px' },
        name: { title: "Nome", width: '1000px' }
      },
      data: [
        {
          id: 1, name: "Allan"
        },
        {
          id: 2, name: "Rayanna"
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.auxo-grid
  overflow-x: scroll
  overflow-y: visible
  table
    table-layout: fixed
    display: block
    overflow: scroll
    border-collapse: collapse
    thead
      border-bottom: 1px solid
      background-color: #212121
      tr
        height: 30px
        th
          border-left: 1px solid #333
          &:first-child
            border-left: 0
      tr.filter-row
        border-top: 1px solid #333
        input
          max-width: 100%
          height: 100%
          border: none
          width: 100%
    tbody
      tr
        border-bottom: 1px solid #333
        height: 30px
        td
          padding-left: 10px
          border-left: 1px solid #333
          &:first-child
            border-left: 0

</style>
