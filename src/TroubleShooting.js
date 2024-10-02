import React from 'react';
import { Link } from 'react-router-dom';
import './StandingOrders.css';

function TroubleShooting() {
  const orders = [
    { label: 'DIESEL LOCO TSD', path: '/disel-loco-tsd' },
    { label: 'CARRIAGE & WAGON TSD', path: '/carriage-wagon-tsd' },
    { label: 'AC CONVENTION LOCO TSD', path: '/ac-convention-loco-tsd' },
    { label: '3 PHASE LOCO STD', path: '/phase-loco-tsd' },
  ];

  return (
    <div className="standing-orders-container">
      <h1 className="sob-title">Trouble Shooting</h1>
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

export default TroubleShooting;
