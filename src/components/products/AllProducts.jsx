import React from 'react'
import { useParams } from 'react-router-dom'

const AllProducts = () => {
  const {category} = useParams()
  return (
    <div>
       products :{category}
    </div>
  )
}

export default AllProducts
