<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <h5 class="price">Price: ${{ product.price.toFixed(2) }}</h5>
    <p class="description">
      <span class="product-description">Description</span>: {{ description }}
    </p>
    <p class="text-muted">{{ product.category }}</p>
    <button class="view-product-button" @click="$emit('view-product', product)">
      View product
    </button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.description.substring(0, 150);
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 80%;
  margin: 5%;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 0.15rem 0.25rem rgb(112, 128, 144);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  transition: all 150ms ease-in;
  &:hover {
    box-shadow: 2px 2px 0.5rem rgb(112, 128, 144);
  }

  .product-description {
    font-weight: bold;
  }

  h5.price {
    color: gray;
  }

  p.description {
    font-size: 0.85rem;
  }
  p.text-muted {
    color: grey;
  }
  button.view-product-button {
    padding: 1rem 8%;
    background-color: rgb(79, 160, 187);
    box-shadow: 0 0 0.25rem rgb(89, 170, 197);
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: all 150ms ease-in;
    pointer-events: auto;
    &:hover {
      background-color: rgb(29, 110, 137);
    }
  }
}
@media screen and (min-width: 500px) {
  .card {
    width: 300px;
    margin: 1rem;
  }
}
</style>
