<template>
    <q-card flat bordered class="my-card q-pl-sm q-pr-sm">
        <q-card-section>
            <div class="row col justify-between">
                <div class="col-5 text-h6">
                    Carrito de compra
                </div>
                <div class="col-2" style="align-items: center; display: flex;">
                    {{ getTotalProducts }} productos
                </div>
                <div class="col-3" style="justify-content: end; display: flex;">
                    <q-btn size="sm" outline color="primary" @click="clean">
                        <q-icon class="q-pr-sm" name="delete" />
                        Limpiar carrito
                    </q-btn>
                </div>
            </div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
            <div class="row justify-between">
                <div class="col-5" style="font-size: 12px;">
                    Producto
                </div>
                <div class="col-1" style="font-size: 12px;">
                    Cantidad
                </div>
                <div class="col-4" style="font-size: 12px;">
                    Precio
                </div>
                <div class="col-2" style="font-size: 12px;">
                    Total
                </div>
            </div>
        </q-card-section>
                      
        <q-card-section :key="product.id" v-for="(product, index) in getProducts">
            <ProductDetail :product="product"/>
            <q-separator class="q-mt-sm q-mb-sm" inset v-if="index !== (getTotalProducts - 1)"/>
        </q-card-section>          
    </q-card>
</template>

<script>
import { useRouter } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import ProductDetail from 'src/components/checkoutPage/detail/ProductDetail.vue';
import { useCartsStore } from 'src/stores/carts';

export default {
    name: 'DetailTable',
    components: {
        ProductDetail
    },
    data() {
        return {
            router: useRouter(),
        }
    },
    computed: {
        ...mapState(useCartsStore, ['getTotalProducts', 'getProducts'])
    },
    methods: {
        ...mapActions(useCartsStore, ['cleanCurrentCart']),
        clean() {
            this.cleanCurrentCart();
            this.router.push({ name: 'home' });
        }
    }
}
</script>