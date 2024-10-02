import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const UBLWTT18 = () => {
  const instructions = [
    { id: 1, title: 'UBL WTT', link: 'https://drive.google.com/file/d/1Nztf0lHSEpthJaJSIF-59JKzonVwIErV/view?usp=sharing' },
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">UBLWTT18</h2>
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

export default UBLWTT18;