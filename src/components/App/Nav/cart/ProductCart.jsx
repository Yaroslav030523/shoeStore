import React, { useState } from 'react';
import './ProductCard.css'
const ProductCard = ({ product, onAddToCart }) => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    onAddToCart(product);
    // setCount(count + 1);
  };

  return (
    <div className="product-card">
      <div className="productCardFull">
        <img className="product-img" src={product.image} alt={product.name} />
        <button className="addToCartDutton" onClick={handleAddToCart}>to buy</button>
        <div className="namePrice">
        <p>{product.name}</p>
        <p className="price">Price: ${product.price}</p>
        </div>
     
        <p>{product.description}</p>
   
        {/* <p>Count: {count}</p> */}
      
      </div>
    </div>
  );
};

export default ProductCard;
