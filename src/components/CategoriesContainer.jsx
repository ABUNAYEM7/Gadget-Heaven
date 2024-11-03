import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const CategoriesContainer = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        axios.get('/categories.json')
        .then(data=>setCategories(data.data.categories))
    },[])
    console.log(categories)
  return (
    <div>
      <div className='my-4 flex gap-5'>
            {/* category-container */} 
            <div className='border-2 p-4 bg-white rounded-xl'>
            <div className='flex flex-col gap-4'>
            {categories.map(category=>
            <NavLink
            to={`home/${category.category}`}
             className='btn px-7 rounded-3xl'>
                    {category.category}
            </NavLink> )}
            </div>
            </div>
      </div>
    </div>
  )
}

export default CategoriesContainer
