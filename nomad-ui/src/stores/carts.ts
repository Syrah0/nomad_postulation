import { defineStore } from 'pinia';
import CartType from 'src/models/carts';
import ProductType from 'src/models/products';
import * as cartServices from 'src/services/carts';
import * as checkoutServices from 'src/services/checkout';

export const useCartsStore = defineStore('carts', {
  state: () => ({
    currentCart: <CartType>{},
    loading: false,
    checkoutLoading: false,
    toGenerate: null,
  }),
  getters: {
    getCurrentCart: (state) => state.currentCart,
    getProductsLength: (state) => state.currentCart.products?.length || 0,
    getLoading: (state) => state.loading,
    getTotal: (state) => state.currentCart.total,
    getTotalDiscount: (state) => state.currentCart.discountedTotal,
    getTotalProducts: (state) => state.currentCart.totalProducts,
    getProducts: (state) => state.currentCart.products,
    getCheckoutLoading: (state) => state.checkoutLoading,
    getToGenerate: (state) => state.toGenerate,
  },
  actions: {
    async setCurrentCart() {
      this.loading = true;
      const cartId = Math.floor((Math.random() * 20) + 1);
      const newCart = await cartServices.getCart({ cartId });
      this.currentCart = <CartType>newCart;
      this.loading = false;
    },
    cleanCurrentCart() {
      this.currentCart = <CartType>{};
      this.toGenerate = null;
    },
    async calculate() {
      this.checkoutLoading = true;
      const cartData = this.currentCart.products.map((product: ProductType) => ({
        'productId': product.id,
        'price': product.price,
        'quantity': product.quantity,
        'discount': product.price - Math.round(product.price * (1 - ((product.discountPercentage) / 100)))
      }));
      const { toGenerate } = await checkoutServices.checkCart({ cartData });
      this.toGenerate = toGenerate;
      this.checkoutLoading = false;
    },
    backHome () {
      this.toGenerate = null;
    },
  },
});
