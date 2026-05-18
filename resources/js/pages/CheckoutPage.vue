<template>
    <div class="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 class="section-title">Checkout</h1>

        <form class="mt-8 space-y-4" @submit.prevent="placeOrder">
            <div>
                <label class="text-sm font-medium">Full Name</label>
                <InputText v-model="form.name" class="mt-1 w-full" required />
            </div>
            <div>
                <label class="text-sm font-medium">Address</label>
                <InputText v-model="form.line1" class="mt-1 w-full" required />
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="text-sm font-medium">City</label>
                    <InputText v-model="form.city" class="mt-1 w-full" required />
                </div>
                <div>
                    <label class="text-sm font-medium">State</label>
                    <InputText v-model="form.state" class="mt-1 w-full" required />
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="text-sm font-medium">ZIP</label>
                    <InputText v-model="form.zip" class="mt-1 w-full" required />
                </div>
                <div>
                    <label class="text-sm font-medium">Country</label>
                    <InputText v-model="form.country" class="mt-1 w-full" required />
                </div>
            </div>
            <Button type="submit" label="Place Order" class="btn-nike w-full" :loading="submitting" />
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import api from '@/services/api';
import { useCartStore } from '@/stores/cart';

const router = useRouter();
const toast = useToast();
const cart = useCartStore();
const submitting = ref(false);

const form = ref({
    name: '',
    line1: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
});

async function placeOrder() {
    submitting.value = true;
    try {
        await api.post('/orders', {
            shipping_address: { ...form.value },
        });
        await cart.fetchCart();
        toast.add({ severity: 'success', summary: 'Order placed!', life: 3000 });
        router.push({ name: 'orders' });
    } catch (e) {
        toast.add({ severity: 'error', summary: e.response?.data?.message || 'Checkout failed', life: 4000 });
    } finally {
        submitting.value = false;
    }
}
</script>
