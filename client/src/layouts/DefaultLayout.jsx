import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/Authcontext'

const DefaultLayout = () => {
  const {token,user} =useStateContext()
  if(!token) {
    return <Navigate to="/login" replace={true} />
  }
  return (
 <div>
  <Outlet />
 </div>
  )
}

export default DefaultLayout