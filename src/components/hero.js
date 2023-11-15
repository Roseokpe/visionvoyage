import React from 'react';
import hero from '../asset/bgA.png';

const Hero = () => (
  <div
    className="hero-section"
    style={{
      position: 'relative', backgroundImage: `url(${hero})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',
    }}
  >
    <div
      style={{
        position: 'absolute', width: '100%',
      }}
    >
      <h1>Vision Voyage Travel</h1>
      <h2> Navigating Dreams, Connecting Worlds</h2>
      <div className="services">
        <p> Hotel Reservation</p>
        <p> Vacation Packages</p>
        <p> Flight Booking</p>
        <p> Visa Processing</p>
        <p> Study Abroad</p>
        <p> Honeymoon Packages</p>
        <p> Travel Insurance</p>
      </div>
    </div>
  </div>
);

export default Hero;
