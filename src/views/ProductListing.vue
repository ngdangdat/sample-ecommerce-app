<template>
  <div class="product-listing">
    <h2>Products</h2>
    <div class="products-grid">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'ProductListing',
  components: {
    ProductCard
  },
  setup() {
    const store = useStore()
    
    const products = computed(() => store.state.products)
    
    const addToCart = (product) => {
      store.dispatch('addToCart', product)
    }

    return {
      products,
      addToCart
    }
  }
}
</script>

<style scoped>
.product-listing {
  padding: 20px 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>