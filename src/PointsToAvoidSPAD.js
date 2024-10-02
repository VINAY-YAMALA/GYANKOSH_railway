import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const PointsToAvoidSPAD = () => {
  const instructions = [
    { id: 1, title: '32 POINTS TO AVOID SPAD', link: 'https://drive.google.com/file/d/19vmKhXMVDYGNAk7NZDqzb66Mzng9lQ8d/view?usp=sharing' },
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header"> 32 POINTS TO AVOID SPAD</h2>
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

export default PointsToAvoidSPAD;