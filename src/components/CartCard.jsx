import React from 'react';

const CartCard = ({ data }) => {
  const { name, pic, price, quantity } = data;

  return (
    <div className="h-24 p-4 bg-gray-100 rounded flex items-center justify-between hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-emerald-300 rounded flex-shrink-0">
        <img src={pic} alt={name} className="w-full h-full object-cover" />
      </div>

      <span className="text-xl font-semibold flex-1 ml-4">{name}</span>
      <span className="text-lg w-24 text-center">₹{price}</span>
      <span className="text-lg w-32 text-center">Qty: {quantity}</span>
      <span className="text-lg w-24 text-center font-medium">
        ₹{(price * quantity).toFixed(2)}
      </span>
    </div>
  );
};

export default CartCard;
