<template>
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="flex gap-8">
            <aside class="hidden w-48 shrink-0 md:block">
                <h2 class="text-lg font-bold">Admin</h2>
                <nav class="mt-4 space-y-2">
                    <RouterLink
                        v-for="link in links"
                        :key="link.name"
                        :to="{ name: link.name }"
                        class="block rounded-lg px-3 py-2 text-sm hover:bg-nike-light"
                        active-class="bg-nike-black text-white hover:bg-nike-black"
                    >
                        {{ link.label }}
                    </RouterLink>
                </nav>
            </aside>
            <div class="flex-1">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>
const links = [
    { name: 'admin.dashboard', label: 'Dashboard' },
    { name: 'admin.products', label: 'Products' },
    { name: 'admin.orders', label: 'Orders' },
];
</script>
