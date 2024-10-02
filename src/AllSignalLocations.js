import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const AllSignalLocations = () => {
  const instructions = [
    { id: 1, title: 'ALL SIGNAL LOCATIONS', link: 'https://drive.google.com/link-to-file-37-rev01' },
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">All Signal Locations </h2>
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

export default AllSignalLocations  ;