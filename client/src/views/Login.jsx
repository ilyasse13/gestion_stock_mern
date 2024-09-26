import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/Authcontext';
import { API_ENDPOINTS } from '../api/endpoints';
import axiosClient from '../api/axios';

const Login = () => {
  const {user, token,setUser,setToken}=useStateContext()
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message
    
    try {
      const response = await axiosClient.post(API_ENDPOINTS.LOGIN, formData);
      setUser(response.data.user);
      setToken(response.data.token);
      navigate('/Dashboard'); 
    } catch (error) {
      if (error.response) {
        // Set error message from response
        setErrorMessage(error.response.data.message || 'Registration failed. Please try again.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };
  return (
    <div className="max-w-lg w-full mx-auto lg:max-w-full lg:w-4/5">
      <Link className="text-white bg-customRed-400 w-36 rounded py-2 px-4 flex gap-3" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>
 go back 
  <span className="sr-only">Home</span>
</Link>

<h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
  Welcome Back! {/* Updated heading */}
</h1>

      <form onSubmit={handleSubmit} method='post' className="mt-8 space-y-6">
        <div className="w-full">
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Email
          </label>

          <input
            type="email"
            id="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-1 w-full rounded-md border border-gray-300 focus:border-customRed-500 focus:outline-none focus:ring-2 ring-customRed-200 bg-white text-sm text-gray-700 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-3 px-4"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="Password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Password
          </label>

          <input
            type="password"
            id="Password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Enter your password"
            className="mt-1 w-full rounded-md border border-gray-300 focus:border-customRed-500 focus:outline-none focus:ring-2 ring-customRed-200 bg-white text-sm text-gray-700 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-3 px-4"
          />
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <input
            type="submit"
            value="Sign in"
            className="inline-block w-full rounded-md border border-customRed-500 bg-customRed-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-customRed-500 focus:outline-none focus:ring-2 focus:ring-customRed-400 active:text-customRed-400 dark:hover:bg-customRed-500 dark:hover:text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
