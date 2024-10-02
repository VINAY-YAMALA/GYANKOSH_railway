import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const RightHandSideSignals = () => {
  const instructions = [
    { id: 1, title: 'RH SIDE SIGNALS', link: 'https://drive.google.com/file/d/1Boz8-1XPA7jh95vTXZKC_6fzaQ2aRskG/view?usp=sharing' },
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">Right Hand Side Signals </h2>
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

export default RightHandSideSignals ;