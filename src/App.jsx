import React from 'react'
import Header from './components/Header'
import GroceryList from './pages/GroceryList'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import {CartProvider} from './context/CartContext';
const App = () => {

  return (

    <>
      <CartProvider>

      <Header />
      <Routes>
        <Route path="/" element={<GroceryList/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="!w-64 sm:!w-80 !text-sm"          //small dev ke liyeeeeeeeeee
        bodyClassName="!text-sm"
        containerClassName="!w-[90%] sm:!w-auto"         
      />

        
      </CartProvider>  
    </>

  )
}

export default App
