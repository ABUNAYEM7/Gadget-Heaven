import { Link, NavLink, useLocation, } from "react-router-dom";
import { FaCartArrowDown, FaHeart } from "react-icons/fa6";
import { useCart } from "../Utility/CartContext";

const Navbar = () => {
  const {pathname} = useLocation()
  const links = (
    <>
      <li>
        <NavLink className='text-sm font-medium  md:text-lg md:font-bold duration-300' to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink className='text-sm font-medium  md:text-lg md:font-bold'  to={"/Statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink className='text-sm font-medium  md:text-lg md:font-bold'  to={"/Dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );
  const {cartItems,wishListItems} = useCart()
  return (
    <div className={`max-w-screen-2xl mx-auto md:p-3   ${pathname == '/Home/All%20Products' && 'bg-highlight text-white'}`}>
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
          <ul className="menu menu-horizontal px-1 space-x-6">{links}</ul>
        </div>
        <div className="navbar-end space-x-6">
          <NavLink
            className={({isActive})=> `p-4  ${isActive? 'ring-4  ring-secondary' : ''} bg-white rounded-full text-secondary hover:ring-4 hover:ring-secondary relative`}
            to="/Cart"
          >
            <FaCartArrowDown size={16} />
            <h3 className="absolute -top-1 right-5 text-highlight">{cartItems.length}</h3>
          </NavLink>
          <NavLink
            className={({isActive})=> `p-4 ${isActive? 'ring-4  ring-secondary' : ''} bg-white rounded-full text-secondary hover:ring-4 hover:ring-secondary relative`}
            to="/WishList"
          >
            <FaHeart size={20} />
            <h3 className="absolute -top-1 right-5 text-highlight">{wishListItems.length}</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
