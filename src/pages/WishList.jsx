import React from 'react'
import UseTitle from '../hooks/useTitle'

const WishList = () => {
  UseTitle('Gadget Heaven || WishList')
  return (
    <div className="min-h-[450px]">
      <p className="text-3xl md:text-6xl font-bold text-highlight text-center my-6">Coming Soon</p>
    </div>
  )
}

export default WishList
