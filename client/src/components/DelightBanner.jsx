// DelightsBanner.jsx
import React from 'react';
import './DelightBanner.css'; // Import your CSS file for styling

const DelightsBanner = () => {
  const delights = [
    { title: 'Farm Fresh', description: 'Experience Farm Fresh ingredients, straight to your table.' },
    { title: 'Seasonal Flavors', description: 'Discover our Seasonal Flavors, inspired by nature.' },
    { title: 'Signature Dishes', description: 'Indulge in our Signature Dishes, a taste of perfection.' },
    { title: 'Atmospheric Ambience', description: 'Enjoy your meal in a beautifully atmospheric ambience.' },
    { title: 'Fresh Ingredients', description: 'Savor meals made with the finest and freshest ingredients.' },
    { title: 'Farm to Table', description: 'Indulge in fresh, locally-sourced farm to table delicacies.' },
    { title: 'Outdoor Seating', description: 'Relax and soak up the sun with our luxurious outdoor seating.' },
    { title: 'Seasonal Specials', description: 'Savor unique and seasonal specials crafted by our chefs.' },
  ];

  return (
    <div className="delights-banner">
      <div className="delights-header">
        <h1>Discover Our Delights</h1>
        <p>Indulge in an unforgettable brunch experience at au Pain Perdu.</p>
      </div>
      <div className="delights-grid">
        {delights.map((delight, index) => (
          <div key={index} className="delight-box">
            <h2>{delight.title}</h2>
            <p>{delight.description}</p>
            <a href="#">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DelightsBanner;
