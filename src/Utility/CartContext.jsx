import { createContext, useContext, useEffect, useState } from "react";
import { getStoredProducts, getStoredWhishList, removeProduct, removeWishList, reset, setProducts, setWishList } from "./utility";


const CartContext = createContext() 

const CartProvider =({children})=>{
    const [cartItems,setCartItems] = useState(getStoredProducts())
    const [wishListItems,setWishListItems] = useState(getStoredWhishList())
    // add-to-cart-function
    const addToCart = (id)=>{
        setProducts(id)
        setCartItems(getStoredProducts())
    }
    // add-to-wishList-function
    const addToWishList =(id)=>{
        setWishList(id)
        setWishListItems(getStoredWhishList())
    }
    // remove-product-from-wishList
    const removedWishListItems =(id)=>{
        removeWishList(id)
        setWishListItems(getStoredWhishList())
    }

    // remove-product-from-cart
    const removedProducts =(id)=>{
        removeProduct(id)
        setCartItems(getStoredProducts())
    }
    

    // reset-function
    const resetAll =()=>{
        reset()
        setCartItems(getStoredProducts())
    }
    
 
    useEffect(()=>{
        localStorage.setItem('products', JSON.stringify(cartItems))
        localStorage.setItem('wishList',JSON.stringify(wishListItems))
    },[cartItems,wishListItems])
    
    return (
        <CartContext.Provider value={{
            addToCart,
            cartItems,
            addToWishList,
            wishListItems,
            removedWishListItems,
            removedProducts,
            setWishListItems,
            setCartItems,
            resetAll
            }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = ()=> useContext(CartContext) 
export default CartProvider
