import React from "react";
import UseTitle from "../hooks/useTitle";
import Info from "../components/Info";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  UseTitle("Gadget Heaver || Dashboard");
  return (
    <div>
      <div>
        {/* details-info-container */}
        <div className="min-h-96 max-w-screen-2xl mx-auto bg-highlight mb-6">
          <div>
            <Info
              title={"Dashboard"}
              subtitle={
                "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
              }
            />
          </div>
          {/* buttons-Container */}
          <div className="flex items-center justify-center gap-5 my-6">
            <NavLink
             to={"/Dashboard/CartDashboard"} 
             className={({isActive}) => `btn  rounded-3xl px-7 border-2 border-white bg-transparent   ${isActive ? 'text-highlight bg-white ' : 'text-white'}`}>
              cart
            </NavLink>
            <NavLink 
            to={"/Dashboard/WishListDashboard"} 
            className={({isActive}) => `btn  rounded-3xl px-7 border-2 border-white bg-transparent   ${isActive ? 'text-highlight bg-white ' : 'text-white'}`}>
              WishList
            </NavLink>
          </div>
        </div>
        {/* outlet-container */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
