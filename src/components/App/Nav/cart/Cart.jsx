import React from 'react';
import './Cart.css'
const Cart = ({ count, totalPrice }) => {
  return (
    <div className="cart">
       <h1 className="WomenShoes">Women shoes</h1>
      <h2>Cart</h2>
      <p>Total Items: {count}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
