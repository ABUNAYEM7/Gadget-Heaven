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

export {getStoredProducts,setProducts}