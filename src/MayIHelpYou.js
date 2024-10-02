import React from 'react';
import { Link } from 'react-router-dom';
import './StandingOrders.css';

function MayIHelpYou() {
  const orders = [
    { label: 'CONTACT US', path: '/contact-us' },
    

    
  ];

  return (
    <div className="standing-orders-container">
      <h1 className="sob-title">MAY I HELP YOU ?</h1>
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

export default MayIHelpYou;
