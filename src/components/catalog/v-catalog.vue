<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart'}">
      <div class="v-catalog__link-to-cart">Cart: {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :product_data="product"
        :key="product.article"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: { vCatalogItem },
  methods: {
    addToCart(data) {
      this.$store.dispatch("ADD_TO_CART", data);
    }
  },
  computed: {
    ...mapActions(["GET_PRODUCTS_API"]),
    ...mapGetters(["PRODUCTS", "CART"])
  },
  mounted() {
    this.GET_PRODUCTS_API;
  }
};
</script>

<style>
.v-catalog__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.v-catalog__link-to-cart {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 1rem;
  border: solid 1px #aeaeae;
}
</style>
