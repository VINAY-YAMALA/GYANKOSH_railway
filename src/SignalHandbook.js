import React from 'react';
import { Link } from 'react-router-dom';
import './StandingOrders.css';

function SignalHandbook() {
  const orders = [
    { label: 'STATION WORKING RULES', path: '/station-working-rules' },
    { label: 'RIGHT HAND SIDE SIGNALS', path: '/right-hand-side-signals' },
    { label: 'NEUTRAL SECTION LOCATIONS', path: '/neutral-section-locations' },
    { label: 'MAJOR YARD ROLL DIAGRAMS', path: '/major-yard-roll-diagram' },
    { label: 'ALL SIGNAL LOACTIONS', path: '/all-signal-loactions' },

    
  ];

  return (
    <div className="standing-orders-container">
      <h1 className="sob-title">Signal Handbook</h1>
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

export default SignalHandbook;
