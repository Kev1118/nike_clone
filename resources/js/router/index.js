import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/HomePage.vue'),
    },
    {
        path: '/shop',
        name: 'shop',
        component: () => import('@/pages/ShopPage.vue'),
    },
    {
        path: '/product/:slug',
        name: 'product',
        component: () => import('@/pages/ProductPage.vue'),
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('@/pages/CartPage.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: () => import('@/pages/CheckoutPage.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/orders',
        name: 'orders',
        component: () => import('@/pages/OrdersPage.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: { guest: true },
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/pages/RegisterPage.vue'),
        meta: { guest: true },
    },
    {
        path: '/admin',
        component: () => import('@/pages/admin/AdminLayout.vue'),
        meta: { requiresAuth: true, requiresAdmin: true },
        children: [
            {
                path: '',
                name: 'admin.dashboard',
                component: () => import('@/pages/admin/DashboardPage.vue'),
            },
            {
                path: 'products',
                name: 'admin.products',
                component: () => import('@/pages/admin/ProductsPage.vue'),
            },
            {
                path: 'orders',
                name: 'admin.orders',
                component: () => import('@/pages/admin/OrdersPage.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

router.beforeEach(async (to, from, next) => {
    const auth = useAuthStore();

    if (!auth.initialized) {
        await auth.initialize();
    }

    if (to.meta.requiresAuth && !auth.isAuthenticated) {
        return next({ name: 'login', query: { redirect: to.fullPath } });
    }

    if (to.meta.guest && auth.isAuthenticated) {
        return next({ name: 'home' });
    }

    if (to.meta.requiresAdmin && !auth.isAdmin) {
        return next({ name: 'home' });
    }

    next();
});

export default router;
