import React, { useState } from 'react';
import ProductCard from '../cart/ProductCart';
import CartKid  from './cartKid'
import data from './dataKid.json';
import './Kid.css';

const Kid = () => {
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(0);

  const handleAddToCart = (product) => {
    setTotalPrice(totalPrice + product.price);
    setCount(count + 1);
  };

  return (
    <div className="containerKid">
      <CartKid  count={count} totalPrice={totalPrice} />
     
      <div className="product-list">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
        
      </div>
    </div>
  );
};

export default Kid;
