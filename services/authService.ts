import api from '@/lib/axios'

export const authService = {
    registerStudent:async(formData: any) => {
        const response = await api.post('/api/users/',formData);
        return response.data;
    }
}