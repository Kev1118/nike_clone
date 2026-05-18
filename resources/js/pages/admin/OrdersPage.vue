<template>
    <div>
        <h1 class="section-title">Orders</h1>
        <DataTable :value="orders" :loading="loading" class="mt-6">
            <Column field="id" header="ID" />
            <Column header="Customer">
                <template #body="{ data }">{{ data.user?.name }}</template>
            </Column>
            <Column field="status" header="Status" />
            <Column header="Total">
                <template #body="{ data }">${{ Number(data.total).toFixed(2) }}</template>
            </Column>
            <Column header="Update">
                <template #body="{ data }">
                    <Select
                        :model-value="data.status"
                        :options="statuses"
                        class="w-36"
                        @update:model-value="(v) => updateStatus(data.id, v)"
                    />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Select from 'primevue/select';
import api from '@/services/api';

const toast = useToast();
const orders = ref([]);
const loading = ref(true);
const statuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];

onMounted(load);

async function load() {
    loading.value = true;
    const { data } = await api.get('/admin/orders');
    orders.value = data.data;
    loading.value = false;
}

async function updateStatus(id, status) {
    await api.patch(`/admin/orders/${id}/status`, { status });
    toast.add({ severity: 'success', summary: 'Status updated', life: 3000 });
    await load();
}
</script>
