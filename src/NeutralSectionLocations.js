import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const NeutralSectionLocations = () => {
  const instructions = [
    { id: 1, title: 'JRU-HSD', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 2, title: 'MYS-SBC', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 3, title: 'RDG-BAY', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 4, title: 'MYS-CMNR', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 5, title: 'RDG-JRU', link: 'https://drive.google.com/link-to-file-37-rev01' },
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">Neutral Section Locations</h2>
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

export default NeutralSectionLocations ;