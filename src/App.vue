<template>
  <div id="app">
    <header>
      <h1>Sample eCommerce App</h1>
      <nav>
        <button @click="currentView = 'products'">Products</button>
        <button @click="currentView = 'cart'">Cart ({{ cartItemCount }})</button>
      </nav>
    </header>

    <main>
      <ProductListing v-if="currentView === 'products'" />
      <Cart v-if="currentView === 'cart'" />
    </main>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import ProductListing from './views/ProductListing.vue'
import Cart from './views/Cart.vue'

export default {
  name: 'App',
  components: {
    ProductListing,
    Cart
  },
  setup() {
    const store = useStore()
    const currentView = ref('products')
    
    const cartItemCount = computed(() => store.getters.cartItemCount)

    return {
      currentView,
      cartItemCount
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eee;
}

nav button {
  margin-left: 10px;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

nav button:hover {
  background: #0056b3;
}
</style>