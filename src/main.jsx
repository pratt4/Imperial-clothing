import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import { UserProvider } from './contexts/user.context.jsx';
import './index.scss'
import { CategoriesProvider } from './contexts/categories.context.jsx';
import { CartProvider } from './contexts/cart.context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <CategoriesProvider>
    <CartProvider>
    <App />

    </CartProvider>


    </CategoriesProvider>

    </UserProvider>
    
    </BrowserRouter>
  </React.StrictMode>,
)
