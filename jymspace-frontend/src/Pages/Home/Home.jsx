import React from 'react'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Reasons from '../../components/Reasons/Reasons'
import Plans from '../../components/Plans/Plans'
import { Footer } from '../../components'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Reasons />
      <Plans />
      <Footer />
    </div>
  )
}

export default Home
