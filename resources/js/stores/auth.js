import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import api from '@/services/api';

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null);
    const token = ref(localStorage.getItem('token'));
    const initialized = ref(false);

    const isAuthenticated = computed(() => !!token.value && !!user.value);
    const isAdmin = computed(() => user.value?.roles?.includes('admin') ?? false);

    async function initialize() {
        if (!token.value) {
            initialized.value = true;
            return;
        }

        try {
            const { data } = await api.get('/user');
            user.value = data.user;
        } catch {
            logout();
        } finally {
            initialized.value = true;
        }
    }

    async function login(credentials) {
        const { data } = await api.post('/login', credentials);
        token.value = data.token;
        user.value = data.user;
        localStorage.setItem('token', data.token);
        return data;
    }

    async function register(payload) {
        const { data } = await api.post('/register', payload);
        token.value = data.token;
        user.value = data.user;
        localStorage.setItem('token', data.token);
        return data;
    }

    async function logout() {
        try {
            if (token.value) {
                await api.post('/logout');
            }
        } catch {
            // ignore
        } finally {
            token.value = null;
            user.value = null;
            localStorage.removeItem('token');
        }
    }

    return {
        user,
        token,
        initialized,
        isAuthenticated,
        isAdmin,
        initialize,
        login,
        register,
        logout,
    };
});
