<template>
    <header class="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <RouterLink to="/" class="text-2xl font-bold tracking-tighter">
                NIKE
            </RouterLink>

            <nav class="hidden items-center gap-8 md:flex">
                <RouterLink
                    v-for="link in navLinks"
                    :key="link.to"
                    :to="link.to"
                    class="text-sm font-medium hover:text-nike-gray"
                >
                    {{ link.label }}
                </RouterLink>
            </nav>

            <div class="flex items-center gap-4">
                <RouterLink to="/shop" class="hidden sm:block">
                    <i class="pi pi-search text-lg" />
                </RouterLink>

                <RouterLink
                    v-if="auth.isAuthenticated"
                    to="/cart"
                    class="relative"
                >
                    <i class="pi pi-shopping-bag text-lg" />
                    <span
                        v-if="cart.count > 0"
                        class="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-nike-black text-[10px] text-white"
                    >
                        {{ cart.count }}
                    </span>
                </RouterLink>

                <template v-if="auth.isAuthenticated">
                    <RouterLink
                        v-if="auth.isAdmin"
                        to="/admin"
                        class="hidden text-sm font-medium sm:block"
                    >
                        Admin
                    </RouterLink>
                    <Button
                        label="Sign Out"
                        text
                        size="small"
                        @click="handleLogout"
                    />
                </template>
                <template v-else>
                    <RouterLink to="/login" class="text-sm font-medium">
                        Sign In
                    </RouterLink>
                    <RouterLink to="/register" class="btn-nike hidden py-2 text-xs sm:inline-flex">
                        Join Us
                    </RouterLink>
                </template>
            </div>
        </div>
    </header>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import { useAuthStore } from '@/stores/auth';
import { useCartStore } from '@/stores/cart';

const auth = useAuthStore();
const cart = useCartStore();
const router = useRouter();

const navLinks = [
    { label: 'New & Featured', to: { name: 'shop', query: { featured: 1 } } },
    { label: 'Men', to: { name: 'shop', query: { gender: 'men' } } },
    { label: 'Women', to: { name: 'shop', query: { gender: 'women' } } },
    { label: 'Kids', to: { name: 'shop', query: { gender: 'kids' } } },
    { label: 'Sale', to: { name: 'shop' } },
];

onMounted(() => {
    if (auth.isAuthenticated) {
        cart.fetchCart();
    }
});

async function handleLogout() {
    await auth.logout();
    cart.items = [];
    cart.count = 0;
    router.push({ name: 'home' });
}
</script>
