// src/api/api.js

// Ensure to set this in your .env file

// Define your API endpoints
export const API_ENDPOINTS = {
    LOGIN: '/auth/login', // Endpoint for user login
    REGISTER: '/auth/register', // Endpoint for user registration
   LOGOUT: '/auth/logout', // Endpoint for user log
   VERIFY_EMAIL: '/auth/verify-email', // Endpoint for user
   CHECK_AUTH:'/auth/check-auth',
   FORGOT_PASSWORD:'/auth/forgot-password',
    // Add more endpoints as needed
};
