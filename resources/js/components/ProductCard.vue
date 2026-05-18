<template>
    <RouterLink
        :to="{ name: 'product', params: { slug: product.slug } }"
        class="group block"
    >
        <div class="aspect-square overflow-hidden rounded-lg bg-nike-light">
            <img
                :src="product.image || placeholder"
                :alt="product.name"
                class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
        </div>
        <div class="mt-3">
            <p v-if="product.category" class="text-xs text-nike-gray">
                {{ product.category.name }}
            </p>
            <h3 class="mt-1 text-sm font-medium">{{ product.name }}</h3>
            <p class="mt-1 text-sm text-nike-gray">
                {{ product.gender }} · ${{ formatPrice(product.price) }}
            </p>
        </div>
    </RouterLink>
</template>

<script setup>
defineProps({
    product: { type: Object, required: true },
});

const placeholder = 'https://placehold.co/600x600/f5f5f5/111111?text=Nike';

function formatPrice(price) {
    return Number(price).toFixed(2);
}
</script>
