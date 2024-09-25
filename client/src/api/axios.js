import axios from 'axios';

// Create an instance of axios
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL, // Get base URL from environment variable
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
axiosClient.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('ACCESS_TOKEN'); // Get token from session storage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Set the token in the headers
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Response Interceptor
axiosClient.interceptors.response.use((response) => {
    return response; // Simply return the response for now
}, (error) => {
    // Handle errors globally here (optional)
    return Promise.reject(error);
});

// Export the axios instance
export default axiosClient;
