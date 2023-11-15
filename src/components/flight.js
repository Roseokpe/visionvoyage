import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import flightImage from '../asset/flight.png';

const Flight = () => (
  <div
    className="flight-section"
    style={{
      backgroundColor: '#F8F9FA', padding: '24px 2px',
    }}
  >
    <div className="flight-image" style={{ width: '350px', borderRadius: '12px', margin: '0 auto' }}>
      <Image src={flightImage} rounded style={{ height: '220px', width: '350px' }} />
    </div>

    <div style={{ padding: ' 0 3%' }}>
      <h2 style={{ textAlign: 'center', color: '#4F87D8' }}>Flight Booking</h2>
      <p style={{ paddingTop: '12px' }}>
        Our flight booking service allows customers to book flights to almost anywhere in
        the world. We offer a wide range o options, including economy, business and first-class
        tickets, as well as last-minute deals and package discounts.
        We also provide updates on Flight schedules, delays and cancellations;
        ensuring that customers have the most-up-to-date information when making their travel plans.
      </p>
      <Button>Book flight</Button>
    </div>
  </div>
);

export default Flight;
