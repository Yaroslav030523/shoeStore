import React from 'react';

const CartKid = ({ count, totalPrice }) => {
  return (
    <div className="cart">
       <h1 className="KidShoes">Kid shoes</h1>
      <h2>Cart</h2>
      <p>Total Items: {count}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default CartKid ;
