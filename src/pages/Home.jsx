import React from 'react'
import Hero from '../components/Hero'
import Floats from '../components/Floats'
import CategoriesContainer from '../components/CategoriesContainer'
import { Outlet } from 'react-router-dom'
import UseTitle from '../hooks/useTitle'

const Home = () => {
  UseTitle ('Gadget Heaven ||Home')
  return (
    <div>
      {/* hero-section */}
      <section className='max-w-screen-2xl mx-auto bg-highlight'>
      <Hero/>
      </section>
      {/* float-section */}
      <section className=' my-8 min-h-[400px] '>
        <Floats/>
      </section>
      {/* category-container */}
      <section className='max-w-screen-xl mx-auto p-4 my-8 bg-[#f7f7f7] rounded-xl'>
      <div>
        <h3 className='text-2xl md:text-4xl font-bold text-center text-primary'>Explore Cutting-Edge Gadgets</h3>
      </div>
      {/* categories-product-container */}
      <div className='flex gap-3 md:flex-row flex-col'>
        {/* category-container */}
      <div className='w-full md:w-1/5'>
      <CategoriesContainer/>
      </div>
      {/* products-container */}
      <div className='w-full md:w-4/5'>
            <Outlet/>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Home
