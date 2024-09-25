import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/Authcontext'

const GuestLayout = () => {
  const {token}=useStateContext()
  if(token){
    return <Navigate to="/Dashboard"/>
  }
  return (
  
  <section className="">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <img
  alt="Login Image"
  src="loginimg.jpg"
  className="absolute inset-0 h-full w-full object-cover object-center"
/>

      </aside>
  
      <main
        className="flex items-center justify-center py-8  lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
       <Outlet/>
      </main>
    </div>
  </section>
  )
}

export default GuestLayout