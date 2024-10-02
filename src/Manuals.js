import React from 'react';
import { Link } from 'react-router-dom';
import './StandingOrders.css';

function Manuals() {
  const orders = [
    { label: 'OPERATING MANUAL(TRAFFIC)', path: '/operating-manual' },
    { label: 'G & SR CORRECTIONS', path: '/g-sr-corrections' },
    { label: 'G & SR COMPARISON SWR-SR-SCR', path: '/g-sr-comparison-swr-sr-scr' },
    { label: 'G & SR', path: '/g-sr' },
    { label: 'DISASTER MANAGEMENT', path: '/disaster-management' },
    { label: 'ACCIDENT MANUAL', path: '/accident-manual' },
    { label: 'ACC.MANUAL CORRECTIONS', path: '/acc-manual-corrections' },

    
  ];

  return (
    <div className="standing-orders-container">
      <h1 className="sob-title">Manuals</h1>
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

export default Manuals;
