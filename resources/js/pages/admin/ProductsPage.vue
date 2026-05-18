<template>
    <div>
        <div class="flex items-center justify-between">
            <h1 class="section-title">Products</h1>
            <Button label="Add Product" icon="pi pi-plus" @click="openDialog()" />
        </div>

        <DataTable :value="products" :loading="loading" class="mt-6">
            <Column field="name" header="Name" />
            <Column field="price" header="Price">
                <template #body="{ data }">${{ Number(data.price).toFixed(2) }}</template>
            </Column>
            <Column field="stock" header="Stock" />
            <Column field="gender" header="Gender" />
            <Column header="Actions">
                <template #body="{ data }">
                    <Button icon="pi pi-pencil" text @click="openDialog(data)" />
                    <Button icon="pi pi-trash" text severity="danger" @click="remove(data)" />
                </template>
            </Column>
        </DataTable>

        <Dialog v-model:visible="dialogVisible" :header="editing ? 'Edit Product' : 'New Product'" modal class="w-full max-w-lg">
            <form class="space-y-4" @submit.prevent="save">
                <div>
                    <label class="text-sm">Name</label>
                    <InputText v-model="form.name" class="w-full" required />
                </div>
                <div>
                    <label class="text-sm">Category</label>
                    <Select v-model="form.category_id" :options="categories" option-label="name" option-value="id" class="w-full" />
                </div>
                <div>
                    <label class="text-sm">Price</label>
                    <InputNumber v-model="form.price" mode="currency" currency="USD" class="w-full" />
                </div>
                <div>
                    <label class="text-sm">Stock</label>
                    <InputNumber v-model="form.stock" class="w-full" />
                </div>
                <div>
                    <label class="text-sm">Gender</label>
                    <Select v-model="form.gender" :options="genders" class="w-full" />
                </div>
                <div>
                    <label class="text-sm">Image URL</label>
                    <InputText v-model="form.image" class="w-full" />
                </div>
                <div class="flex items-center gap-2">
                    <Checkbox v-model="form.featured" binary input-id="feat" />
                    <label for="feat">Featured</label>
                </div>
                <Button type="submit" label="Save" :loading="saving" />
            </form>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import api from '@/services/api';

const toast = useToast();
const products = ref([]);
const categories = ref([]);
const loading = ref(true);
const dialogVisible = ref(false);
const editing = ref(null);
const saving = ref(false);
const genders = ['men', 'women', 'unisex', 'kids'];

const form = ref({
    name: '',
    category_id: null,
    price: 0,
    stock: 0,
    gender: 'unisex',
    image: '',
    featured: false,
    description: '',
});

onMounted(async () => {
    await Promise.all([loadProducts(), loadCategories()]);
});

async function loadProducts() {
    loading.value = true;
    const { data } = await api.get('/products', { params: { per_page: 100 } });
    products.value = data.data;
    loading.value = false;
}

async function loadCategories() {
    const { data } = await api.get('/categories');
    categories.value = data;
}

function openDialog(product = null) {
    editing.value = product;
    form.value = product
        ? { ...product, category_id: product.category_id }
        : { name: '', category_id: categories.value[0]?.id, price: 0, stock: 0, gender: 'unisex', image: '', featured: false, description: '' };
    dialogVisible.value = true;
}

async function save() {
    saving.value = true;
    try {
        if (editing.value) {
            await api.put(`/admin/products/${editing.value.id}`, form.value);
        } else {
            await api.post('/admin/products', form.value);
        }
        dialogVisible.value = false;
        await loadProducts();
        toast.add({ severity: 'success', summary: 'Saved', life: 3000 });
    } catch (e) {
        toast.add({ severity: 'error', summary: 'Save failed', life: 4000 });
    } finally {
        saving.value = false;
    }
}

async function remove(product) {
    if (!confirm('Delete this product?')) return;
    await api.delete(`/admin/products/${product.id}`);
    await loadProducts();
}
</script>
