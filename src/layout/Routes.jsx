import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";
import WishList from "../pages/WishList";
import Errors from "../errorPage/Errors";
import Home from "../pages/Home";
import AllProducts from "../components/products/AllProducts";
import Laptops from "../components/products/Laptops";
import Phones from "../components/products/Phones";
import Accessories from "../components/products/Accessories";
import SmartWatches from "../components/products/SmartWatches";
import MacBooks from "../components/products/Macbooks";
import IPhones from "../components/products/Iphones";

  const routes = createBrowserRouter([
    {
        path :'/',
        element : <MainLayout/>,
        errorElement :<Errors/>,
        children :[
          {
            path :'/',
            element :<Home/>,
            children :[
              {
                path :'Home/:category',
                element :<AllProducts/>
              },
            ]
          },
          {
            path :'/Statistics',
            element :<Statistics/>
        },
        {
            path :'/Dashboard',
            element : <Dashboard/>
        },
        {
            path :'/Cart',
            element : <Cart/>
        },
        {
            path :'/WishList',
            element : <WishList/>
        }
        ]
    },
   
  ])

  export {routes}

