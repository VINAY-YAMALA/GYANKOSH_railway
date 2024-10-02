import React from 'react';
import { Link } from 'react-router-dom';
import './StandingOrders.css';

function WorkingTimeTable() {
  const orders = [
    { label: 'UBL WTT 18', path: '/ubl-wtt-18' },
    { label: 'SBC WTT 18', path: '/sbc-wtt-18' },
    { label: 'GTL WTT 20', path: '/gtl-wtt-20' },
    { label: 'MYS WTT 19', path: '/mys-wtt-19' },
  ];

  return (
    <div className="standing-orders-container">
      <h1 className="sob-title">Working Time Table</h1>
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

export default WorkingTimeTable;
