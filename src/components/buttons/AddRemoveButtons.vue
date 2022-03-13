<template>
  <div class="button-container">
    <button
      class="remove"
      :class="{ disabled: !product_total }"
      @click="removeFromCart()"
    >
      Remove
    </button>
    <button class="add" @click="addToCart()">Add</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
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
  },
};
</script>

<style lang="scss">
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    min-width: 80px;
    width: 80%;
    border: none;
    padding: 1rem 8%;
    border-radius: 0.25rem;
    cursor: pointer;
    color: white;
  }
  button:first-of-type {
    margin: 0 0.25rem 0 0;
  }
  .remove {
    background-color: rgb(255, 32, 32);
    &:hover {
      background-color: rgb(205, 0, 0);
    }
  }
  .add {
    background-color: rgb(79, 160, 187);
    &:hover {
      background-color: rgb(29, 110, 137);
    }
  }
  .disabled {
    cursor: not-allowed;
    pointer-events: none;
    background-color: gray;
  }
}

@media screen and (max-width: 768px) {
  .button-container {
    // width: 50%;
  }
}
</style>
