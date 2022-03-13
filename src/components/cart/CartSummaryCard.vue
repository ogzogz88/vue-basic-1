<template>
  <h2>Shopping Summary</h2>

  <div class="cart-summary-card">
    <div v-if="price_total">
      <h3 class="text-left">Grand Total: ${{ price_total.toFixed(2) }}</h3>
      <h3 class="text-left">
        Total Product Quantity: {{ all_products_total }}
      </h3>
      <button class="goto-button checkout" @click="$router.push('/')">
        Go To Checkout
      </button>
    </div>
    <div v-else>
      <h5 class="text-alert">You do not have any product in your cart.</h5>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    all_products_total() {
      return this.$store.getters.totalProductQuantity();
    },
    price_total() {
      return this.$store.getters.totalPrice();
    },
  },
};
</script>

<style lang="scss">
.cart-summary-card {
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0.15rem 0.25rem rgb(112, 128, 144);
  background-color: white;
  border-radius: 0.5rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checkout {
  background-color: rgb(0, 205, 0);
  &:hover {
    background-color: rgb(0, 155, 0);
  }
}
</style>
