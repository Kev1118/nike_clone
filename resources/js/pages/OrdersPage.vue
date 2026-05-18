<template>
    <div class="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 class="section-title">Your Orders</h1>

        <div v-if="loading" class="mt-8 space-y-4">
            <Skeleton height="100px" />
            <Skeleton height="100px" />
        </div>

        <div v-else-if="orders.length" class="mt-8 space-y-4">
            <div
                v-for="order in orders"
                :key="order.id"
                class="rounded-xl border border-neutral-200 p-6"
            >
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <p class="font-medium">Order #{{ order.id }}</p>
                    <Tag :value="order.status" :severity="statusSeverity(order.status)" />
                </div>
                <p class="mt-2 text-sm text-nike-gray">
                    {{ formatDate(order.created_at) }} · {{ order.items?.length }} items · ${{ Number(order.total).toFixed(2) }}
                </p>
            </div>
        </div>

        <p v-else class="mt-8 text-nike-gray">No orders yet.</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Skeleton from 'primevue/skeleton';
import Tag from 'primevue/tag';
import api from '@/services/api';

const orders = ref([]);
const loading = ref(true);

onMounted(async () => {
    const { data } = await api.get('/orders');
    orders.value = data.data;
    loading.value = false;
});

function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

function statusSeverity(status) {
    const map = { pending: 'warn', processing: 'info', shipped: 'info', delivered: 'success', cancelled: 'danger' };
    return map[status] || 'secondary';
}
</script>
