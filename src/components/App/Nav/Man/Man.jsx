import React, { useState, useEffect } from 'react';
import data from "./dataMan.json";
import "./Man.css";
import Preloader from '../../../Preloader/Preloarer';

const ProductCard = ({ product, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="product-card">
      <div className="productCardFullMan">
        {!imageLoaded && <Preloader />} {/* прелоадер, якщо зображення ще не завантажилось */}
        <img
          className="product-img"
          src={product.image}
          alt={product.name}
          onLoad={handleImageLoad}  // Викликається після завантаження зображення
          style={{ display: imageLoaded ? 'block' : 'none' }} // Показуємо зображення, коли воно завантажене
        />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

const Man = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Відновлення даних з локального сховища при монтажі компоненту
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    const savedTotalPrice = parseFloat(localStorage.getItem('totalPrice'));
    const savedCount = parseInt(localStorage.getItem('count'));

    if (savedCart) {
      setCart(savedCart);
    }

    if (!isNaN(savedTotalPrice)) {
      setTotalPrice(savedTotalPrice);
    }

    if (!isNaN(savedCount)) {
      setCount(savedCount);
    }
  }, []);

  useEffect(() => {
    // Збереження даних у локальне сховище при оновленні корзини
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice.toString());
    localStorage.setItem('count', count.toString());
  }, [cart, totalPrice, count]);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    const updatedTotalPrice = totalPrice + product.price;
    const updatedCount = count + 1;

    setCart(updatedCart);
    setTotalPrice(updatedTotalPrice);
    setCount(updatedCount);
  };

  return (
    <div className="containerMan">
      <h1 className='menShoes'>Men's Shoes</h1>
      <div className="cart-info">
        <p>Cart</p>
        <p>Total Items: {count}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
      <ProductList products={data.products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Man;
