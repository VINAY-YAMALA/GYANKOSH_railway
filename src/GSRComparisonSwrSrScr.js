import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const GSRComparisonSwrSrScr = () => {
  const instructions = [
    { id: 1, title: 'COMPARISON OF RULES SWR,SCR & SR', link: 'https://drive.google.com/file/d/1a8aXmzVRJ0YchHEQrHxjf8PhpO3gQMFp/view?usp=sharing' },
   
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">G & SR COMPARISON SWR-SR-SCR' </h2>
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

export default GSRComparisonSwrSrScr  ;