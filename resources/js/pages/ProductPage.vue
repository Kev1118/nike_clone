<template>
    <div v-if="loading" class="mx-auto max-w-7xl px-4 py-16">
        <Skeleton width="100%" height="400px" />
    </div>
    <div v-else-if="product" class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-2">
            <div class="aspect-square overflow-hidden rounded-2xl bg-nike-light">
                <img :src="product.image || placeholder" :alt="product.name" class="h-full w-full object-cover" />
            </div>
            <div>
                <p class="text-sm text-nike-gray">{{ product.category?.name }}</p>
                <h1 class="mt-2 text-3xl font-medium">{{ product.name }}</h1>
                <p class="mt-4 text-xl">${{ formatPrice(product.price) }}</p>
                <p class="mt-6 text-nike-gray">{{ product.description }}</p>

                <div class="mt-8">
                    <label class="text-sm font-medium">Size</label>
                    <SelectButton v-model="selectedSize" :options="sizes" class="mt-2" />
                </div>

                <div class="mt-8 flex flex-wrap gap-4">
                    <Button
                        label="Add to Bag"
                        class="btn-nike !rounded-full"
                        :loading="adding"
                        :disabled="!auth.isAuthenticated"
                        @click="addToCart"
                    />
                    <RouterLink v-if="!auth.isAuthenticated" to="/login" class="btn-nike-outline">
                        Sign in to purchase
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import Skeleton from 'primevue/skeleton';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import api from '@/services/api';
import { useAuthStore } from '@/stores/auth';
import { useCartStore } from '@/stores/cart';

const route = useRoute();
const toast = useToast();
const auth = useAuthStore();
const cart = useCartStore();

const product = ref(null);
const loading = ref(true);
const adding = ref(false);
const selectedSize = ref('M');
const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const placeholder = 'https://placehold.co/800x800/f5f5f5/111111?text=Nike';

onMounted(async () => {
    const { data } = await api.get(`/products/${route.params.slug}`);
    product.value = data;
    loading.value = false;
});

async function addToCart() {
    adding.value = true;
    try {
        await cart.addToCart(product.value.id, 1, selectedSize.value);
        toast.add({ severity: 'success', summary: 'Added to bag', life: 3000 });
    } catch (e) {
        toast.add({ severity: 'error', summary: e.response?.data?.message || 'Could not add to bag', life: 4000 });
    } finally {
        adding.value = false;
    }
}

function formatPrice(price) {
    return Number(price).toFixed(2);
}
</script>
