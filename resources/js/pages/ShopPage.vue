<template>
    <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 class="section-title">Shop</h1>

        <div class="mt-8 flex flex-col gap-6 lg:flex-row">
            <aside class="w-full shrink-0 lg:w-56">
                <label class="text-sm font-medium">Search</label>
                <InputText v-model="filters.search" class="mt-1 w-full" placeholder="Search products..." @keyup.enter="loadProducts" />

                <label class="mt-4 block text-sm font-medium">Gender</label>
                <Select
                    v-model="filters.gender"
                    :options="genderOptions"
                    option-label="label"
                    option-value="value"
                    placeholder="All"
                    show-clear
                    class="mt-1 w-full"
                    @change="loadProducts"
                />

                <div class="mt-4 flex items-center gap-2">
                    <Checkbox v-model="filters.featured" binary input-id="featured" @change="loadProducts" />
                    <label for="featured" class="text-sm">Featured only</label>
                </div>

                <Button label="Apply Filters" class="mt-4 w-full" @click="loadProducts" />
            </aside>

            <div class="flex-1">
                <div v-if="loading" class="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <Skeleton v-for="n in 6" :key="n" height="280px" class="rounded-lg" />
                </div>
                <div v-else-if="products.length" class="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <ProductCard v-for="product in products" :key="product.id" :product="product" />
                </div>
                <p v-else class="text-nike-gray">No products found.</p>

                <Paginator
                    v-if="pagination.total > pagination.per_page"
                    class="mt-8"
                    :rows="pagination.per_page"
                    :total-records="pagination.total"
                    :first="(pagination.current_page - 1) * pagination.per_page"
                    @page="onPage"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Skeleton from 'primevue/skeleton';
import Paginator from 'primevue/paginator';
import api from '@/services/api';
import ProductCard from '@/components/ProductCard.vue';

const route = useRoute();
const products = ref([]);
const loading = ref(true);
const pagination = ref({ current_page: 1, per_page: 12, total: 0 });

const filters = ref({
    search: '',
    gender: route.query.gender || null,
    featured: route.query.featured === '1',
});

const genderOptions = [
    { label: 'Men', value: 'men' },
    { label: 'Women', value: 'women' },
    { label: 'Kids', value: 'kids' },
    { label: 'Unisex', value: 'unisex' },
];

async function loadProducts(page = 1) {
    loading.value = true;
    try {
        const params = {
            page,
            per_page: 12,
            search: filters.value.search || undefined,
            gender: filters.value.gender || undefined,
            featured: filters.value.featured ? 1 : undefined,
            category: route.query.category || undefined,
        };
        const { data } = await api.get('/products', { params });
        products.value = data.data;
        pagination.value = {
            current_page: data.current_page,
            per_page: data.per_page,
            total: data.total,
        };
    } finally {
        loading.value = false;
    }
}

function onPage(event) {
    loadProducts(event.page + 1);
}

watch(() => route.query, () => {
    filters.value.gender = route.query.gender || null;
    filters.value.featured = route.query.featured === '1';
    loadProducts();
}, { deep: true });

onMounted(() => loadProducts());
</script>
