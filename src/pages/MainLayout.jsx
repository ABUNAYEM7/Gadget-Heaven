import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar/>
      {/* dynamic layout */}
      <div className='min-h-svh[calc()]'>
        <Outlet/>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default MainLayout
