import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const GuestLayout = () => {
 
  return (
  
  <section className="">
    
     
  
      <main
        className="flex items-center justify-center py-8  lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
       <Outlet/>
      </main>
   
  </section>
  )
}

export default GuestLayout