import React from 'react';
import { Link } from 'react-router-dom';
import './StandingOrders.css';

function GradientCharts() {
  const orders = [
    { label: 'GRADIENT CHARTS DATA', path: '/gradient-charts-data' },

    
  ];

  return (
    <div className="standing-orders-container">
      <h1 className="sob-title">GRADIENT CHARTS</h1>
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

export default GradientCharts;
