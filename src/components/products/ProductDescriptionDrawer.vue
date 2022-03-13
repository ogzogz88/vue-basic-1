<template>
  <div
    class="drawer-background"
    :class="{ show: active }"
    @click="$emit('close-product-drawer')"
  />
  <div class="drawer" :class="{ show: active }">
    <div class="product-details" v-if="product">
      <div class="header-wrapper">
        <h3 class="text-center">{{ product.name }}</h3>
        <div class="drawer-close" @click="$emit('close-product-drawer')">X</div>
      </div>

      <p class="description">{{ product.description }}</p>
      <h4 class="mb-0 text-left">
        Item Price: ${{ product.price.toFixed(2) }}
      </h4>

      <div class="cart-total" v-if="!product_total">
        <hr />
        <h4 class="text-alert">You do not have this product in your cart.</h4>
      </div>
      <div class="cart-total" v-else>
        <hr />
        <h4 class="text-left">In Cart: {{ product_total }}</h4>
        <h4 class="text-left">
          Total Item Price: ${{ (product_total * product.price).toFixed(2) }}
        </h4>
      </div>

      <div v-if="price_total">
        <hr />
        <h3 class="text-left">
          Total Cart Price: ${{ price_total.toFixed(2) }}
        </h3>
      </div>
      <AddRemoveButtons :product="product" />
      <button class="goto-button" @click="$router.push('cart')">
        Go To Cart
      </button>
    </div>
  </div>
</template>

<script>
import AddRemoveButtons from "../buttons/AddRemoveButtons.vue";

export default {
  components: {
    AddRemoveButtons,
  },
  props: ["product", "active"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.product);
    },
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product);
    },
    price_total() {
      return this.$store.getters.totalPrice();
    },
  },
};
</script>

<style lang="scss">
.drawer-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(124, 124, 124, 0.6);
  z-index: 100;
  display: none;
  transition: display 0.3s;

  &.show {
    display: block;
  }
}
.drawer {
  //width: 95vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: -200vw;
  padding: 5vw;
  transition: left 0.1s;
  z-index: 101;
  overflow-y: scroll;

  &.show {
    left: 0;
  }
}

.drawer-close {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 0.25rem;
  right: 0.5rem;
  border: 1px solid gray;
  color: gray;
  width: 2rem;
  height: 2rem;
  float: right;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mb-0 {
  margin-bottom: 0;
}

.text-left {
  text-align: left;
}

.text-alert {
  color: rgb(255, 32, 32);
}

.goto-button {
  border: none;
  padding: 1rem 8%;
  border-radius: 0.25rem;
  cursor: pointer;
  color: white;
  background-color: rgb(255, 96, 0);
  margin-top: 0.5rem;
  font-weight: bold;
  &:hover {
    background-color: rgb(205, 46, 0);
  }
}

@media screen and (min-width: 500px) {
  .drawer {
    transition: left 0.3s;
  }
}
</style>
