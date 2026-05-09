import api from '@/lib/axios'

export const authService = {
    getCsrfToken: async () => {
        return await api.get('api/csrf-cookie/');
    },
    registerStudent:async(formData: any) => {
        return await api.post('/api/users/',formData);
    }
}