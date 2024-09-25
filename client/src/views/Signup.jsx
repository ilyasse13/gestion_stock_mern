import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../api/axios';
import { API_ENDPOINTS } from '../api/endpoints';
import { useStateContext } from '../contexts/Authcontext';


const Signup = () => {
  const {user, token,setUser,setToken}=useStateContext()
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    stockName: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message
    setSuccessMessage(''); // Reset success message
console.log(formData.stockName)
    try {
      const response = await axiosClient.post(API_ENDPOINTS.REGISTER, formData);
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
    <div className="max-w-xl lg:max-w-3xl -mt-10">
      <Link className="text-white bg-customRed-400 w-36 rounded py-2 px-4 flex gap-3" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>
        Go Back 
        <span className="sr-only">Home</span>
      </Link>

      <h1 className="mt-5 text-2xl font-bold text-gray-900 sm:text-4xl dark:text-white">
        Join Us and Create Your Account!
      </h1>
      
      {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>} {/* Error Message */}
      {successMessage && <p className="mt-2 text-green-500">{successMessage}</p>} {/* Success Message */}

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-6 gap-4">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 focus:border-customRed-500 focus:outline-none focus:ring-2 ring-customRed-200 bg-white text-sm text-gray-700 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 px-2"
          />
        </div>

        <div className="col-span-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 focus:border-customRed-500 focus:outline-none focus:ring-2 ring-customRed-200 bg-white text-sm text-gray-700 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 px-2"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 focus:border-customRed-500 focus:outline-none focus:ring-2 ring-customRed-200 bg-white text-sm text-gray-700 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 px-2"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Password Confirmation
          </label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Confirm your password"
            value={formData.password_confirmation}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 focus:border-customRed-500 focus:outline-none focus:ring-2 ring-customRed-200 bg-white text-sm text-gray-700 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 px-2"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="stockName" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Stock Name
          </label>
          <input
            type="text"
            id="stockName"
            name="stockName"
            placeholder="Enter a name for your stock"
            value={formData.stockName}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 focus:border-customRed-500 focus:outline-none focus:ring-2 ring-customRed-200 bg-white text-sm text-gray-700 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 px-2"
          />
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <input 
            type="submit" 
            value="Create Account"
            className="inline-block shrink-0 rounded-md border border-customRed-500 bg-customRed-500 px-12 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-customRed-500 focus:outline-none focus:ring-2 focus:ring-customRed-400 active:text-customRed-400 dark:hover:bg-customRed-500 dark:hover:text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
