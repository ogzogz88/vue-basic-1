import { createStore } from 'vuex'

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: []
  },
  getters: {
    productQuantity: state => product => {
      const item = state.cart.find(el => el.id === product.id)
      if (item) return item.quantity
      else return null
    },
    totalProductQuantity: state => () => {
      let total = 0;
      let len = state.cart.length;
      const itemInCart = len > 0 ? true : false;
      if (itemInCart) {
        for (let i = 0; i < len; i++) {
          total += (state.cart[i].quantity)
        }
        return total;
      } else return null
    },
    totalPrice: state => () => {
      let total = 0;
      let len = state.cart.length;
      const itemInCart = len > 0 ? true : false;
      if (itemInCart) {
        for (let i = 0; i < len; i++) {
          total += (state.cart[i].price) * (state.cart[i].quantity)
        }
        return total;
      } else return null

    },
    cartItems: state => {
      return state.cart;
    }
  },
  mutations: {
    addToCart(state, product) {
      let item = state.cart.find(el => el.id === product.id)
      if (item) {
        item.quantity++
      } else state.cart.push({ ...product, quantity: 1 })
      updateLocalStorage(state.cart)
    },
    removeFromCart(state, product) {
      let item = state.cart.find(el => el.id === product.id)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          state.cart = state.cart.filter(el => el.id !== product.id)
        }
      }
      updateLocalStorage(state.cart)
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem("cart")
      if (cart.length > 0) {
        state.cart = JSON.parse(cart)
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
