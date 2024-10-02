import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const CMS = () => {
  const instructions = [

    { id: 1, title: 'Sign-Off in CMS with BMBS', link: 'https://drive.google.com/file/d/13a3biMKRtSA5JR8x3hQszTXvlHqQf3-i/view?usp=sharing' },
    
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">CMS  </h2>
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

export default CMS   ;