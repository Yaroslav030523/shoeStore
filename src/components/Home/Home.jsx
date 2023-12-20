import React from "react";
import "./Home.css";
import Nav from "../App/Nav/Nav";
import imagePart from "../../img/Vector.png";
import imagePurpul from "../../img/purpul.png";
import imageGreen from "../../img/grean.png";
import imageRed from "../../img/red.png";
import imageLogo from "../../img/Frame 1.png";
const Home = () => {
  return (
    <body className="body">
      <div className="header">
        <div className="logo">
          <img className="imageLogo" src={imageLogo} alt="Logo" />
        </div>

        <div></div>
      </div>
      <div>
        <div>
          <div className="mainDiv">
            <h2>134$</h2>
            <div>
              <p>JORDAN</p>
              <p>JUMPMAN 2021 PF</p>
            </div>
            <div className="exclusive">
              <p>exclusive</p>
            </div>
          </div>
        </div>

        <div className="bot">
          <div>
            <h3>CHOOSE COLOR :</h3>
            <div className="chouseColopContainer">
              <img className="chouseColop" src={imageRed} alt="shkar" />
              <img className="chouseColop" src={imagePurpul} alt="shkar" />
              <img className="chouseColop" src={imageGreen} alt="shkar" />
            </div>
          </div>
          <div className="buttoms">
            <div className="buyNow">Add to cart</div>
            <div className="buyNow">Buy now</div>
          </div>
          <div className="INSPIRATION">
            <h3>INSPIRATION</h3>
            <p>
              Inspired by the design of the latest Air Jordan game shoe, the
              Jordan Jumpman 2021 helps up-and-coming players level up their
              game.
            </p>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
