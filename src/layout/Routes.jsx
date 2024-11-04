import {
    createBrowserRouter,
    Navigate
  } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";
import WishList from "../pages/WishList";
import Errors from "../errorPage/Errors";
import Home from "../pages/Home";
import AllProducts from "../components/products/AllProducts";
import ProductDetails from "../components/ProductDetails";

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
                index : true,
                element : <Navigate to ='Home/All Products'/>
              },
              {
                path :'Home/:category',
                element :<AllProducts/>,
                loader : ()=> fetch('../AllData.json')
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
    {
      path :'Home/:category/:productId',
      element :<ProductDetails/>,
      loader : ()=> fetch('../AllData.json')
    }
  ])

  export {routes}

