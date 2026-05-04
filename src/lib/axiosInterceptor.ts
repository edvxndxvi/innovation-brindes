import axios from 'axios';
import { cookies } from 'next/headers';

const api = axios.create();

api.interceptors.request.use(async (config) => {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default api;