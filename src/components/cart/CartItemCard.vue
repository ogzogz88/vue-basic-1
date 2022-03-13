<template>
  <div class="cart-item-card">
    <div class="cart-item-description">
      <h3 class="mb-0">{{ product.name }}</h3>
      <p>{{ short_description }}</p>
    </div>
    <h4>Total Cost: ${{ product_cost.toFixed(2) }}</h4>
    <h4>In Cart: {{ product.quantity }}</h4>
    <AddRemoveButtons :product="product" />
  </div>
</template>

<script>
import AddRemoveButtons from "../buttons/AddRemoveButtons.vue";

export default {
  components: {
    AddRemoveButtons,
  },
  props: ["product"],
  computed: {
    short_description() {
      return this.product.description.substring(0, 50);
    },
    product_cost() {
      return this.product.price * this.product.quantity;
    },
  },
};
</script>

<style lang="scss">
.cart-item-card {
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0.15rem 0.25rem rgb(112, 128, 144);
  background-color: white;
  border-radius: 0.5rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cart-item-description {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }
}
@media screen and (max-width: 1200px) {
  .cart-item-card {
    flex-direction: column;
    align-items: flex-start;

    .cart-item-description {
      max-width: 600px;
    }
    h4 {
      margin-top: 0;
    }
  }
}
</style>
