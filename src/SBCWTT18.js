import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const SBCWTT18 = () => {
  const instructions = [
    { id: 1, title: 'SBC WTT', link: 'https://drive.google.com/file/d/1kFeHVXIIJ65CrPxXHa6jFkLOAn6n-Ofv/view?usp=sharing' },
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">SBCWTT18</h2>
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

export default SBCWTT18;