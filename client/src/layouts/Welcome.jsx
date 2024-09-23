import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Welcome = () => {
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