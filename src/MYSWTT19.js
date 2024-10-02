import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const MYSWTT19 = () => {
  const instructions = [
    { id: 1, title: 'MYS WTT', link: 'https://drive.google.com/file/d/1A8pZj3tUsn8tN1CaB6JHo_G6dP1543GK/view?usp=sharing' },
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">MYSWTT19</h2>
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

export default MYSWTT19;