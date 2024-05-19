<template>
    <q-page class="q-pa-xl" style="display: grid;">
        <div class="row justify-around" style="width: 100%; align-content: center;">
            <HomeButton :text="'Generar carrito'" :icon="'add_shopping_cart'" @clickFn="generateCart"/>
            <HomeButton :text="'Finalizar compra'" :icon="'shopping_cart_checkout'" :disabled="disabledCheckout" @clickFn="checkout"/>
        </div>
    </q-page>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useQuasar } from 'quasar';
import HomeButton from 'src/components/commons/HomeButton.vue';
import { useCartsStore } from 'src/stores/carts';
import { useRouter } from 'vue-router';

export default {
    name: 'HomePage',
    components: {
        HomeButton
    },
    data() {
        return {
            $q: useQuasar(),
            router: useRouter(),
        }
    },
    methods: {
        ...mapActions(useCartsStore, ['setCurrentCart']),
        async generateCart() {
            await this.setCurrentCart();
        },
        checkout() {
            this.router.push({ name: 'checkout' });
        }
    },
    computed: {
        ...mapState(useCartsStore, ['getProductsLength', 'getLoading']),
        disabledCheckout () {
            return this.getProductsLength <= 0;
        }
    },
    watch: {
        getLoading: {
            handler(newVal) {
                if (newVal) {
                    this.$q.loading.show({
                        message: 'Cargando carrito de compra...'
                    })
                } else {
                    this.$q.loading.hide()
                }
            }
        }
    }
}
</script>