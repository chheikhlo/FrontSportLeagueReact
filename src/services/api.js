import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.50.27:9000',
});

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export default api;
