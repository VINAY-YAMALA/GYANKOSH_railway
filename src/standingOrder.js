// import React from 'react';
// import './StandingOrders.css'; // Create this CSS file with the styling provided below

// function StandingOrders() {
//     const orders = [
//         { label: 'HQ INSTRUCTIONS' },
//         { label: '2024' },
//         { label: '2023' },
//         { label: '2022' },
//         { label: '2021' },
//     ];

//     return (
//         <div className="standing-orders-container">
//             <h1 className="sob-title">SOB</h1>
//             <div className="orders-list">
//                 {orders.map((item, index) => (
//                     <button key={index} className="order-button">
//                         {item.label}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default StandingOrders;

// // StandingOrders.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StandingOrders.css';

function StandingOrders() {
  const orders = [
    { label: 'HQ INSTRUCTIONS', path: '/hq-instructions' },
    { label: '2024', path: '/2024' },
    { label: '2023', path: '/2023' },
    { label: '2022', path: '/2022' },
    { label: '2021', path: '/2021' },
  ];

  return (
    <div className="standing-orders-container">
      <h1 className="sob-title">SOB</h1>
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

export default StandingOrders;
