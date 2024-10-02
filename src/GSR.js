import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const GSR = () => {
  const instructions = [
    { id: 1, title: 'G & SR MANUAL', link: 'https://drive.google.com/file/d/1dd6tcnENvNC-_UDSBNhCJMYkw68jf5Tl/view?usp=sharing' },
   
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">G & SR ' </h2>
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

export default GSR ;