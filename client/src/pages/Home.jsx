// src/pages/Home.jsx
import React from 'react';
import Banner from '../components/Banner';
import PhotoBox from '../components/Logo-Photo';
import DelightsBanner from '../components/DelightBanner';

const Home = () => {
  return (
    <div>
      <Banner/>
      <PhotoBox/>
      <DelightsBanner />
    </div>
  );
};

export default Home;
