import React, { useEffect, useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useThemeContext } from '../contexts/ThemeContext';

const Header = () => {
    const { isDarkMode, toggleTheme } = useThemeContext();
    return (

        <header id='lhead' className="flex welcome justify-between mt-3 items-center px-10 border border-black/20  dark:border-white/30 mx-1" >
            <div className="text-2xl font-bold">
                <img src="logo-removebg.png" className='w-16' alt="" />
            </div>
            <nav>
                <ul className="flex space-x-6">
                    <li><Link to="/" className={`${isDarkMode ? 'text-gray-200': 'text-gray-800'} font-semibold underline-animation`}>Home</Link></li>
                    <li><Link to="/Features" className={`${isDarkMode ? 'text-gray-200': 'text-gray-800'} font-semibold underline-animation`}>Features</Link></li>
                    <li><Link to="/Pricing" className={`${isDarkMode ? 'text-gray-200': 'text-gray-800'} font-semibold underline-animation`}>Pricing</Link></li>
                    <li><Link to="/Support" className={`${isDarkMode ? 'text-gray-200': 'text-gray-800'} font-semibold underline-animation`}>Support</Link></li>
                    <li><Link to="/About" className={`${isDarkMode ? 'text-gray-200': 'text-gray-800'} font-semibold underline-animation`}>About</Link></li>
                </ul>


            </nav>
            <div>
               
            <button
  onClick={toggleTheme}
  className={`focus:outline-none p-2 rounded-3xl transition-colors duration-300 ease-in-out ${
    isDarkMode ? ' bg-yellow-500' : 'bg-slate-200'
  }`}
>
  {isDarkMode ? (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 transition-opacity duration-300 text-black opacity-100"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
  </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 transition-opacity text-black duration-300 opacity-100"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
    
  )}
</button>



               
            </div>
            <div className="">
                <Link to={'/login'}>
                    <button id='loginbtn' >
                        <span>Log in</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 74 74"
                            height="34"
                            width="34"
                        >
                            <circle stroke-width="3" stroke={isDarkMode ? 'black' : 'white'} r="35.5" cy="37" cx="37"></circle>
                            <path
                                fill={isDarkMode ? 'black' : 'white'}
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                            ></path>
                        </svg>
                    </button>

                </Link>


            </div>
        </header>

    )
}

export default Header