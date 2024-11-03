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

  const routes = createBrowserRouter([
    {
        path :'/',
        element : <MainLayout/>,
        errorElement :<Errors/>,
        children :[
          {
            path :'/',
            element :<Home/>,  
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

