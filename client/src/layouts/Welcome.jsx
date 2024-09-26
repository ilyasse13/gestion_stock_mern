import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useStateContext } from '../contexts/Authcontext'

const Welcome = () => {
  const {token}=useStateContext()
  if(token){
    return <Navigate to="/Dashboard"/>
  }
  return (
    
    <div >
        <Header/>
        <div className='mt-12'>
        <Outlet/>
        </div>
        
        
        <Footer/>
   </div>
  )
}

export default Welcome