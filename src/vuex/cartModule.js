export default {
    state: () => ({ cart: [] }),
    mutations: {
        DELETE_CART: (state, index) => {
            const newCarts = [...state.cart.slice(0, index), ...state.cart.slice(index + 1)];
            state.cart = [...newCarts];
        },
        INCREMENT_CART: (state, index) => {
            state.cart.forEach((cart) => {
                if (cart.article === index) {
                    cart.quantity++;
                }
            });
        },
        DECREMENT_CART: (state, index) => {
            state.cart.forEach((cart) => {
                if (cart.article === index && cart.quantity > 1) {
                    cart.quantity--;
                }
            });
        },
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let isProductExist = false;
                state.cart.forEach((item) => {
                    if (item.article === product.article) {
                        isProductExist = true;
                        item.quantity++;
                    }
                });
                if (!isProductExist) {
                    state.cart = [...state.cart, product];
                }
            } else {
                state.cart = [...state.cart, product];
            }
        },
    },
    actions: {
        ADD_TO_CART({ commit }, product) {
            commit("SET_CART", product);
        },
        DELETE_FROM_CART({ commit }, index) {
            commit("DELETE_CART", index);
        },
        INCREMENT_CART({ commit }, index) {
            commit("INCREMENT_CART", index);
        },
        DECREMENT_CART({ commit }, index) {
            commit("DECREMENT_CART", index);
        },
    },
    getters: {
        CART(state) {
            return state.cart;
        },
    },
};
