import React, { useContext, useEffect, useState } from "react";
import { DataContext, ProductIdContext } from "./ProductDetails";
import { FaStar ,FaRegStarHalfStroke,FaCartArrowDown, FaHeart} from "react-icons/fa6";
import { getStoredProducts} from "../Utility/utility";
import { useCart } from "../Utility/CartContext";


const DetailsFloat = () => {
  const [details, setDetails] = useState({});
  const [added,setAdded] = useState(false)
  const [wishListAdd,setWishListAdd] =useState(false)
  // useContext
  const productId = useContext(ProductIdContext);
  const data = useContext(DataContext);
  const {addToCart,addToWishList} = useCart()
  // data-fetching
  useEffect(() => {
    const productDetails = [...data].find((element) => element.id == productId);
    setDetails(productDetails || {});
    const storedId = getStoredProducts()
    const isExist = storedId.find(id=> id == productId)
    if(isExist){
        setAdded(true)
        setWishListAdd(true)
    }
  }, [data, productId]);

  const {
    image,
    title,
    price,
    availability,
    description,
    specification = [],
    rating,
    id
  } = details;

//   cart-click-handler
  const cartClickHandler =(id)=>{
        addToCart(id)
        setAdded(true)
  }
  const wishListClickHandler =(id)=>{
        addToWishList(id)
        setWishListAdd(true)
  }
  return (
    <div className="md:relative lg:max-w-[1100px] lg:h-[350px]  mx-auto">
      <div className="outline-offset-4 outline-double outline-white rounded-xl  backdrop-blur-md backdrop-blur-50 lg:absolute lg:-top-60  inset-0 m-auto">
        {/* product-details-container */}
        <div className="max-w-full h-full">
          <div className="hero">
            <div className="hero-content flex-col  lg:flex-row md:items-start items-center md:justify-between justify-center w-full h-full">
              {/* image-container */}
              <div className="w-3/4 mx-auto lg:w-3/5 h-full">
                <img src={image} className="rounded-lg shadow-lg h-full" />
              </div>
              <div className="w-full sm:w-3/4 mx-auto lg:w-3/5  space-y-4">
                <h1 className="text-3xl font-semibold text-primary">
                  {title}
                </h1>
                <p className="text-lg font-semibold text-secondary">
                  Price : {price}$
                </p>
                <p
                  className={`text-lg font-semibold w-fit rounded-xl
                 ${
                   availability
                     ? "text-green-400 p-3 border-2 border-green-400"
                     : "text-red-400 p-3 border-2 border-red-400"
                 } `}
                >
                  {availability ? "In Stock" : "Stock Out"}
                </p>
                <p className="text-lg font-semibold text-secondary">
                  {description}
                </p>
                {/* specification */}
                <ul>
                  <li className="text-lg font-semibold text-dark1">
                    Specification :
                  </li>
                  {specification.map((item, index) => (
                    <li
                      className="text-lg font-medium text-secondary"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <h3 className="text-lg font-semibold text-dark1">Rating :</h3>
                  <div className="flex items-center gap-1 text-xl">
                    <FaStar className="text-orange-400"/>
                    <FaStar className="text-orange-400"/>
                    <FaStar className="text-orange-400"/>
                    <FaStar className="text-orange-400"/>
                    <FaRegStarHalfStroke className="text-orange-400"/>
                    <p className="text-lg font-mono text-dark1 p-2 bg-base-300 rounded-full">{rating}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                    disabled ={added}
                    onClick={()=>cartClickHandler(id)}
                     className="btn px-3 bg-highlight text-white hover:text-highlight">
                        Add TO Cart <FaCartArrowDown/>
                    </button>
                    <button
                    onClick ={()=> wishListClickHandler(id)}
                    disabled ={wishListAdd}
                    className="btn p-4 rounded-full">
                        <FaHeart/>
                    </button>
                  </div>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsFloat;
