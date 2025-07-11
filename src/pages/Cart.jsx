import React from 'react';
import { useCart } from '../context/CartContext';
import CartCard from '../components/CartCard';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart } = useCart(); 
const orderPlaced = () => {
    // 1. Show success message
    toast.success("Order placed successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
    

    
    // 3. Optional: Redirect to home page after delay
    setTimeout(() => {
      window.location.href = '/'; // or use navigate('/') if using react-router
    }, 2000);
  };
  return (
    <div className="cart-page p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty ☹️</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <CartCard 
              key={item.id} 
              data={item}   
            />
          ))}
        </div>
      )}
      {cart.length > 0 && (
  <div className="mt-6 p-4 bg-gray-100 rounded-lg flex flex-row-reverse">

    <button onClick={orderPlaced} className="mt-0 w-60 py-2 text-xl font-semibold float-end bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
      Total: ₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}  <br></br>  Checkout
    </button>
  </div>
)}
    </div>
    
  );
};

export default Cart;