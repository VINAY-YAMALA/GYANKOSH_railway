import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const EbdOheLoadTable = () => {
  const instructions = [

    { id: 1, title: 'LOAD TABLE', link: 'https://drive.google.com/file/d/19bdtV4amkq5ZXbGQ2f0eENeJ5w0d4IVg/view?usp=sharing' },
    { id: 2, title: 'RDSO EBD', link: 'https://drive.google.com/file/d/1QsiLRRpGFf-b7If6YQItkUhCV44UxLF-/view?usp=sharing' },
    { id: 3, title: 'OHE HANDBOOK', link: 'https://drive.google.com/file/d/1ufweDIhecsyBhOW0FYGOiQ_yRnWa5865/view?usp=sharing' },
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">EBD-OHE-LOAD TABLE  </h2>
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

export default EbdOheLoadTable   ;