<template>
    <div class="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-16">
        <h1 class="text-2xl font-medium">Become a Nike Member</h1>
        <form class="mt-8 space-y-4" @submit.prevent="submit">
            <div>
                <label class="text-sm font-medium">Name</label>
                <InputText v-model="form.name" class="mt-1 w-full" required />
            </div>
            <div>
                <label class="text-sm font-medium">Email</label>
                <InputText v-model="form.email" type="email" class="mt-1 w-full" required />
            </div>
            <div>
                <label class="text-sm font-medium">Password</label>
                <Password v-model="form.password" class="mt-1 w-full" toggle-mask input-class="w-full" />
            </div>
            <div>
                <label class="text-sm font-medium">Confirm Password</label>
                <Password v-model="form.password_confirmation" class="mt-1 w-full" :feedback="false" toggle-mask input-class="w-full" />
            </div>
            <Button type="submit" label="Create Account" class="btn-nike w-full" :loading="loading" />
        </form>
        <p class="mt-6 text-center text-sm text-nike-gray">
            Already a member?
            <RouterLink to="/login" class="font-medium text-nike-black underline">Sign In</RouterLink>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const toast = useToast();
const auth = useAuthStore();
const loading = ref(false);

const form = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

async function submit() {
    loading.value = true;
    try {
        await auth.register(form.value);
        router.push('/');
    } catch (e) {
        const errors = e.response?.data?.errors;
        const msg = errors ? Object.values(errors).flat().join(' ') : 'Registration failed';
        toast.add({ severity: 'error', summary: msg, life: 4000 });
    } finally {
        loading.value = false;
    }
}
</script>
