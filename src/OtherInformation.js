import React from 'react';
import './HQInstructions.css'; // Create this CSS file for better structure

const OtherInformation = () => {
  const instructions = [
    { id: 1, title: 'STATIC INVERTER(SIV)', link: 'https://drive.google.com/file/d/1kcXo2q0B7NGTkHo5xN7xVgQX1ZRwoYmz/view?usp=sharing' },
    { id: 2, title: 'TRAIN HANDLING TECHNIQUE', link: 'https://drive.google.com/file/d/13qp4QPeYM9aALxztJfsA5mW7rC6vhMCX/view?usp=sharing' },
    { id: 3, title: 'TRAIN HANDLING PROCEDURE', link: 'https://drive.google.com/file/d/15jU3_DAz9t9-wcqq-ZoyXapIwEH9Ofmy/view?usp=sharing' },
    { id: 4, title: 'FIRST AID & LIFE MANAGEMENT', link: 'https://drive.google.com/file/d/1yBC3XPsEAS8nYZQIul3-VFAm53RwK8nS/view?usp=sharing' },
    { id: 5, title: 'KNORR BRAKE SYSTEM IN 3-PHASE', link: 'https://drive.google.com/file/d/1jfxN41o36ll1j2KLcWTNKSbUMaWosbWE/view?usp=sharing' },
    { id: 6, title: 'AIR BRAKE SYSTEM FOR GDR', link: 'https://drive.google.com/file/d/180PLalJT5Tu3EU8OwUpDAlg2FnLifecL/view?usp=sharing' },
    { id: 7, title: 'AUTHORITIES', link: 'https://drive.google.com/file/d/17pRzN_ISodm7yLBnDgH69ko3FvC8OpOg/view?usp=sharing' },
    { id: 8, title: 'AUTOMATIC BLOCK SYSTEM', link: 'https://drive.google.com/file/d/17pRzN_ISodm7yLBnDgH69ko3FvC8OpOg/view?usp=sharing' },

   
    
    
    
  ];

  return (
    <div className="hq-container">
      <h2 className="hq-header">OTHER INFORMATION </h2>
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

export default OtherInformation  ;