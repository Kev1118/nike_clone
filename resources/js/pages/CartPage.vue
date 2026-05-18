<template>
    <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 class="section-title">Bag</h1>

        <div v-if="cart.loading" class="mt-8">
            <Skeleton height="120px" class="mb-4" />
            <Skeleton height="120px" />
        </div>

        <div v-else-if="!cart.isEmpty" class="mt-8 grid gap-10 lg:grid-cols-3">
            <div class="space-y-4 lg:col-span-2">
                <div
                    v-for="item in cart.items"
                    :key="item.id"
                    class="flex gap-4 rounded-xl border border-neutral-200 p-4"
                >
                    <img
                        :src="item.product?.image || placeholder"
                        :alt="item.product?.name"
                        class="h-24 w-24 rounded-lg object-cover"
                    />
                    <div class="flex flex-1 flex-col justify-between">
                        <div>
                            <h3 class="font-medium">{{ item.product?.name }}</h3>
                            <p class="text-sm text-nike-gray">Size: {{ item.size || '—' }}</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <InputNumber
                                v-model="item.quantity"
                                :min="1"
                                :max="item.product?.stock"
                                show-buttons
                                @update:model-value="(v) => updateQty(item.id, v)"
                            />
                            <p class="font-medium">${{ lineTotal(item) }}</p>
                        </div>
                    </div>
                    <Button icon="pi pi-trash" text severity="danger" @click="cart.removeItem(item.id)" />
                </div>
            </div>

            <div class="rounded-xl bg-nike-light p-6">
                <h2 class="text-lg font-medium">Summary</h2>
                <div class="mt-4 space-y-2 text-sm">
                    <div class="flex justify-between">
                        <span>Subtotal</span>
                        <span>${{ cart.subtotal.toFixed(2) }}</span>
                    </div>
                    <div class="flex justify-between text-nike-gray">
                        <span>Shipping</span>
                        <span>{{ cart.subtotal >= 150 ? 'Free' : '$8.99' }}</span>
                    </div>
                </div>
                <RouterLink to="/checkout" class="btn-nike mt-6 w-full text-center">
                    Checkout
                </RouterLink>
            </div>
        </div>

        <div v-else class="mt-16 text-center">
            <p class="text-nike-gray">Your bag is empty.</p>
            <RouterLink to="/shop" class="btn-nike mt-6 inline-flex">Continue Shopping</RouterLink>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Skeleton from 'primevue/skeleton';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import { useCartStore } from '@/stores/cart';

const cart = useCartStore();
const placeholder = 'https://placehold.co/200x200/f5f5f5/111111?text=Nike';

onMounted(() => cart.fetchCart());

function lineTotal(item) {
    return (item.product?.price * item.quantity).toFixed(2);
}

function updateQty(id, qty) {
    if (qty) cart.updateQuantity(id, qty);
}
</script>
