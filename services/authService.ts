import api from '@/lib/axios'

export const authService = {
    registerStudent:async(formData: any) => {
        return await api.post('/api/users/',formData);
    }
}