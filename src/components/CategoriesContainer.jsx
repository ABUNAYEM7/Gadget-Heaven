import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const CategoriesContainer = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data.categories))
    },[])
  return (
    <div>
      <div className='my-4'>
            {/* category-container */} 
            <div className='border-2 p-4 bg-white rounded-xl'>
            <div className='flex flex-row  flex-wrap md:flex-nowrap justify-between  md:flex-col md:gap-4 gap-2 '>
            {categories.map(category=>
            <NavLink
            key={category.id}
            to={`home/${category.category}`}
            className={({isActive}) => `btn  rounded-3xl px-7 flex-grow ${isActive ? 'border-2 border-purple-500' : ''}`}>
                    {category.category}
            </NavLink> )}
            </div>
            </div>
      </div>
    </div>
  )
}

export default CategoriesContainer
