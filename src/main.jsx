import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './layout/Routes'
import CartProvider from './Utility/CartContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
          <CartProvider>
          <RouterProvider router={routes}/>
          </CartProvider>
  </StrictMode>,
)
