import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';

import "./Routes.css"
import Switch from 'react-router-dom';
import Kid from "../../components/App/Nav/Kid/Kid"
import Home from '../Home/Home';
import Woman from '../App/Nav/Woman/Woman';
import Man from '../App/Nav/Man/Man';
import ProductCard from "../ProductCard/ProductCard"
import ErrorPg from "../Routes/ErrorePg/ErrorePg"
import imgCart from "../../img/Vector.png"

function AppRoutes() {
  return (
 
 
      <div className='routesMainDiv'>
        <nav className='nav'>
      
              <Link to="/">HOME</Link>
     
              <Link to="/Woman">WOMAN</Link>
       
              <Link to="/Man">MAN</Link>

              <Link to="/Kid">KIDS</Link>

              {/* <Link to="/ProductCard">ProductCard</Link> */}
              
              <Link to="/ErrorPg"><div class="img-container">
 

                <img className="imgCart" src={imgCart}  /></div></Link>
      
        </nav>

        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Woman" element={<Woman/>} />
        <Route path="/Man" element={<Man/>} />
        <Route path="/Kid" element={<Kid/>} />
        <Route path="/ProductCard" element={<ProductCard/>} />
        <Route path="/ErrorPg" element={<ErrorPg/>} />

      </Routes>
      </div>

  );
}
export default AppRoutes;