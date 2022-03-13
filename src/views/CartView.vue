<template>
  <div>
    <h1>Shopping Cart</h1>
    <div class="cart-container">
      <div class="cart-item-card-wrapper">
        <h2>Product Summary</h2>
        <div v-if="products.length > 0">
          <CartItemCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
        <div class="cart-item-card__empty cart-item-description__empty" v-else>
          <h4>Explore the best products.</h4>
          <button class="goto-button" @click="$router.push('/')">
            Go For Shopping
          </button>
        </div>
      </div>
      <div class="cart-summary-card-wrapper">
        <CartSummaryCard />
      </div>
    </div>
  </div>
</template>

<script>
import CartItemCard from "../components/cart/CartItemCard.vue";
import CartSummaryCard from "../components/cart/CartSummaryCard.vue";

export default {
  components: {
    CartItemCard,
    CartSummaryCard,
  },
  computed: {
    products() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<style lang="scss">
.cart-container {
  display: flex;
  .cart-item-card-wrapper {
    flex-basis: 70%;
    flex-wrap: wrap;
  }
  .cart-summary-card-wrapper {
    flex-basis: 30%;
  }
}
.cart-item-card__empty {
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0.15rem 0.25rem rgb(112, 128, 144);
  background-color: white;
  border-radius: 0.5rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cart-item-description__empty {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }
}

@media screen and (max-width: 768px) {
  .cart-container {
    flex-direction: column;
  }
  .card-item-card-wrapper {
    flex-basis: 100%;
    max-width: 100%;
  }
}
</style>
