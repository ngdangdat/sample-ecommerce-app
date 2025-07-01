<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    
    <div v-if="cart.length === 0" class="empty-cart">
      <p>Your cart is empty</p>
      <button @click="$emit('switch-view', 'products')">Continue Shopping</button>
    </div>
    
    <div v-else>
      <div class="cart-items">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" />
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p>${{ item.price.toFixed(2) }}</p>
          </div>
          <div class="quantity-controls">
            <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
          </div>
          <div class="item-total">
            ${{ (item.price * item.quantity).toFixed(2) }}
          </div>
          <button @click="removeFromCart(item.id)" class="remove-btn">Remove</button>
        </div>
      </div>
      
      <div class="cart-summary">
        <h3>Total: ${{ cartTotal.toFixed(2) }}</h3>
        <button @click="checkout" class="checkout-btn">Proceed to Checkout</button>
        <button @click="clearCart" class="clear-btn">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Cart',
  setup() {
    const store = useStore()
    
    const cart = computed(() => store.state.cart)
    const cartTotal = computed(() => store.getters.cartTotal)
    
    const updateQuantity = (productId, quantity) => {
      if (quantity <= 0) {
        store.dispatch('removeFromCart', productId)
      } else {
        store.dispatch('updateCartQuantity', { productId, quantity })
      }
    }
    
    const removeFromCart = (productId) => {
      store.dispatch('removeFromCart', productId)
    }
    
    const clearCart = () => {
      store.dispatch('clearCart')
    }
    
    const checkout = () => {
      alert('Checkout functionality would be implemented here!')
    }

    return {
      cart,
      cartTotal,
      updateQuantity,
      removeFromCart,
      clearCart,
      checkout
    }
  }
}
</script>

<style scoped>
.cart {
  padding: 20px 0;
}

.empty-cart {
  text-align: center;
  padding: 40px;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  gap: 15px;
}

.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.item-details {
  flex: 1;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-controls button {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.item-total {
  font-weight: bold;
  min-width: 80px;
}

.remove-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.cart-summary {
  text-align: right;
  padding: 20px;
  border-top: 2px solid #eee;
  margin-top: 20px;
}

.checkout-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.clear-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
}
</style>