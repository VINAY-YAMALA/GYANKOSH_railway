import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const MajorYardRollDiagram = () => {
  const instructions = [
    { id: 1, title: 'SBHR', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 2, title: 'SKLR', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 3, title: 'AMSA', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 4, title: 'TK', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 5, title: 'SBC', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 6, title: 'RMGM', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 7, title: 'YPR', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 8, title: 'MYA', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 9, title: 'TNGL', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 10, title: 'UBL', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 11, title: 'RDG', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 12, title: 'HRR', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 13, title: 'DVG', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 14, title: 'HPT', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 15, title: 'RRB', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 16, title: 'BAY', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 17, title: 'CTA', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 18, title: 'JRU', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 19, title: 'ASK', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 20, title: 'MMEC', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 21, title: 'HAS', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 22, title: 'MNGT', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 23, title: 'NTW', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 24, title: 'CMNR', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 25, title: 'AP', link: 'https://drive.google.com/link-to-file-37-rev01' },
    { id: 26, title: 'MYS', link: 'https://drive.google.com/link-to-file-37-rev01' },
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">Major Yard Roll Diagram </h2>
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

export default MajorYardRollDiagram  ;