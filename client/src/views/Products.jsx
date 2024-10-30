import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { useProductStore } from '../store/ProductStore'
import { useAuthStore } from '../store/authStore'
import { useThemeContext } from '../contexts/ThemeContext'

const Products = () => {
  const { isDarkMode } = useThemeContext()
  const {user}=useAuthStore()
  const {products,fetchProducts,loading,error}=useProductStore()
  useEffect(()=>{
    fetchProducts(user.stock_id)
  },[user])
  console.log(products)
  return (
    <div className='bg-white dark:bg-black'>
      <header className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">Blog Posts</h1>

              <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, recusandae.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="inline-block rounded bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="font-[sans-serif] overflow-x-auto">
        <table className="min-w-full ">
          <thead className="bg-customRed-300 whitespace-nowrap">
            <tr>
              <th className="p-4 text-left text-sm font-medium text-white" />
              <th className="p-4 text-left text-sm font-medium text-white">
                Name
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Price
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Quantity
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Category
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="whitespace-nowrap">
            {products.map((product, index) => (
              <tr key={index} className="even:bg-customRed-100">
              <td className='p-4 text-sm'>
                <img src={`${import.meta.env.VITE_BACKEND_LINK}/uploads/${product.image}`} className='w-20' />
                
              </td>
              <td className="p-4 text-sm dark:text-white">
                {product.name}
              </td>
              <td className="p-4 text-sm dark:text-white">
                {product.price}$
              </td>
              <td className="p-4 text-sm dark:text-white">
                {product.quantity}
              </td>
              <td className="p-4 text-sm dark:text-white">
               {product.category}
              </td>
              <td className="p-4">
                <button onClick={()=>{window.location='/'}} className="mr-4 transition transform hover:scale-110 hover:text-green-700 duration-200">
                  <EyeIcon className="text-green-600 w-6 h-6" /> {/* Green Icon */}
                </button>
                <button onClick={()=>{window.location=`/updateProduct/${product._id}`}} className="mr-4 transition transform hover:scale-110 hover:text-blue-700 duration-200">
                  <PencilSquareIcon className="text-blue-600 w-6 h-6" /> {/* Blue Icon */}
                </button>
                <button className="mr-4 transition transform hover:scale-110 hover:text-red-700 duration-200">
                  <TrashIcon className="text-red-600 w-6 h-6" /> {/* Red Icon */}
                </button>
              </td>
            </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Products