<template>
    <div class="row col">
        <div class="col-5">
            <div class="row justify-between">
                <q-img
                    class="col-3"
                    :src="product.thumbnail"
                />
                <div class="col-8" style="display: flex; align-items: center;">
                    {{ product.title }}
                </div>
            </div>
        </div>
        <div class="col-1" style="display: flex; align-items: center;">
            {{ product.quantity }}
        </div>
        <div class="col-4" style="display: grid; align-items: center;">
            <div style="align-self: end; text-decoration: line-through red; font-size: 10px; color: red">
                ${{ product.price }}
            </div>
            <div class="row" style="align-self: start;">
                <div class="col-4" style="display: flex; align-items: center;">
                    ${{ discountedPrice }}
                </div>
                <div class="col-8 q-ma-none q-pa-none">
                    <q-chip
                        color="primary"
                        text-color="white"
                        icon="local_offer"
                        size="10px"
                        class="q-mt-none q-mb-none"
                    >
                        {{ product.discountPercentage }}% descuento
                    </q-chip>
                </div>
            </div>
        </div>
        <div class="col-2" style="display: grid; align-items: center;">
            <div style="align-self: end; text-decoration: line-through red; font-size: 10px; color: red">
                ${{ product.total }}
            </div>
            <div class="col" style="align-self: start;">
                ${{ product.discountedPrice }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetail',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        discountedPrice() {
            return Math.round(this.product.price * (1 - ((this.product.discountPercentage) / 100)));
        }
    }
}
</script>