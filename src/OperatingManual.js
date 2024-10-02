import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const OperatingManual = () => {
  const instructions = [
    { id: 1, title: 'OPERATING MANUAL(TRAFFIC)', link: 'https://drive.google.com/file/d/1g9Dq6UQ9tLcO8iyPNUsb90Higs9B_Wxg/view?usp=sharing' },
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">Operating Manual </h2>
      <div className='back1'>
      <ul className="hq-list">
        {instructions.map((instruction) => (
          <li key={instruction.id} className="hq-item">
            <a
              href={instruction.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hq-link"
            >
              {instruction.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default OperatingManual  ;