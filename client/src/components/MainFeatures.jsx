import React from 'react'
import { Link } from 'react-router-dom'

const MainFeatures = () => {
  return (
    <section className="">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl dark:text-white">Kickstart your marketing</h2>
  
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
          nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
        </p>
      </div>
  
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
  className="block rounded-xl border border-gray-800 dark:border-gray-300 p-8 transition duration-300 ease-in-out transform hover:scale-105"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-10 text-customRed-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  </svg>

  <h2 className="mt-4 text-xl font-bold dark:text-white">User Management</h2>

  <p className="mt-1 text-sm dark:text-gray-300 text-gray-700">
    Manage users effortlessly with our app. Assign roles, track activity, and ensure a smooth experience for all users in your environment.
  </p>
</div>

<div
  className="block rounded-xl border border-gray-800 dark:border-gray-300 p-8 transition duration-300 ease-in-out transform hover:scale-105"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-10 text-customRed-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  </svg>

  <h2 className="mt-4 text-xl font-bold dark:text-white">Environment Setup</h2>

  <p className="mt-1 text-sm dark:text-gray-300 text-gray-700">
    Quickly set up and customize your environment. Organize product stock, invite users, and manage your workspace with ease.
  </p>
</div>

  
        <div
  className="block rounded-xl border border-gray-800 dark:border-gray-300 p-8 transition duration-300 ease-in-out transform hover:scale-105"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-10 text-customRed-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 14l9-5-9-5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  </svg>

  <h2 className="mt-4 text-xl font-bold dark:text-white">Inventory Management</h2>

  <p className="mt-1 text-sm dark:text-gray-300 text-gray-700">
    Easily track stock levels, manage product information, and reduce errors in your inventory. Stay
    informed in real-time with our intuitive stock management tools.
  </p>
</div>

        
      </div>
  
      <div className="mt-12 text-center">
        <Link 
          to="/Features"
          className="inline-block rounded bg-customRed-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-customRed-500 focus:outline-none f"
        >
          discover all features
        </Link>
      </div>
    </div>
  </section>
  )
}

export default MainFeatures