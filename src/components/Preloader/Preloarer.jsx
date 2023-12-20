import React from 'react';
import gif from '../../img/imag.gif'
import "./Preloader.css"
const Preloader = () => {
  return (
    <div className="preloader">
  <img className="product-img" src={gif}/>
    </div>
  );
};

export default Preloader;