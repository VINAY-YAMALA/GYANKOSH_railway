import React from 'react';
import { Link } from 'react-router-dom';
import './StandingOrders.css';

function SafetyCircularsBulletin() {
  const orders = [
    { label: 'SWR HQ SAFETY CIRCULARS', path: '/swr-hq-safety-circulars' },
    { label: 'SAFETY BULLETIN', path: '/safety-bulletin' },
    { label: 'DIVISION SAFETY CIRCULARS', path: '/division-safety-circulars' },
    
  ];

  return (
    <div className="standing-orders-container">
      <h1 className="sob-title">Safety Drives</h1>
      <div className='back'>
      <div className="orders-list">
        {orders.map((item, index) => (
          <Link key={index} to={item.path} className="order-button">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
  );
}

export default SafetyCircularsBulletin;
