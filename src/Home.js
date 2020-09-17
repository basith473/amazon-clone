import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_ft_bolly._CB405290232_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="121"
            title="The lan startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51itILNsjJL.__AC_SY200_.jpg"
            rating={3}
          />
          <Product
            id="122"
            title="Steelbird Cyborg Double Visor Full Face Helmet, Inner Smoke Sun Shield and Outer Clear Visor (Large 600 MM, Dashing White)"
            price={40.0}
            image="https://m.media-amazon.com/images/I/714TL5qlzCL._AC_UL320_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="123"
            title="Callas Metal Mesh Desk Organizer, Black LD 708-05"
            price={14.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81f5kIpOFkL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="124"
            title="AmazonBasics Whiteboard Drywipe Magnetic with Pen Tray and Aluminium Trim"
            price={20.5}
            image="https://m.media-amazon.com/images/I/518voHRjl-L._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="125"
            title="i-gadgets Acrylic Multipurpose Organizer, 16x11x10cm, Clear"
            price={17.5}
            image="https://images-eu.ssl-images-amazon.com/images/I/71ET4bpDFYL._AC_UL100_SR100,100_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="126"
            title="MAGGI 2-Minute Instant Noodles, Masala"
            price={2.4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41R2GfjRgXL._AC_SY200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
