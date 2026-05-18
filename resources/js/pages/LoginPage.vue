<template>
    <div class="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-16">
        <h1 class="text-2xl font-medium">Sign In</h1>
        <form class="mt-8 space-y-4" @submit.prevent="submit">
            <div>
                <label class="text-sm font-medium">Email</label>
                <InputText v-model="form.email" type="email" class="mt-1 w-full" required />
            </div>
            <div>
                <label class="text-sm font-medium">Password</label>
                <Password v-model="form.password" class="mt-1 w-full" :feedback="false" toggle-mask input-class="w-full" />
            </div>
            <Button type="submit" label="Sign In" class="btn-nike w-full" :loading="loading" />
        </form>
        <p class="mt-6 text-center text-sm text-nike-gray">
            New to Nike?
            <RouterLink to="/register" class="font-medium text-nike-black underline">Join Us</RouterLink>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { useAuthStore } from '@/stores/auth';
import { useCartStore } from '@/stores/cart';

const route = useRoute();
const router = useRouter();
const toast = useToast();
const auth = useAuthStore();
const cart = useCartStore();

const loading = ref(false);
const form = ref({ email: '', password: '' });

async function submit() {
    loading.value = true;
    try {
        await auth.login(form.value);
        await cart.fetchCart();
        router.push(route.query.redirect || '/');
    } catch (e) {
        toast.add({ severity: 'error', summary: e.response?.data?.message || 'Login failed', life: 4000 });
    } finally {
        loading.value = false;
    }
}
</script>
