import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthStore } from '../store/authStore';
import Input from '../components/Input';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';


const Login = () => {

  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Error message state
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const {login}=useAuthStore() 
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
   // Clear previous error messages

      await login(formData.email, formData.password);
      navigate('/dashboard');
   
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

<div className="flex items-center justify-center min-h-96 ">
  <form onSubmit={handleSubmit} method="post" className="s w-full max-w-md  shadow-lg rounded-md">
    <div className="w-full">
      <label
        htmlFor="Email"
        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        Email
      </label>
      <Input
        icon={EnvelopeIcon}
        type="email"
        id="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </div>

    <div className="w-full">
      <label
        htmlFor="Password"
        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        Password
      </label>
      <Input
        icon={LockClosedIcon}
        type="password"
        id="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
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

    </div>
  );
};

export default Login;
