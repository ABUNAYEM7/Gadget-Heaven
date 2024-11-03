import React from 'react'
import floatImage from '../assets/banner.jpg'

const Floats = () => {
  return (
    <div className='md:relative w-11/12 lg:max-w-[1100px] lg:h-[510px]  mx-auto'>
        <div className='outline-offset-4 outline-double outline-white rounded-xl p-4  backdrop-blur-md backdrop-blur-50 lg:absolute lg:-top-60  inset-0 m-auto '>
      <div className='w-full h-full '>
        <img 
        className='h-full w-full rounded-xl'
         src={floatImage} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Floats
