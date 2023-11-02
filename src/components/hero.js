import React from 'react';
import hero from '../asset/bgA.png';

const Hero = () => (
  <div
    className="hero-section"
    style={{
      position: 'relative', backgroundImage: `url(${hero})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',
    }}
  >
    <div style={{
      position: 'absolute'}}>
    <h1>Vision Voyage Travel</h1>
    <p> Navigating Dreams, Connecting Worlds</p>
    <div className=''> 
      <p> Hotel Reservation</p>
      <p> Vacation Planning</p>
      <p> Flight Booking</p>
      <p> Visa Processing</p>
      <p> Education Advising</p>
      <p> Honeymoon Packages</p>
      <p> Travel Insurance</p>
    </div>
  </div>
  </div>
);

export default Hero;
