// Banner.jsx
import React from 'react';
import './Banner.css'; // Import your CSS file for styling

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <h4>#1 Brunch in Montreal</h4>
        <h1>Delight in Montreal Brunch</h1>
        <p>
          Discover BrunchMontreal – the perfect blend of local ingredients and seasonal dishes, right in the heart of Montreal!
        </p>
        <button className="sign-up-button">Our Menu</button>
      </div>
      <div className="banner-right">
        <img
          src="/brunch.jpg"
          alt="Montreal Brunch"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default Banner;
