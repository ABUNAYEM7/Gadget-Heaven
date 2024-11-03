import React from 'react'
import Hero from '../components/Hero'
import Floats from '../components/Floats'

const Home = () => {
  return (
    <div>
      {/* hero-section */}
      <section className='max-w-screen-2xl mx-auto bg-highlight'>
      <Hero/>
      </section>
      {/* float-section */}
      <section className='my-8 min-h-[400px]'>
        <Floats/>
      </section>
    </div>
  )
}

export default Home
