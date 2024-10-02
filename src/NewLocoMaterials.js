import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const NewLocoMaterials = () => {
  const instructions = [
    { id: 1, title: 'WAG12-LP HANDBOOK', link: 'https://drive.google.com/file/d/1yERbt1gUvug47s0pdz8RHXkxuquP8u2L/view?usp=sharing' },


   
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">New Loco Materials </h2>
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

export default NewLocoMaterials  ;