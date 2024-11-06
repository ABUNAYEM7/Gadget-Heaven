import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import UseTitle from "../../hooks/useTitle";

const AllProducts = () => {
  const { category } = useParams();
  UseTitle (`Gadget Heaven || ${category}`)
  const AllData = useLoaderData();
  const [data, setData] = useState([]);

  useEffect(() => {
    const halfData = AllData.slice(0, 6)
    setData(halfData)
    if (category === "All Products") {
      setData(AllData)
    }else{
      const categories = AllData.filter(element=> element.category === category)
      setData(categories)  
    }
  }, [category, AllData])


  // data-validations
  {if(data.length <= 0) return <p className="text-3xl md:text-6xl font-bold text-highlight text-center my-6">Coming Soon</p>}
  return (
  <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
    {data.map(element=> 

      <div
       key={element.id} 
       className="card shadow-2xl p-4 max-w-96 hover:scale-105 duration-500">
      <figure
      className="w-11/12 max-h-64 mx-auto" 
      >
        <img
          className="w-full max-h-full object-cover object-center"
          src={element.image}
          alt={element.title}/>
      </figure>
      <div className="card-body py-4 px-2 space-y-3">
        <h2 className="card-title text-xl md:text-2xl font-semibold text-dark1">{element.title}</h2>
        <p className="text-lg font-medium text-secondary">Price : {element.price}$</p>
        <div className="card-actions justify-end">
          <Link
          to={`/Home/${element.category}/${element.id}`}
           className="btn px-4 bg-highlight text-white hover:text-highlight">View Details</Link>
        </div>
      </div>
    </div>
    )}
  </div>)
};

export default AllProducts;
