import React from 'react';
import { Link } from 'react-router-dom'; // Імпортуюмо Link з react-router-dom

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="productCardFull">
        {/* <img className="product-img" src={product.image} alt={product.name} /> */}
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price}</p>
        {/* Використовуємо Link для переходу до корзини з параметром product */}
        {/* <Link to={{ pathname: '/cart', state: { product } }}>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </Link> */}
      </div>
    </div>
  );
};

export default ProductCard;