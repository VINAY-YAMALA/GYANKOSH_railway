import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const SPARTSPICTOWERCARHandbook = () => {
  const instructions = [
    { id: 1, title: 'SPIC HANDBOOK', link: 'https://drive.google.com/file/d/1qaannOZotEGaW6PnD51zlvJd1f7jjblG/view?usp=sharing' },
    { id: 2, title: 'TOWER CAR HANDBOOK', link: 'https://drive.google.com/file/d/1fo0ylVKjcC4xBycOSm1dZbkpTWb6HDVb/view?usp=sharing' },
    { id: 3, title: 'SPART HANDBOOK', link: 'https://drive.google.com/file/d/1ymF-Qau-M7-fY_iOPDxLpSK152rv5IQz/view?usp=sharing' },
   
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">SPART-SPIC-TOWER CAR Handbook  </h2>
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

export default SPARTSPICTOWERCARHandbook  ;