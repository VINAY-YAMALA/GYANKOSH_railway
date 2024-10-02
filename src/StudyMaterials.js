import React from 'react';
import { Link } from 'react-router-dom';
import './StandingOrders.css';

function StudyMaterials() {
  const orders = [
    { label: 'SPART-SPIC-TOWER CAR Handbook', path: '/spart-spic-tower-car-handbook' },
    { label: 'OTHER INFORMATION', path: '/other-information' },
    { label: 'NEW LOCO MATERIALS', path: '/new-loco-materials' },
    { label: 'JOINT PROCEDURE ORDERS', path: '/joint-procedure-orders' },
    { label: 'EBD-OHE-LOAD TABLE', path: '/ebd-ohe-load-table' },
    { label: 'CMS', path: '/cms' },
    { label: 'AC & DIESEL LOCO Handbook', path: '/ac-diesel-loco-handbook' },

    
  ];

  return (
    <div className="standing-orders-container">
      <h1 className="sob-title">OTHER MATERIALS</h1>
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

export default StudyMaterials;
