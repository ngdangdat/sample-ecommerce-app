<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" />
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="description">{{ product.description }}</p>
      <div class="price">${{ product.price.toFixed(2) }}</div>
      <button @click="addToCart" class="add-to-cart-btn">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ['add-to-cart'],
  setup(props, { emit }) {
    const addToCart = () => {
      emit('add-to-cart', props.product)
    }

    return {
      addToCart
    }
  }
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  margin: 0 0 10px 0;
  font-size: 1.2em;
}

.description {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 15px;
}

.price {
  font-size: 1.3em;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 15px;
}

.add-to-cart-btn {
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.add-to-cart-btn:hover {
  background: #0056b3;
}
</style>