<template>
    <q-page class="q-ma-lg">
        <q-btn color="primary" @click="back">
            <q-icon class="q-pr-sm" name="arrow_back" />
            Volver
        </q-btn>
        <div class="row justify-between q-mt-xl">
            <div class="columns col-7">
                <DetailTable />
            </div>
            <div class="col-4">
                <ResumeTable />
            </div>
        </div>
    </q-page>
</template>

<script>
import { mapActions } from 'pinia'
import { useRouter } from 'vue-router';
import { useCartsStore } from 'src/stores/carts';
import DetailTable from 'src/components/checkoutPage/detail/DetailTable.vue';
import ResumeTable from 'src/components/checkoutPage/resume/ResumeTable.vue';

export default {
    name: 'CheckoutPage',
    components: {
        DetailTable,
        ResumeTable
    },
    data() {
        return {
            router: useRouter(),
        }
    },
    methods: {
        ...mapActions(useCartsStore, ['backHome']),
        back() {
            this.backHome();
            this.router.push({ name: 'home' });
        }
    }
}
</script>