<template>
  <div class="v-cart-item">
    <img
      :src=" require('../../assets/images/' + cart_item_data.image) "
      class="v-cart-item__image"
      alt="img"
    />
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{Math.ceil(cart_item_data.price * 100) /100}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>QTY</p>
      <span @click="decrement" class="quantity__decrement">-</span>
      <span>{{cart_item_data.quantity}}</span>
      <span @click="increment" class="quantity__increment">+</span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "v-cart-item",
  data() {
    return {};
  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    ...mapActions(["INCREMENT_CART", "DECREMENT_CART"])
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    increment() {
      this.$store.dispatch("INCREMENT_CART", this.cart_item_data.article);
    },
    decrement() {
      this.$store.dispatch("DECREMENT_CART", this.cart_item_data.article);
    }
  }
};
</script>

<style>
.v-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0 #e0e0e0;
  margin-bottom: 1rem;
  padding: 1rem;
}
.v-cart-item__image {
  max-width: 50px;
}
.quantity__decrement,
.quantity__increment {
  padding: 5px;
  cursor: pointer;
}
</style>
