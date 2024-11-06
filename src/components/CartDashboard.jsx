import React, { useEffect, useState } from "react";
import { useCart } from "../Utility/CartContext";
import { IoTrashBinSharp } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";
import { HiOutlineAdjustments } from "react-icons/hi";
import checkMark from '../assets/Group.png'
import { toast } from "react-toastify";

const CartDashboard = () => {
  const [storedCart, setStoreCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [sorted, setSorted] = useState(false);
  const { cartItems, removedProducts,resetAll } = useCart();
  const data = useLoaderData();
  const navigate = useNavigate()

  useEffect(() => {
    // filter-existingData
    const storedCart = [...data].filter((element) =>
      cartItems.includes(element.id)
    );
    setStoreCart(storedCart);
    // calculate-price
    const totalPrice = storedCart.reduce(
      (pre, element) => pre + parseInt(element.price),
      0
    );
    setPrice(totalPrice);
  }, [cartItems, data]);


  // sortClickHandler
  const sortClickHandler = () => {
    const sort = [...storedCart].sort((a, b) => b.price - a.price);
    setStoreCart(sort);
    setSorted(true);
    toast.success('Sorted By Price Successfully')
  };


  // remove product from cart
  const removeProductHandler = (id) => {
    // removeItem-function
    removedProducts(id);

    // update-storedCart
    const updatedProduct = storedCart.filter((element) => element.id !== id);
    setStoreCart(updatedProduct);

    // calculate-price
    const removeItem = storedCart.find((element) => element.id === id);
    const itemPrice = parseInt(removeItem.price);
    setPrice(price - itemPrice);
      toast.success('Product Removed')
  };


  //purchaseClickHandler
  const purchaseClickHandler = () => {
    purchaseModal.showModal()
  };

  // modalCloseHandler
  const modalCloseHandler=(e)=>{
    e.preventDefault()
    resetAll()
    setStoreCart([])
    setPrice(0)
    setSorted(false)
    navigate('/')
  }

  {if(storedCart.length <= 0 ) return <p className="text-3xl md:text-6xl font-bold text-highlight text-center my-10">No Product Added</p>}

  return (
    <div className="max-w-screen-xl mx-auto my-6 md:p-4 border-2">
      {/* button-container */}
      <div className="flex flex-col md:flex-row items-center md:justify-between  gap-4 ">
        <div>
          <h3 className="text-3xl font-bold">Cart</h3>
        </div>
        <div className="flex items-center justify-between gap-2 w-full">
          <h3 className="text-xl font-semibold md:text-3xl md:font-bold">Total Cost : {price}</h3>
          <div className="space-x-2 space-y-2">
            <button
              disabled={storedCart.length <= 1}
              onClick={() => sortClickHandler()}
              className="btn bg-transparent text-highlight border-highlight rounded-2xl"
            >
              {sorted ? "Sorted By Price" : "Sort By Price"}
              <HiOutlineAdjustments />
            </button>
            <button
              onClick={purchaseClickHandler}
              disabled={storedCart.length <= 0}
              className="btn px-6 bg-highlight text-white hover:text-highlight rounded-2xl"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      {/* cards-container */}
      <div className="flex flex-col gap-5 my-6">
        {storedCart.map((cart) => (
          <div
            key={cart.id}
            className="flex md:flex-row flex-col  justify-between items-center gap-5 p-4 shadow-2xl"
          >
            {/* card-info-container */}
            <div className="flex md:flex-row flex-col items-center gap-2">
              <div className="w-40 h-40 ">
                <img
                  className="w-full rounded-xl"
                  src={cart.image}
                  alt={cart.title}
                />
              </div>
              <div className="space-y-3 flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-bold text-dark1">{cart.title}</h3>
                <p className="font-medium text-secondary w-2/3 text-center md:text-start">
                  {cart.description}
                </p>
                <p className="text-xl font-medium text-secondary">
                  Price : {cart.price}$
                </p>
              </div>
            </div>
            {/* button-container */}
            <div>
              <button
                onClick={() => removeProductHandler(cart.id)}
                className="btn btn-error text-white p-3 rounded-full"
              >
                <IoTrashBinSharp size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* modal-container */}
      <dialog id="purchaseModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col items-center gap-3">
          <div>
            <img className="w-20 h-20" src={checkMark} alt="checkMark" />
          </div>
          <h3 className="font-bold text-xl">Payment Successfully</h3>
          <p className="text-lg font-medium text-secondary">
            Thanks For Purchasing
          </p>
          <p className="text-lg font-medium text-secondary">
            Total : {price}$
          </p>
          <div className="modal-action flex items-center w-full justify-center ">
            <form method="dialog " className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button
              onClick={modalCloseHandler}
               className="btn w-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CartDashboard;
