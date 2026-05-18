<template>
    <div>
        <section class="relative h-[70vh] min-h-[480px] bg-nike-black text-white">
            <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            <div class="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 sm:px-6 lg:px-8">
                <p class="text-sm uppercase tracking-widest text-neutral-300">Just In</p>
                <h1 class="mt-2 max-w-xl text-4xl font-medium leading-tight md:text-6xl">
                    UNLEASH YOUR POTENTIAL
                </h1>
                <p class="mt-4 max-w-md text-neutral-300">
                    Discover the latest drops in shoes, apparel, and gear built for every athlete.
                </p>
                <div class="mt-8 flex gap-4">
                    <RouterLink to="/shop" class="btn-nike bg-white text-nike-black hover:bg-neutral-200">
                        Shop Now
                    </RouterLink>
                    <RouterLink
                        :to="{ name: 'shop', query: { featured: 1 } }"
                        class="btn-nike-outline border-white text-white hover:bg-white/10"
                    >
                        Featured
                    </RouterLink>
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="flex items-end justify-between">
                <h2 class="section-title">Trending Now</h2>
                <RouterLink to="/shop" class="text-sm font-medium underline">View All</RouterLink>
            </div>
            <div v-if="loading" class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                <Skeleton v-for="n in 4" :key="n" height="280px" class="rounded-lg" />
            </div>
            <div v-else class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                <ProductCard v-for="product in featured" :key="product.id" :product="product" />
            </div>
        </section>

        <section class="bg-nike-light py-16">
            <div class="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
                <div
                    v-for="tile in categoryTiles"
                    :key="tile.label"
                    class="relative flex h-64 items-end overflow-hidden rounded-2xl bg-nike-black p-6 text-white"
                >
                    <div>
                        <h3 class="text-xl font-medium">{{ tile.label }}</h3>
                        <RouterLink :to="tile.to" class="mt-2 inline-block text-sm underline">
                            Shop
                        </RouterLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Skeleton from 'primevue/skeleton';
import api from '@/services/api';
import ProductCard from '@/components/ProductCard.vue';

const featured = ref([]);
const loading = ref(true);

const categoryTiles = [
    { label: 'Men', to: { name: 'shop', query: { gender: 'men' } } },
    { label: 'Women', to: { name: 'shop', query: { gender: 'women' } } },
    { label: 'Kids', to: { name: 'shop', query: { gender: 'kids' } } },
];

onMounted(async () => {
    try {
        const { data } = await api.get('/products', { params: { featured: 1, per_page: 4 } });
        featured.value = data.data;
    } finally {
        loading.value = false;
    }
});
</script>
