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
        return alert('Products Already Exist')
    }else{
        storedWishList.push(id)
        const storedWishListStr = JSON.stringify(storedWishList)
        localStorage.setItem('wishList',storedWishListStr)
    }
}

export {getStoredProducts,setProducts,getStoredWhishList,setWishList}