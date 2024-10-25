import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

import Input from '../components/Input';
import { CheckIcon, CircleStackIcon, EnvelopeIcon, ExclamationCircleIcon, LockClosedIcon, SunIcon, UserIcon } from '@heroicons/react/24/outline';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import { useAuthStore } from '../store/authStore';


const Signup = () => {
  
const navigate = useNavigate();
const { signup, error, isLoading } = useAuthStore();
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
const isPasswordMismatch = formData.password !== formData.password_confirmation;
const handleSubmit = async (e) => {
  e.preventDefault();

  // Client-side validation (optional)
  if (formData.password !== formData.password_confirmation) {
    setErrorMessage('Passwords do not match.');
    return;
  }

  try {
    await signup(formData.email, formData.password, formData.name,formData.stockName);
			navigate("/verify-email");
  } catch (error) {
   
  } finally {
   
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
          <Input
            type="text"
            icon={UserIcon}
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
          <Input
            type="email"
            id="email"
            name="email"
            icon={EnvelopeIcon}
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
          <Input
            type="password"
            id="password"
            name="password"
            icon={LockClosedIcon}
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
          <Input
            type="password"
            icon={LockClosedIcon}
            id="password_confirmation"
            name="password_confirmation"
            errorIcon={ExclamationCircleIcon}
            placeholder="Confirm your password"
            isError={isPasswordMismatch} // Check if there's a mismatch
            value={formData.password_confirmation}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 focus:border-customRed-500 focus:outline-none focus:ring-2 ring-customRed-200 bg-white text-sm text-gray-700 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 px-2"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="stockName" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Stock Name
          </label>
          <Input
            type="text"
            id="stockName"
            icon={CircleStackIcon}
            name="stockName"
            placeholder="Enter a name for your stock"
            value={formData.stockName}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 focus:border-customRed-500 focus:outline-none focus:ring-2 ring-customRed-200 bg-white text-sm text-gray-700 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 py-2 px-2"
          />
        </div>

     
          
        <div className="col-span-6 flex flex-col items-center gap-4">
  {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
  
  <PasswordStrengthMeter password={formData.password} />

  <motion.button
    className='mt-5 w-1/2 py-3 px-4 bg-gradient-to-r from-customRed-400 to-customRed-500 text-white 
    font-bold rounded-lg shadow-lg hover:from-customRed-400
    hover:to-customRed-500 focus:outline-none focus:ring-2 focus:ring-customRed-500 focus:ring-offset-2
    focus:ring-offset-gray-900 transition duration-200'
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    type='submit'
    disabled={isLoading}
  >
    {isLoading ? <SunIcon className='animate-spin mx-auto w-7'  /> : "Sign Up"}
  </motion.button>
</div>

        
      </form>
    </div>
  );
};

export default Signup;
