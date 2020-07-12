<template>
  <div class="v-catalog-item">
    <img
      :src=" require('../../assets/images/' + product_data.image) "
      class="v-catalog-item__image"
      alt="img"
    />
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Price: {{Math.round(product_data.price * 100) / 100}} Р.</p>
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  data() {
    return {};
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    }
  },
  mounted() {
    this.$set(this.product_data, "quantity", 1);
  }
};
</script>

<style>
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 1rem;
  margin-bottom: 1rem;
}
.v-catalog-item__image {
  width: 100px;
}
</style>
