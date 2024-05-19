<template>
    <q-card flat bordered class="my-card">
        <q-card-section>
            <div class="text-h6">Resumen cobro</div>
        </q-card-section>
                      
        <q-card-section class="q-pt-none">
            <div class="row q-pb-lg">
                <div class="col-8">
                    Subtotal
                </div>
                <div class="col-4">
                    $ {{ getTotal }}
                </div>
            </div>
            <div class="row q-pb-lg">
                <div class="col-8">
                    Descuento
                </div>
                <div class="col-4">
                    - $ {{ getTotalDiscount }}
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    Despacho
                </div>
                <div class="col-4">
                    <q-btn v-if="getToGenerate === null" @click="checkout" padding="10px 15px" outline rounded size="sm" color="primary" label="Cotizar despacho" icon="local_shipping"/>
                    <div v-else-if="getToGenerate">
                        Envío Nomad - $3670
                    </div>
                    <div v-else-if="!getToGenerate">
                        No hay envíos disponibles
                    </div>
                </div>
            </div>
        </q-card-section>
          
        <q-separator inset />
                      
        <q-card-section>
            <div class="row">
                <div class="col-8" style="font-size: 20px; font-weight: bold;">
                    Total
                </div>
                <div class="col-4" style="font-size: 20px;">
                    {{ getToGenerate === null ? 'Esperando envío' : (getToGenerate ? `$${getTotal + 3670}` : 'Sin envíos') }}
                </div>
            </div>
        </q-card-section>

        <q-separator inset/>
           
     </q-card>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useQuasar } from 'quasar';
import { useCartsStore } from 'src/stores/carts';

export default {
    name: 'ResumeTable',
    data() {
        return {
            $q: useQuasar(),
        }
    },
    methods: {
        ...mapActions(useCartsStore, ['calculate']),
        async checkout() {
            await this.calculate();
        }
    },
    computed: {
        ...mapState(useCartsStore, ['getTotal', 'getTotalDiscount', 'getToGenerate', 'getCheckoutLoading'])
    },
    watch: {
        getCheckoutLoading: {
            handler(newVal) {
                if (newVal) {
                    this.$q.loading.show({
                        message: 'Calculando envío...'
                    })
                } else {
                    this.$q.loading.hide()
                }
            }
        }
    }
}
</script>