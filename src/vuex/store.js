import Vue from "vue";
import Vuex from "vuex";
import productModule from "./productModule";
import cartModule from "./cartModule";

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        product: productModule,
        cart: cartModule,
    },
});

export default store;
