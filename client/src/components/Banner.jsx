// Banner.jsx
import React from 'react';
import './Banner.css'; // Import your CSS file for styling

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        {/* Content for the left side */}
        <div>
          <h2>Left Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Our Menu</button>
        </div>
      </div>
      <div className="banner-right">
        {/* Content for the right side */}
        <h2>Right Content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Banner;
