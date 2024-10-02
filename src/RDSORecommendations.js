import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const RDSORecommendations = () => {
  const instructions = [
    { id: 1, title: 'PRECAUTIONS TO AVOID SPAD', link: 'https://drive.google.com/file/d/1P3LJJfvV2t9uVKljA_qzoII3jYNgw53i/view?usp=sharing' },
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">RDSO RECOMMENDATIONS</h2>
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

export default RDSORecommendations;