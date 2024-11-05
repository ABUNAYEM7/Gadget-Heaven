import React, { useEffect, useState } from 'react'
import { useCart } from '../Utility/CartContext'
import { IoTrashBinSharp } from "react-icons/io5";
import { useLoaderData } from 'react-router-dom'

const CartDashboard = () => {
    const [storedCart,setStoreCart] = useState([]) 
    const {cartItems} =  useCart()
    const data = useLoaderData()

    useEffect(()=>{
        const storedCart = [...data].filter(element=> cartItems.includes(element.id))
        setStoreCart(storedCart)
    },[])
  return (
    <div className='max-w-screen-xl mx-auto my-6 md:p-4 border-2'>
      {/* button-container */}
      <div className='flex flex-col md:flex-row items-center md:justify-between  gap-4 '>
            <div>
            <h3 className='text-3xl font-bold'>Cart</h3>
            </div>
            <div className='flex items-center justify-between gap-2 w-full'>
                <h3 className='text-3xl font-bold'>Total Cost : 0</h3>
               <div className='space-x-2'>
               <button className='btn bg-transparent text-highlight border-highlight rounded-2xl'>
                Sort By Price
                </button>
                <button className='btn md:px-4 bg-highlight text-white hover:text-highlight rounded-2xl'>
                    Purchase
                    </button>
               </div>
            </div>
      </div>
      {/* cards-container */}
      <div className='flex flex-col gap-5 my-6'>
        {storedCart.map(cart=> 
            <div
             key={cart.id}
             className='flex md:flex-row flex-col  justify-between items-center gap-5 p-4 shadow-2xl'
              > 
              {/* card-info-container */}
                <div className='flex md:flex-row flex-col items-center gap-2'>
                        <div className='w-40 h-40 '>
                            <img className='w-full rounded-xl' src={cart.image} alt={cart.title}/>
                        </div>
                        <div className='space-y-3 flex flex-col items-center md:items-start'>
                            <h3 className='text-2xl font-bold text-dark1'>
                            {cart.title}
                            </h3>
                            <p className='font-medium text-secondary w-2/3 text-center md:text-start'>
                            {cart.description}
                            </p>
                            <p className='text-xl font-medium text-secondary'>
                            Price : {cart.price}$
                            </p>
                        </div>
                </div>
                {/* button-container */}
                <div>
                    <button className='btn btn-error text-white p-3 rounded-full'>
                    <IoTrashBinSharp size={20}/>
                    </button>
                </div>
              </div>
        )}
      </div>
    </div>
  )
}

export default CartDashboard
