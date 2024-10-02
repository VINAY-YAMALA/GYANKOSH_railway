import React from 'react';
import { Link } from 'react-router-dom';
import './StandingOrders.css';

function PreventionOfSPAD() {
  const orders = [
    { label: 'RDSO RECOMMENDATIONS', path: '/rdso-recommendations' },
    { label: 'POINTS TO AVOID SPAD', path: '/points-to-avoid-spad' },

  ];

  return (
    <div className="standing-orders-container">
      <h1 className="sob-title">Spad Prevention</h1>
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

export default PreventionOfSPAD;
