<template>
    <div>
        <h1 class="section-title">Dashboard</h1>
        <p class="mt-2 text-nike-gray">Manage products and orders for Nike Store.</p>
        <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <RouterLink to="/admin/products" class="rounded-xl bg-nike-light p-6 hover:shadow-md">
                <i class="pi pi-box text-2xl" />
                <p class="mt-2 font-medium">Products</p>
            </RouterLink>
            <RouterLink to="/admin/orders" class="rounded-xl bg-nike-light p-6 hover:shadow-md">
                <i class="pi pi-shopping-cart text-2xl" />
                <p class="mt-2 font-medium">Orders</p>
            </RouterLink>
        </div>
    </div>
</template>
