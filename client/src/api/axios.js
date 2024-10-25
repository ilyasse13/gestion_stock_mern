import axios from 'axios';

// Create an axios instance
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL, // Use environment variable for backend URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Ensures cookies like the refresh token are sent with requests
});


export default axiosClient;
