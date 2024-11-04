import React, { createContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Info from "./Info";
import DetailsFloat from "./DetailsFloat";
import { useLoaderData, useParams } from "react-router-dom";
export const DataContext = createContext(null);
export const ProductIdContext = createContext(null);

const ProductDetails = () => {
    const data = useLoaderData();
    const { productId } = useParams();

  return (
    <div>
      {/* products-details-section */}
      <ProductIdContext.Provider value={productId}>
        <DataContext.Provider value={data}>
          {/* nav-component */}
          <Navbar />
          {/* details-info-container */}
          <div className="min-h-96 max-w-screen-2xl bg-highlight mb-6">
            <Info
              title={"Product Details"}
              subtitle={
                "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
              }
            />
          </div>
          <section className="min-h-[500px] max-w-screen-xl mx-auto">
            <DetailsFloat />
          </section>
          {/* footer-component */}
          <Footer />
        </DataContext.Provider>
      </ProductIdContext.Provider>
    </div>
  );
};

export default ProductDetails;
