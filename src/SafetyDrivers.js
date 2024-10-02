import React from 'react';
import { Link } from 'react-router-dom';
import './StandingOrders.css';

function SafetyDrives() {
  const orders = [
    { label: 'SWR HQ SAFETY DRIVES', path: '/swr-hq-safety-drives' },
    { label: 'RAILWAY BOARD SAFETY DRIVES', path: '/railway-board-safety-drives' },
    { label: 'DIVISION SAFETY DRIVES', path: '/division-safety-drives' },
    
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

export default SafetyDrives;
