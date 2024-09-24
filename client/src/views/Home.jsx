import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import MainFeatures from '../components/MainFeatures'
import Testimonials from '../components/Testimonials'
import Company from '../components/Company'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Stats/>
      <Company/>
      <MainFeatures/>
      <Testimonials/>
    </div>
  )
}

export default Home