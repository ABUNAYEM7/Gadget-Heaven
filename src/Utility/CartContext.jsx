import { Children, createContext, useContext, useEffect, useState } from "react";
import { getStoredProducts, getStoredWhishList, setProducts, setWishList } from "./utility";

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

    useEffect(()=>{
        localStorage.setItem('products', JSON.stringify(cartItems))
        localStorage.setItem('wishList',JSON.stringify(wishListItems))
    },[cartItems,wishListItems])
    
    return (
        <CartContext.Provider value={{addToCart,cartItems,addToWishList,wishListItems}}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = ()=> useContext(CartContext) 
export default CartProvider
