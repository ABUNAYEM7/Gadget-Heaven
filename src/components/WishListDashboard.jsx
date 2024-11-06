import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useCart } from "../Utility/CartContext";
import { IoTrashBinSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const WishListDashboard = () => {
  const data = useLoaderData()
  const {wishListItems,removedWishListItems,addToCart} = useCart()
  const [storeWishList,setStoreWishList] = useState([]) 

  // filtering-data
  useEffect(()=>{
    const storeWishList = [...data].filter(element=> wishListItems.includes(element.id))
      setStoreWishList(storeWishList)
  },[data,wishListItems])

  // removeProductHandler
  const removeWishHandler =(id,massage)=>{
    removedWishListItems(id)
    const updatedProduct = storeWishList.filter(element=>element.id !== id)
    setStoreWishList(updatedProduct)
    toast.success(massage)
  }

  // cartClickHandler
  const cartClickHandler =(id,massage)=>{
    addToCart(id)
    removeWishHandler(id,massage)
  }


   {if(storeWishList.length <= 0 ) return <p className="text-3xl md:text-6xl font-bold text-highlight text-center my-10">No Product Added</p>}
  return (
    <div className="max-w-screen-xl mx-auto my-6 p-4">
      <div>
      <h3 className='text-3xl font-bold'>WishList</h3>
      </div>
      <div className='flex flex-col gap-5 my-6'>
        {storeWishList.map(cart=> 
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
                            <button
                            onClick={()=>cartClickHandler(cart.id,'Product Add To Cart')}
                             className="btn px-4 bg-highlight hover:text-highlight text-white">Add To Cart</button>
                        </div>
                </div>
                {/* button-container */}
                <div>
                    <button 
                    onClick={()=>removeWishHandler(cart.id,'Product Removed')}
                    className='btn btn-error text-white p-3 rounded-full'>
                    <IoTrashBinSharp size={20}/>
                    </button>
                </div>
              </div>
        )}
      </div>
    </div>
  );
};

export default WishListDashboard;
