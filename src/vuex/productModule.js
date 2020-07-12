import axios from "axios";

export default {
    state: () => ({ products: [] }),
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
    },
    actions: {
        GET_PRODUCTS_API({ commit }) {
            return axios("http://localhost:3000/products", {
                method: "GET",
            }).then((response) => {
                commit("SET_PRODUCTS_TO_STATE", response.data);
                return response;
            });
        },
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
    },
};
