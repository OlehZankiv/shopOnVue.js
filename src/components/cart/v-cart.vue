<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-cart__link-to-catalog">Catalog</div>
    </router-link>
    <div class="cart-items">
      <h1>CART</h1>
      <p v-if="!CART.length">No Cart...</p>
      <v-cart-item
        v-for="(cartItem, index) in CART"
        :key="cartItem.article"
        :cart_item_data="cartItem"
        @deleteFromCart="deleteFromCart(index)"
      />
      <div class="v-cart__total">
        <p class="total__name">Total:</p>
        <p>{{cartTotalCost}} Р.</p>
      </div>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item";
import { mapGetters } from "vuex";

export default {
  name: "v-cart",
  components: { vCartItem },
  methods: {
    deleteFromCart(index) {
      this.$store.dispatch("DELETE_FROM_CART", index);
    }
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      return (
        Math.round(
          this.CART.reduce((res, item) => res + item.price * item.quantity, 0) *
            100
        ) / 100
      );
    }
  }
};
</script>

<style>
.v-cart__link-to-catalog {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 1rem;
  border: solid 1px #aeaeae;
}
.v-cart__total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 3rem / 2;
  display: flex;
  justify-content: center;
  background-color: #26ae68;
  color: white;
  font-size: 18px;
}
.total__name {
  margin-right: 1rem;
}
</style>
