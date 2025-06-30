import { createStore } from 'vuex'

const store = createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Laptop',
        price: 999.99,
        image: 'https://via.placeholder.com/300x200',
        description: 'High-performance laptop for work and gaming'
      },
      {
        id: 2,
        name: 'Smartphone',
        price: 599.99,
        image: 'https://via.placeholder.com/300x200',
        description: 'Latest smartphone with advanced features'
      },
      {
        id: 3,
        name: 'Headphones',
        price: 199.99,
        image: 'https://via.placeholder.com/300x200',
        description: 'Noise-cancelling wireless headphones'
      },
      {
        id: 4,
        name: 'Tablet',
        price: 399.99,
        image: 'https://via.placeholder.com/300x200',
        description: 'Portable tablet for productivity and entertainment'
      }
    ],
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existingItem = state.cart.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    UPDATE_CART_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    CLEAR_CART(state) {
      state.cart = []
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    },
    updateCartQuantity({ commit }, payload) {
      commit('UPDATE_CART_QUANTITY', payload)
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    }
  },
  getters: {
    cartItemCount: state => {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    },
    cartTotal: state => {
      return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
  }
})

export default store