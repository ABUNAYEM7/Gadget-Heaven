import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown, FaHeart } from "react-icons/fa6";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className='text-sm font-medium  md:text-lg md:font-bold' to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink className='text-sm font-medium  md:text-lg md:font-bold'  to={"/Statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink className='text-sm font-medium  md:text-lg md:font-bold'  to={"/Dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-screen-2xl mx-auto md:p-3 bg-highlight text-white">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-primary space-y-2"
            >
              {links}
            </ul>
          </div>
          <div>
            <Link to={'/'} className="text-lg font-medium md:text-xl md:font-bold ">Gadget Heaver</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
        </div>
        <div className="navbar-end space-x-6">
          <NavLink
            className={({isActive})=> `p-2  ${isActive? 'ring-4  ring-secondary' : ''} bg-white rounded-full text-secondary hover:ring-4 hover:ring-secondary`}
            to="/Cart"
          >
            <FaCartArrowDown size={16} />
          </NavLink>
          <NavLink
            className={({isActive})=> `p-2  ${isActive? 'ring-4  ring-secondary' : ''} bg-white rounded-full text-secondary hover:ring-4 hover:ring-secondary`}
            to="/WishList"
          >
            <FaHeart size={20} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;