import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import api from '@/services/api';
import { useAuthStore } from './auth';

export const useCartStore = defineStore('cart', () => {
    const items = ref([]);
    const subtotal = ref(0);
    const count = ref(0);
    const loading = ref(false);

    const isEmpty = computed(() => items.value.length === 0);

    async function fetchCart() {
        const auth = useAuthStore();
        if (!auth.isAuthenticated) {
            items.value = [];
            subtotal.value = 0;
            count.value = 0;
            return;
        }

        loading.value = true;
        try {
            const { data } = await api.get('/cart');
            items.value = data.items;
            subtotal.value = data.subtotal;
            count.value = data.count;
        } finally {
            loading.value = false;
        }
    }

    async function addToCart(productId, quantity = 1, size = null) {
        await api.post('/cart', { product_id: productId, quantity, size });
        await fetchCart();
    }

    async function updateQuantity(cartItemId, quantity) {
        await api.patch(`/cart/${cartItemId}`, { quantity });
        await fetchCart();
    }

    async function removeItem(cartItemId) {
        await api.delete(`/cart/${cartItemId}`);
        await fetchCart();
    }

    return {
        items,
        subtotal,
        count,
        loading,
        isEmpty,
        fetchCart,
        addToCart,
        updateQuantity,
        removeItem,
    };
});
