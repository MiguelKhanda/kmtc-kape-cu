import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL || 'https://kmtc-cu-backend.vercel.app',
    withCredentials: true,
    headers: {
        'Content-Type':'application/json',
    }
})


export default api