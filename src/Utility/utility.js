const getStoredProducts = ()=>{
    const storedProductStr = localStorage.getItem('products')
    if(storedProductStr){
        const storedProducts = JSON.parse(storedProductStr)
        return storedProducts
    }
    return []
}

const setProducts = (id)=>{
    const storedProducts = getStoredProducts()
    if(storedProducts.includes(id)){
        return alert('Product already exist')
    }else{
        storedProducts.push(id)
        const storedProductStr = JSON.stringify(storedProducts)
        localStorage.setItem('products', storedProductStr)
    }
}

const removeProduct =(id)=>{
    const storedProducts = getStoredProducts()
    if(storedProducts){
        const updatedProducts = storedProducts.filter(product=> product!==id)
        localStorage.setItem('products',JSON.stringify(updatedProducts))
        alert('Product Removed')
    }
}

const getStoredWhishList =()=>{
    const storedWishListStr = localStorage.getItem('wishList')
    if(storedWishListStr){
        return JSON.parse(storedWishListStr)
    }
    return []
}

const setWishList =(id)=>{
    const storedWishList = getStoredWhishList()
    if(storedWishList.includes(id)){
        alert('Product already exist')
    }else{
        storedWishList.push(id)
        const storedWishListStr = JSON.stringify(storedWishList)
        localStorage.setItem('wishList',storedWishListStr)
    }
}

const removeWishList = (id)=>{
    const storedWishList = getStoredWhishList()
    if(storedWishList){
        const updatedWishList = storedWishList.filter(productId=>productId !== id)
        localStorage.setItem('wishList', JSON.stringify(updatedWishList))
        alert('Product Removed')
    }
}

const reset =()=>{
    localStorage.removeItem('products')
}

export {getStoredProducts,setProducts,getStoredWhishList,setWishList,removeWishList,removeProduct,reset}