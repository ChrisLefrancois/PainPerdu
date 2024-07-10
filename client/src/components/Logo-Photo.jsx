import React from 'react';
import { Link } from 'react-router-dom';
import './Logo-Photo.css';

const LogoPhoto = () => {
  return (
    <div className='brownbox'>
      <div className="boxcontent">
        <h4>The #1 brunch destination in Montreal</h4>
        <p>As recognized by fine dining enthusiasts and food bloggers</p>
      </div>
      <div className="photocontainer">
        <img src="/brunch.jpg" alt="" className="brunch-image" />
        <img src="/brunch.jpg" alt="" className="brunch-image"  />
        <img src="/brunch.jpg" alt="" className="brunch-image" />
        <img src="/brunch.jpg" alt="" className="brunch-image" />
        <img src="/brunch.jpg" alt="" className="brunch-image" />
      </div>
    </div>
  )
}

export default LogoPhoto;
