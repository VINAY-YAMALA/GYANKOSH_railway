import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const DisasterManagement = () => {
  const instructions = [
    { id: 1, title: 'DISASTER MANAGEMENT', link: 'https://drive.google.com/file/d/1PdnaFtfCq7KihfMuMMJ71CEXUXfop3qb/view?usp=sharing' },
   
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">Disaster Management </h2>
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

export default DisasterManagement  ;