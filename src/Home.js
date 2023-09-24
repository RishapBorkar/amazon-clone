import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/23/Central/BAU/Unrec/21to25/PC_hero_1_2x._CB598561652_.jpg"
          alt="Error Loading Image"
        />

        <div className="home_row">
          <Product
            id="12345678"
            title="Lean Startup: The Million Copy Bestseller Driving Entrepreneurs to Success
            by RIES ERIC"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._SY342_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="AGARO Regency Stand Mixer With Meat Grinder,1400W with 6L SS Bowl, 1.5L Blending Jar, 6 Speed With Pulse Function"
            price={239}
            rating={5}
            image="https://m.media-amazon.com/images/I/71m5kUgiR2L._SY355_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="49538091"
            title="Noise Pulse 2 Max 1.85 Display, Bluetooth Calling Smart Watch"
            price={139}
            rating={4}
            image="https://m.media-amazon.com/images/I/61SSVxTSs3L._SY450_.jpg"
          />
          <Product
            id="49538092"
            title="Zero to One (L) Paperback – 18 September 2014"
            price={412}
            rating={4}
            image="https://m.media-amazon.com/images/I/71doP+hSREL._SY342_.jpg"
          />
          <Product
            id="49538093"
            title="Pova 5 Pro 5G (Silver Fantasy, 8GB RAM,256GB Storage)| Segment 1st 68W Ultra Fast Charging "
            price={99}
            rating={4}
            image="https://m.media-amazon.com/images/I/618akt6gi+L._SX569_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="49538011"
            title="PHILIPS Brilliance 499P9H1/94 49-inch Curved SuperWide Dual QHD LCD Display with Pop-Up Webcam with Windows Hello"
            price={1200}
            rating={4}
            image="https://m.media-amazon.com/images/I/61CNZJSH-FL._SL1181_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
