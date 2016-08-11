export const OPEN_EXPLORER = 'OPEN_EXPLORER'

const includes = {
  icon: 'add_circle',
  items: {
    productCategory: {
      icon: 'face',
      label: "Categoria de Produtos",
      actions: {
        insert: "Incluir"
      }
    },
    product: {
      icon: 'face',
      label: "Produtos",
      actions: {
        insert: "Incluir"
      }
    },
    customer: {
      icon: 'face',
      label: "Produtos",
      actions: {
        insert: "Incluir"
      }
    }
  }
}

const moviments = {
  icon: 'play_circle_filled',
  items: {
    sale: {
      icon: 'face',
      label: "Vendas",
      actions: {
        insert: "Incluir"
      }
    }
  }
}

export default {
  state: {
    activeContent: '',
    activeExplorer: { },
    sidebar: {
      items: {
        includes,
        moviments
      }
    }
  },
  mutations: {
    [OPEN_EXPLORER] (state, explorer) {
      state.activeExplorer = state.sidebar.items[explorer].items
    },
    ['SET_CONTENT'] (state, content) {
      state.activeContent = content
      alert(state.activeContent)

    }
  }
}
